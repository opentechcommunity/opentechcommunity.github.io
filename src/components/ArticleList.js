// src/components/ArticleList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const articles = [
    {
      id: 465,
      title: "Exploring the Historical Significance and Potential of Open Source in Nepal's Tech Community"
    },
    {
      id: 466,
      title: "Advancing Education Through Open Technologies: Unveiling the Potential in Universities"
    },
    {
      id: 467,
      title: "Exploring Open Technologies: Building Connections and Promoting Adoption"
    },
    {
      id: 468,
      title: "Building an Open and Sustainable Tech Community: Planning, Philosophy, and Innovation"
    },
    {
      id: 469,
      title: "Open Tech Community Launches Meetup Series"
    },
    {
      id: 470,
      title: "Strategies for Open Source Advocacy and Collaborative Technological Advancements: Highlights from the Open Tech Community Meeting"
    },
    {
      id: 471,
      title: "Fostering Sustainable Models and Bridging the Digital Gap: Exploring Open Source, Blockchain, and Local Innovation in Open Tech Community"
    },
    {
      id: 472,
      title: "Blockchain Expertise and College Partnerships: Empowering Tech Education and Collaboration"
    },
    {
      id: 473,
      title: "Exploring VR, Blockchain, and Policy: Insights from an Open Tech Community Gathering"
    },
    {
      id: 474,
      title: "Empowering Tech Communities: Strategies for Engagement, Growth, and Collaboration"
    },
    {
      id: 475,
      title: "Empowering the FOSS Movement in Nepal: Exploring Activities for Awareness, Collaboration, and Growth"
    },
    {
      id: 476,
      title: "Empowering FOSS and OSM Education: Uniting for Expansion and Collaboration in Nepal"
    },
    {
      id: 477,
      title: "Open Tech Community Meeting: Updates, Insights, and Karaoke Fun"
    },
    {
      id: 478,
      title: "OSM Hackfest 2022: Collaborative Planning and Team Formation for Open Source Meetup Event"
    },
    {
      id: 479,
      title: "Exploring Open Hardware: Fostering Collaboration and Innovation in the Open Tech Community"
    },
    {
      id: 480,
      title: "Planning the OSM Hackfest: Leveraging Satellite Data and Collaboration for OpenStreetMap Innovation"
    },
    {
      id: 481,
      title: "Meeting Highlights: OSM Hackfest 2022 Planning and Team Formation"
    },
    {
      id: 482,
      title: "Empowering Open Technologies: Insights on Open Data, FOSS, and OpenStreetMap"
    },
    {
      id: 483,
      title: "Exploring the Synergy: Open Technologies and Data Journalism"
    },
    {
      id: 484,
      title: "Exploring Open Technologies: OpenStreetMap, Open Data, and FOSS Orientation at Kathford (CSIT & Engineering)"
    },
    {
      id: 485,
      title: "Orientation Program at Padma Kanya Campus: Exploring Open Data, FOSS, and OpenStreetMap with Industry Experts"
    },
    {
      id: 486,
      title: "Empowering Civic Tech: Harnessing Open Technology for Cultural Impact and Social Change"
    },
    {
      id: 487,
      title: "Exploring Open Tech: Open Data, FOSS, and OpenStreetMap Insights and Empowerment"
    },
    {
      id: 488,
      title: "Empowering Open Technologies: Unveiling Open Data, FOSS, and OpenStreetMap at APEX College"
    },
    {
      id: 489,
      title: "Exploring Open Data, FOSS, and OpenStreetMap: A Journey of Possibilities"
    },
    {
      id: 490,
      title: "Prioritizing Democracy: Open Tech Community Temporarily Suspends Regular Meeting to Encourage Voting in National Election"
    },
    {
      id: 491,
      title: "Exploring Open Data, FOSS, and OpenStreetMap: Insights from IOE Paschimanchal Campus Orientation Program"
    },
    {
      id: 492,
      title: "Exploring Open Technology: Empowering Transparency, Collaboration, and Innovation through Open Data, FOSS, and OpenStreetMap"
    },
    {
      id: 493,
      title: "Open Data, FOSS, and OpenStreetMap: Unleashing Innovation and Collaboration in Tech"
    },
    {
      id: 494,
      title: "Empowering Academia: Exploring Open Data, FOSS, and OpenStreetMap for Innovation and Collaboration"
    },
    {
      id: 495,
      title: "Exploring Open Tech: Empowering Communities through Open Data, FOSS, and OpenStreetMap"
    },
    {
      id: 496,
      title: "Exploring Open Tech: Open Data, FOSS, and OpenStreetMap for Empowered Communities"
    },
    {
      id: 497,
      title: "Exploring Technology's Societal Impact: Democracy, Leadership, and Openness"
    },
    {
      id: 498,
      title: "Exploring Open Data, Free and Open Source Software, and OpenStreetMap: A Comprehensive Orientation Program at Kathmandu Engineering College"
    },
    {
      id: 499,
      title: "Promoting Openness: Exploring Open Data, FOSS, and OpenStreetMap at Sagarmatha College"
    },
    {
      id: 500,
      title: "Exploring Open Technology: Unleashing the Power of Open Data, FOSS, and OpenStreetMap"
    },
    {
      id: 501,
      title: "Empowering Open Technologies: Exploring Open Data, FOSS, and OpenStreetMap at Butwal Campus"
    },
    {
      id: 502,
      title: "Empowering Tech Community: Exploring Open Data, FOSS, and OpenStreetMap"
    },
    {
      id: 503,
      title: "Exploring Open Data, FOSS, and OpenStreetMap: Empowering Geomatics Education"
    },
    {
      id: 504,
      title: "Exploring Baato Services and Open Tech Ideas in Nepal: A Community Discussion"
    },
    {
      id: 505,
      title: "Reflections on OSM Hackfest 2022: Successes, Challenges, and Future Directions"
    },
    {
      id: 506,
      title: "OSM Hackfest 2022 Wrap-up: Reflections, Hiking, and Community Engagement"
    },
    {
      id: 507,
      title: "Exploring Community Growth Strategies and Open Hardware Integration: Insights from the Open Tech Community Meeting"
    },
    {
      id: 508,
      title: "Exploring Open-Source Community Dynamics and Open Hardware Initiatives: Insights from the Open Tech Community Meeting"
    },
    {
      id: 509,
      title: "Software Freedom Day 2022 Celebration and Discussion on the Status of Open Source Projects and Initiatives in Nepal at NCIT College, organized by NOSK Club"
    },
    {
      id: 510,
      title: "Software Freedom Day 2022 Celebration and Discussion on Open Source Projects in Nepal, organized by KUCC and KUOSC club at Kathmandu University"
    },
    {
      id: 511,
      title: "Exploring the Benefits of Free Software and Celebrating Software Freedom Day: A Community Perspective"
    },
    {
      id: 512,
      title: "Expanding Open Tech Community: Fostering Collaboration and Inclusion"
    },
    {
      id: 513,
      title: "Empowering College Clubs: Exploring Research Opportunities in Open Technologies"
    },
    {
      id: 514,
      title: "Localizing Nepal's Map: Empowering Communities through OpenStreetMap"
    },
    {
      id: 515,
      title: "Exploring Open Technologies and Collaborating with the Scientific Community: Insights from the Open Tech Community Meetup"
    },
    {
      id: 516,
      title: "Exploring OpenStreetMap: Leveraging Open Data for Innovation and Collaboration"
    },
    {
      id: 517,
      title: "Driving Open Technology Initiatives in Universities: Empowering Clubs and Communities"
    },
    {
      id: 518,
      title: "Exploring Open Technology and Research in Computer Science: Insights from the Open Tech Community Event at Balkumari"
    },
    {
      id: 519,
      title: "Identifying Open Source Projects: Collaborative Engagement and Contribution Focus"
    },
    {
      id: 520,
      title: "Exploring Data Empowerment: Unleashing the Potential for Non-Technical Communities"
    },
    {
      id: 521,
      title: "Exploring Cryptocurrency and Legal Framework in Nepal: Insights from Open Tech Community Discussion"
    },
    {
      id: 522,
      title: "Exploring Nepal's Open Data Landscape: Insights and Celebrations"
    },
    {
      id: 523,
      title: "Exploring Decentralized Technology: A Focus on Blockchain and Ethereum"
    },
    {
      id: 524,
      title: "Open Tech Community: Planning a Dynamic Hackfest Event for Tech Advancement and Collaboration"
    },
    {
      id: 525,
      title: "Online Call for Volunteers: Open Tech Community's Effort to Engage Skilled Contributors"
    },
    {
      id: 526,
      title: "Exploring the Dynamic Initiatives of the Open Tech Community"
    },
    {
      id: 527,
      title: "Orientation Session: Exploring Open Tech Community and Volunteering Opportunities"
    },
    {
      id: 528,
      title: "Empowering Tech Communities: Volunteering Activities Planning & Engaging Talks on April 15, 2023"
    },
    {
      id: 529,
      title: "Promoting Open Technologies and Collaboration: Insights from Open Tech Community Meeting with Dr. Anna Berti Suman"
    },
    {
      id: 530,
      title: "Assessing College Club Progress and Strengthening Community Bonds: A Hike Meeting in Shivapuri Hills"
    },
    {
      id: 531,
      title: "Event Summary - FOSS Movement, Entrepreneurship in Open Source, Civic Technologies, and GIS Training"
    },
    {
      id: 532,
      title: "Exploring Projects and Collaboration: Recap of Open Tech Community's May 13, 2023 Meetup"
    },
    {
      id: 533,
      title: "Exploring AI's Impact and Adoption in Nepal: Insights from the Open Tech Community Discussion"
    },
    {
      id: 534,
      title: "Advancing OpenStreetMap in Nepal: Insights and Collaborative Initiatives"
    },
    {
      id: 535,
      title: "Transitioning Towards Inclusive and Innovative Engagement: The Conclusion of Frequently Occurring Meetups by the Open Tech Community"
    },
    {
      id: 536,
      title: "Empowering OpenStreetMap: Open Tech Community's Commitment to Localization and Collaboration"
    },
    {
      id: 537,
      title: "Mapping Mania Event Unveils the Power of OpenStreetMap Technology"
    },
    {
      id: 538,
      title: "Geo-Special: Bridging the gap between OpenStreetMap and its technological applications"
    },
    {
      id: 539,
      title: "Building a Thriving Open Tech Community: Insights from the Quarterly Meetup"
    },
    {
      id: 540,
      title: "Software Freedom Day (SFD) Celebration at Kathmandu University: A Day of Knowledge and Networking"
    }
  ].reverse()

const ARTICLES_PER_PAGE = 20; // Number of articles per page

const ArticleList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <div>
      <p>
        We are Open Tech Community working together to bring an inspiring community across the country to form a better future with Open Technologies and Information and Communication Technology (ICT). Our community is a team of volunteers dedicated to build capacity and raise awareness amongst various institutes in Nepal including government bodies and universities.
        <br/>
        Open Tech is a set of technologies which are built over the philosophy of openness and freedom. Currently, our team is formed with a group of professionals working in the area of Open Data, Free and Open Source Software (FOSS) and Open Mapping.
      </p>
      <h1>Events & Activities</h1>
      <ul>
        {currentArticles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ArticleList;
