import { Client } from "@notionhq/client";

const isValidEmail = (email) => {
  // Simple regex for email validation
  return /\S+@\S+\.\S+/.test(email);
};

const isValidPhoneNumber = (phoneNumber) => {
  // Regex to check if phone number starts with a '+' followed by digits
  return /^\+\d+/.test(phoneNumber);
};
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // Only allow POST requests
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { name, email, message, phoneNumber, budget } = req.body;

    // Check for missing fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return res.status(400).json({ message: 'Invalid phone number format. Please include country code e.g. +91' });
    }

    // Initialize the Notion client
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const databaseId = process.env.NOTION_PAGE_ID;

    // Add data to Notion
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        'Name': { 
          title: [{ text: { content: name } }]
        },
        'Email': {
          email: email
        },
        'Message': {
          rich_text: [{ text: { content: message } }]
        },
        'Phone Number': {
          rich_text: [{ text: { content: phoneNumber || '' } }]
        },
        'Budget': {
          select: { name: budget || '' }
        }
      }
    });

    res.status(200).json({ message: 'Success', id: response.id });
  } catch (error) {
    console.error('Notion API error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
