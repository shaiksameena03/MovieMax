import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./List.scss";
const movies = [
  {
    id: 1,
    title: "Pushpa 2",
    image: "https://cdn.nishtyainfotech.com/content/stories/thumb/67a30e3f1a1bd.png",
    video: "https://www.youtube.com/embed/g3JUbgOHgdw",
  },
  {
    id: 2,
    title: "Interstellar",
    image: "https://sm.mashable.com/t/mashable_me/photo/default/1_npc3.1248.jpg",
    video: "https://www.youtube.com/embed/zSWdZVtXT7E",
  },
  {
    id: 3,
    title: "18 Pages",
    image: "https://assets-in.bmscdn.com/discovery-catalog/events/et00311401-kgycbgnfsa-landscape.jpg",
    video: "https://www.youtube.com/embed/uhkKade5Qyc",
  },
  {
    id: 4,
    title: "Bheeshma",
    image: "https://sund-images.sunnxt.com/101022/640x360_Bheeshma_101022_3e0145bd-c401-4c97-856e-c0a34e744f83.jpg",
    video: "https://www.youtube.com/embed/JQYtgRF_SiI",
  },
  {
    id: 5,
    title: "Devara: Part 1",
    image: "https://hyderabadmail.com/wp-content/uploads/2024/09/Untitled-design-2024-09-27T100427.604.jpg",
    video: "https://www.youtube.com/embed/5cx7rvMvAWo", 
  },
  {
    id: 6,
    title: "Lift",
    image: "https://slpecho.com/wp-content/uploads/2024/01/p23904643_v_h8_aa.jpg",
    video: "https://www.youtube.com/embed/m2L-Sa_6MU0", 
  },
  {
    id: 7,
    title: "Miss India",
    image: "https://i.ytimg.com/vi/Y0mZuCfhjIo/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/r5K0bwe5NBc", 
  },
  {
    id: 8,
    title: "Chandramukhi 2",
    image: "https://occ-0-8407-116.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXkxSu9gPHTs8ju5fqt2Bw0Y2mWUr3da97AKrR6J9o7-l9HlP_pyu-y42RpXo8rTjuo9xEPmt1etaKVyg5RNslrVjARPLLdZG-14.jpg?r=0f7",
    video: "https://www.youtube.com/embed/5p7EdgHjF0Q", 
  },
  {
    id: 9,
    title: "Badland Hunters",
    image: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/01/dr-yan-gi-su-badland-hunters.jpg",
    video: "https://www.youtube.com/embed/hKbo-ZKdSqw", 
  },
  {
    id: 10,
    title: "Waltair Veerayya",
    image: "https://venkatarangan.com/wp-content/uploads/2023/07/walter-veerayya.jpg",
    video: "https://www.youtube.com/embed/A4MKFPCpRQ4", 
  },
  {
    id: 11,
    title: "Oh! Baby",
    image: "https://m.media-amazon.com/images/S/pv-target-images/2728be19874901a7312d0a2219157e0b365ed3d31f7a1a1b1c7396a64052e5d0.jpg",
    video: "https://www.youtube.com/embed/0Kah_pEEb4w", 
  },
  {
    id: 12,
    title: "RRR",
    image: "https://www.ashokkarania.com/wp-content/uploads/2022/05/rrr-trailer-hindi-movie.jpg",
    video: "https://www.youtube.com/embed/NgBoMJy386M", 
  },
  {
    id: 13,
    title: "Pakka Commercial",
    image: "https://assets.thehansindia.com/h-upload/2021/11/08/1120835-pakka-commercial.webp",
    video: "https://www.youtube.com/embed/1A8L4awrZdk", 
  },
];

const List = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const navigate = useNavigate(); 

  return (
    <div className="list">
      <h2 className="row_title">Popular Movies</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={movie.image}
            alt={movie.title}
            onClick={() => setSelectedMovie(movie)}
          />
        ))}
      </div>

      {selectedMovie && (
        <div className="video-popup">
          <h2>{selectedMovie.title}</h2>
          <iframe
            width="560"
            height="315"
            src={selectedMovie.video}
            title={selectedMovie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <button className="close-btn" onClick={() => setSelectedMovie(null)}>
            X
          </button>
        </div>
      )}

      <footer className="list-footer">
        <button className="back-home-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </footer>
    </div>
  );
};

export default List;