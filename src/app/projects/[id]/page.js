"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from '../../components/(header)/header';
import Footer from '../../components/(footer)/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const projectsData = [
  {
    id: 1,
    image: "/assets/img/tokenwale.png",
    title: "TokenWale",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://www.tokenwale.in/",
    description: "Crypto Project"
  },
  {
    id: 2,
    image: "/assets/img/imbuzi.png",
    title: "Imbuzi Ecom Fashion Brand",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://imbuzi.in/",
    description: "Premium Fashion Ecommerce brand"
  },
  {
    id: 3,
    image: "/assets/img/medinobel.png",
    title: "Medinobel",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://www.medinobel.com/",
    description: "Patient Doctor Appointment App"
  },{
    id: 4,
    image: "/assets/img/get_in_guestlist.png",
    title: "GuestInMe Club App",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://play.google.com/store/apps/details?id=com.guestinme.guestinme",
    description: "Nightlife Aggregator Platform"
  },{
    id: 5,
    image: "/assets/img/show_world_film_directory.png",
    title: "Show World Film Directory",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://play.google.com/store/apps/details?id=com.showworld.showworldfilmdirectory&hl=en_IN&gl=US",
    description: "A directory of professionals from entertainment industry"
  },{
    id: 6,
    image: "/assets/img/the_stripe_nft.png",
    title: "The Stripes NFT",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://www.youtube.com/playlist?list=PLwXSCBuwy1QuSccdzqB6coWYDhJCx-CRk",
    description: "The Stripes NFT minting Dapp"
  },{
    id: 7,
    image: "/assets/img/vega.png",
    title: "Vega Auto Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://vegaauto.com/",
    description: "Motor gear brand"
  },{
    id: 8,
    image: "/assets/img/watermelon_gang.png",
    title: "Watermelon Gang Creative Agency Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://thewatermelongang.com/",
    description: "An exceptional marketing agency"
  },{
    id: 9,
    image: "/assets/img/edtech_platform.png",
    title: "Ed-tech Platform",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://courses.alisolanki.com/",
    description: "Hands-on Courses"
  },{
    id: 10,
    image: "/assets/img/kasu_loyalty.png",
    title: "Kasu Loyalty",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://kasu-ui.vercel.app/",
    description: "Blockchain based loyalty program through $KASU tokens"
  },{
    id: 11,
    image: "/assets/img/helper_ai.png",
    title: "Helper AI Chrome Extension",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://helper-ai.alisolanki.com/",
    description: "Chrome Extension"
  },{
    id: 12,
    image: "/assets/img/kart_racing_league.png",
    title: "Kart Racing League Website",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://krl-ui.vercel.app/",
    description: "Blockchain game"
  },{
    id: 13,
    image: "/assets/img/typer_ai.png",
    title: "Typer AI webapp",
    tags: ["Branding", "UI/UX", "Development"],
    url: "https://typer-ai.vercel.app/",
    description: "Webapp"
  },
  // ... other projects to be added here ...
];

export default function ProjectDetails({ params }) {
//   const router = useRouter();
//   const { id } = router.query;
  const [project, setProject] = useState(null);

  useEffect(() => {
    const projectDetails = projectsData.find((proj) => proj.id.toString() === params.id );
    setProject(projectDetails);
  }, [params.id]);

  if (!project) {
    return <p>Loading...</p>; // Might replace with Loader.js
  }

  return (  
    <>
      <Header />
      <div className="breadcrumb_area two" data-bg-color="#F5DB6E">
        <div className="container">
          <div className="breadcrumb_content">
            <h2>{project.title}</h2>
            <div className="breadcrumb_category">
              <span><a href="/">Home</a></span>
              <span><FontAwesomeIcon icon={faArrowRight} /></span>
              <span>Projects</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Portfolio Single Section */}
      <section className="portfolio_single">
        <div className="container">
          <div className="portfolio_single_content">
            <div className="top">
              <img src={project.image} alt={project.title} className="min_img" />
              {/* Tags - Uncomment and adjust as and when all tags are ready */}
              {/* <ul className="tags list-unstyled">
                {project.tags.map((tag, index) => (
                  <li key={index}><a href="#" className="bg_btn">{tag}</a></li>
                ))}
              </ul> */}
              <div className="main_content">
                <div className="section_title">
                  <h2>{project.title}</h2>
                </div>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

