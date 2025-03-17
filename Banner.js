import React, { useState } from "react";
import "./Banner.scss";

const Banner = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/G6TsCJy4T2s"; 

  return (
    <div className="banner">
      <div className="banner-contents">
        <h1 className="banner-title">The Leopard</h1>
        <div className="banner-buttons">
          <button className="banner-button" onClick={() => setIsPlaying(true)}>
            Play
          </button>
        </div>
        <p className="banner-description">
          The Prince of Salina, a noble aristocrat of impeccable integrity, tries to preserve his family and class amid the tumultuous social upheavals of 1860s Sicily.
        </p>
      </div>
      <div className="banner-fade-bottom"></div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="video-modal" onClick={() => setIsPlaying(false)}>
          <div className="video-container" onClick={(e) => e.stopPropagation()}>
            <iframe
              width="800"
              height="450"
              src={videoUrl}
              title="The Leopard"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button className="close-btn" onClick={() => setIsPlaying(false)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;