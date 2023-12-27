import { Client } from "@notionhq/client";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;

      // Initialize the Notion client
      const notion = new Client({ auth: process.env.NOTION_API_KEY });
      const databaseId = process.env.NOTION_PAGE_ID;

      // Add data to Notion
      const response = await notion.pages.create({
        parent: { database_id: databaseId },
        properties: {
          'Name': { 
            title: [
              { 
                text: { content: name } 
              }
            ]
          },
          'Email': {
            email: email
          },
          'Message': {
            rich_text: [
              { 
                text: { content: message } 
              }
            ]
          }}
      });

      res.status(200).json({ message: 'Success', id: response.id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
