import React from 'react';
import { useNavigate } from 'react-router-dom';

// Sample Data for WADA Code
const wadaCode = [
  {
    title: "Prohibited Substances",
    content: "WADA provides an updated list of substances prohibited in competitive sports, including performance-enhancing drugs (PEDs), hormones, stimulants, narcotics, and other substances that may give athletes an unfair advantage.",
    link: "https://www.wada-ama.org/en/prohibited-list"
  },
  {
    title: "Therapeutic Use Exemption (TUE)",
    content: "Athletes can apply for a Therapeutic Use Exemption (TUE) if they need to take a prohibited substance for medical reasons. The process involves submitting medical documentation to a TUE committee for review and approval.",
    link: "https://www.wada-ama.org/en/what-we-do/tue"
  },
  {
    title: "WADA Code Overview",
    content: "The WADA Code outlines global anti-doping standards for athletes and organizations. It ensures that all sports follow consistent anti-doping regulations to maintain fairness and integrity in competition.",
    link: "https://www.wada-ama.org/en/what-we-do/the-code"
  }
];

// Recent Sports News Section
const recentNews = [
  {
    title: "Athlete Banned for Doping",
    content: "The latest report from the World Anti-Doping Agency (WADA) revealed that a top athlete has been banned for testing positive for performance-enhancing substances.",
    imageUrl: "https://via.placeholder.com/400x200?text=News+Image+1"
  },
  {
    title: "New Doping Regulations Introduced",
    content: "WADA introduces new stricter regulations to combat doping in sports, with an emphasis on testing and penalties for offenders.",
    imageUrl: "https://via.placeholder.com/400x200?text=News+Image+2"
  }
];

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    // Redirect to Sign-Up page
    navigate("/signup");
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-blue-500 sticky top-0 z-10 py-4">
        <div className="flex justify-between items-center px-6">
          <div className="flex items-center">
            {/* Applied filter to make logo white, removed circle form, and increased size */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/2/29/Ministry_of_Youth_Affairs_and_Sports.svg" 
              alt="Ministry Logo" 
              className="h-12 w-auto filter invert mr-4" 
            />
            <span className="text-2xl text-white font-bold">Ageis Track</span>
          </div>
          <div>
            <a href="#news" className="text-white px-4 hover:text-gray-300 no-underline">News</a>
            <a href="#features" className="text-white px-4 hover:text-gray-300 no-underline">Features</a>
            <a href="#guidelines" className="text-white px-4 hover:text-gray-300 no-underline">Guidelines</a>
            <a href="#login" onClick={handleLoginRedirect} className="text-white px-4 hover:text-gray-300 no-underline">Login</a>
          </div>
        </div>
      </nav>

      {/* Carousel Section */}
      <section id="carousel" className="py-10 text-center">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://via.placeholder.com/1920x600?text=Image+1" className="d-block w-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1920x600?text=Image+2" className="d-block w-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="https://via.placeholder.com/1920x600?text=Image+3" className="d-block w-100" alt="Slide 3" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Global Anti-Doping Standards Section */}
      <section className="bg-blue-500 text-white text-center py-24">
        <h1 className="text-4xl">Global Anti-Doping Standards</h1>
        <p className="text-lg">Learn about the WADA Code and the fight against doping in sports</p>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-pink-500 text-white py-10">
        <h2 className="text-3xl text-center">Our Features</h2>
        <div className="flex justify-center flex-wrap mt-8">
          {wadaCode.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 m-4 rounded-lg shadow-lg max-w-xs hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-base mt-4">{item.content}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 block mt-4">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      {/* WADA Code and Guidelines Section */}
      <section id="guidelines" className="bg-gray-100 py-10">
        <h2 className="text-3xl text-center text-gray-800">WADA Code and Guidelines</h2>
        <div className="flex justify-center flex-wrap mt-8">
          {wadaCode.map((item, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-6 m-4 rounded-lg shadow-lg max-w-xs hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="text-base mt-4">{item.content}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 block mt-4">Learn More</a>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Sports News Section */}
      <section id="news" className="py-10 bg-gray-200">
        <h2 className="text-3xl text-center text-gray-800">Recent Sports News</h2>
        <div className="flex justify-center flex-wrap mt-8">
          {recentNews.map((news, index) => (
            <div
              key={index}
              className="bg-white p-6 m-4 rounded-lg shadow-lg max-w-xs hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={news.imageUrl} alt="News" className="w-full rounded-lg" />
              <h3 className="text-2xl font-bold mt-4">{news.title}</h3>
              <p className="text-base mt-4">{news.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Login Section */}
      <section id="login" className="bg-blue-500 text-white py-10 text-center">
        <h2 className="text-3xl">Login to Access More Information</h2>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg mt-4" onClick={handleLoginRedirect}>Login</button>
      </section>
    </div>
  );
};

export default LandingPage;