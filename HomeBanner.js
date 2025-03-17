import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomeBanner.scss";

const HomeBanner = () => {
  const [email, setEmail] = useState(""); // State for email input
  const navigate = useNavigate(); // React Router navigation

  // Function to handle form submission
  const handleGetStarted = () => {
    if (!email || !email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address.");
      return;
    }
    navigate(`/signup?email=${encodeURIComponent(email)}`);
  };

  // Trending movies list
  const trendingMovies = [
    { id: 1, title: "Emergency", image: "https://image.tmdb.org/t/p/w185/yp5eg70g6LaZoBiApOv9oerzvvX.jpg" },
    { id: 2, title: "Pushpa 2", image: "https://m.media-amazon.com/images/M/MV5BNWU1ZWFhNGQtZDhlZC00ZWFlLTlmNmEtN2VmYmZiN2Y5ZmQ2XkEyXkFqcGc@.V1.jpg" },
    { id: 3, title: "Azaad", image: "https://m.media-amazon.com/images/M/MV5BMDkwOWMzNjctNTEyOC00ZGNlLWIwODQtMGVkZjUzZTM4NGVlXkEyXkFqcGc@.V1.jpg" },
    { id: 4, title: "Vidamuyarchi", image: "https://pbs.twimg.com/media/GVa51i9acAAm3w3?format=jpg&name=4096x4096" },
    { id: 5, title: "Squid Game", image: "https://i.pinimg.com/736x/51/1b/b1/511bb1da8720d7f81a69f390c38352e8.jpg" },
    { id: 6, title: "Thangalaan", image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p26983270_p_v13_aa.jpg" },
    { id: 7, title: "The Electric State", image: "https://resizing.flixster.com/Lw8J3_IMcJl1ScbrTi98bgNipxA=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzk1NDA1NTY2LTM5MTQtNGJhYS1hZGVmLTY2YzViYWZhNGQ4Ni5qcGc=" },
    { id: 8, title: "Nadanna Sambhavam", image: "https://m.media-amazon.com/images/M/MV5BMjFhNWI5ZjgtNjkxZi00Yzk3LThiMjUtZDk1YTQ2MDE3MzExXkEyXkFqcGc@.V1.jpg" },
  ];

  return (
    <>
      {/* Banner Section */}
      <div className="home-banner">
        <div className="our-story-card">
          <h1 className="our-story-card-title">Unlimited movies, TV shows, and more.</h1>
          <h2 className="our-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
        </div>
        <div className="shadow"></div>
      </div>

      {/* Email Form Section */}
      <div className="email-section">
        <p className="email-form-title">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          <button className="input-group-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="trending-section">
        <h2 className="trending-title">Trending Now</h2>
        <div className="trending-list">
          {trendingMovies.map((movie, index) => (
            <div className="trending-item" key={movie.id}>
              <img src={movie.image} alt={movie.title} className="trending-image" />
              <span className="trending-rank">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* More Reasons to Join Section */}
      <ReasonsToJoin />

      {/* FAQ Section */}
      <FAQSection />
    </>
  );
};

// ReasonsToJoin Component
const ReasonsToJoin = () => {
  return (
    <div className="reasons-section">
      <h2 className="section-heading">More reasons to join</h2>
      <div className="reasons-container">
        {[
          { title: "Enjoy on your TV", desc: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.", icon: "📺" },
          { title: "Download your shows to watch offline", desc: "Save your favorites easily and always have something to watch.", icon: "⬇" },
          { title: "Watch everywhere", desc: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.", icon: "📱" },
          { title: "Create profiles for kids", desc: "Send kids on adventures with their favorite characters in a space made just for them.", icon: "👧🧒" },
          { title: "No Ads, No Interruptions", desc: "Enjoy watching without any ads or pop-ups for a seamless experience.", icon: "🚫🎥" },
          { title: "Affordable Plans", desc: "Choose from a variety of affordable plans that fit your needs.", icon: "💰" },
          { title: "High-Quality Streaming", desc: "Watch in Ultra HD, 4K, and even HDR for the best viewing experience.", icon: "🎬" },
        ].map((item, index) => (
          <div className="reason-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span>{item.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// FAQ Section Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "What is Netflix?", answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more." },
    { question: "How much does Netflix cost?", answer: "Netflix offers different plans, starting from a basic plan to premium with various features." },
    { question: "Where can I watch?", answer: "You can watch Netflix on your smart TV, phone, tablet, or laptop, anytime and anywhere." },
    { question: "How do I cancel?", answer: "Netflix offers flexible cancellation. You can cancel anytime from your account settings." },
    { question: "Can I watch Netflix offline?", answer: "Yes! You can download select movies and shows to watch offline on mobile devices." },
    { question: "How many devices can I stream on at the same time?", answer: "The number of devices you can stream on simultaneously depends on your subscription plan." },
    { question: "What is Netflix Originals?", answer: "Netflix Originals are exclusive movies, TV series, and documentaries produced by Netflix." },
    { question: "Can I change my Netflix plan?", answer: "Yes, you can upgrade or downgrade your Netflix subscription anytime from your account settings." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div className="faq-item" key={index} onClick={() => toggleFAQ(index)}>
          <div className="faq-question">
            {faq.question}
            <span className="faq-icon">{openIndex === index ? "✖" : "➕"}</span>
          </div>
          {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 All rights reserved by Sameena</p>
      </footer>
    </div>
  );
};

export default HomeBanner;
