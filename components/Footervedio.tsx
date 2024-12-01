import React, { useState } from "react";

const Footervedio = () => {
  const [videoSrc, setVideoSrc] = useState("/videos/burger.mp4"); // Initial video source

  const handleVideoEnd = () => {
    // Toggle between burger.mp4 and burger1.mp4
    setVideoSrc((prevVideoSrc) =>
      prevVideoSrc === "/videos/burger.mp4"
        ? "/videos/burger1.mp4"
        : "/videos/burger.mp4"
    );
  };

  return (
    <video
      src={videoSrc}
      autoPlay
      muted // Mute the video to ensure autoplay works
      onEnded={handleVideoEnd} // Event to handle video end
      style={{
        width: "500px",
        height: "220px",
        objectFit: "cover",
        border: "3px outset #e0cfe3", // Soft lavender
        borderRadius: "15px", // Optional: Round the corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Optional: Adds a shadow effect
      }}
    />
  );
};

export default Footervedio;
