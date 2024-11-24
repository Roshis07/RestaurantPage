"use client";
import { Stack, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import burgerImage from "../image/burger.png";
import cokeImage from "../image/coke.png";
import cokezero from "../image/cokezero.png";

const Heading = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Stack direction={"row"} sx={{ height: "400px" }}>
      <Stack
        sx={{
          width: "50vw",
          alignSelf: "center",
          paddingX: 6,
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #FF4500, #FFA500, #FFD700)",
            backgroundClip: "text",
            color: "transparent",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Best Burgers
        </h1>
        <h2 style={{ color: "white" }}>
          Taste the difference with every bite, made fresh and served hot.
        </h2>
        <h6 style={{ color: "white", marginTop: "5px" }}>
          Make your day better with our mouth-watering burgers, crafted just for
          you, using the freshest ingredients and bursting with flavors that
          will leave you craving more!
        </h6>
        <Stack direction="row" spacing={2} marginTop={2}>
          <Button
            color="secondary"
            sx={{
              borderRadius: "50px",
              paddingX: 8,
              paddingY: 1,
              border: "2px solid white",
              fontWeight: 800,
            }}
          >
            Order Now
          </Button>
          <Button
            variant="contained"
            color="success"
            sx={{
              borderRadius: "50px",
              paddingX: 8,
              paddingY: 1,
              fontWeight: 800,
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Stack>
      <Stack gap={0} sx={{ flex: 1, alignSelf: "center" }}>
        <Image src={burgerImage} alt="Delicious Burger" width={400} />
      </Stack>
      <Stack sx={{ position: "relative" }}>
        {currentImage === 0 && (
          <Image src={cokeImage} alt="Coke image" height={370} />
        )}
        {currentImage === 1 && (
          <Image src={cokezero} alt="Coke Zero" height={430} />
        )}
      </Stack>
    </Stack>
  );
};

export default Heading;
