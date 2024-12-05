"use client";
import { Stack, Button, Box, Typography } from "@mui/material";
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
    <>
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: "block", sm: "none" },
          color: "transparent",
          background: "linear-gradient(45deg, #FF1493, #1E90FF)",
          backgroundClip: "text",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        My Restaurant
      </Typography>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        sx={{ height: { xs: "auto", sm: "400px" } }}
      >
        <Stack
          sx={{
            width: { xs: "100vw", sm: "50vw" },
            alignSelf: "center",
            paddingX: 6,
          }}
        >
          <Box
            component="h1"
            sx={{
              fontSize: {
                sm: "4rem",
                xs: "2rem",
              },
              fontWeight: "bold",
              background: "linear-gradient(45deg, #FF4500, #FFA500, #FFD700)",
              backgroundClip: "text",
              color: "transparent",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Best Burgers
          </Box>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontSize: { sm: "2rem", xs: "1.2rem" },
            }}
          >
            Taste the difference with every bite, made fresh and served hot.
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "white",
              marginTop: "5px",
              fontSize: { sm: "1.2rem", xs: "0.8rem" },
            }}
          >
            Make your day better with our mouth-watering burgers, crafted just
            for you, using the freshest ingredients and bursting with flavors
            that will leave you craving more!
          </Typography>
          <Stack direction="row" spacing={2} marginTop={2}>
            <Button
              color="secondary"
              sx={{
                borderRadius: "50px",
                paddingX: 8,
                paddingY: { sm: 1, xs: 0.5 },
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
        <Stack
          direction="row"
          sx={{
            paddingLeft: { xs: "30px" },
          }}
        >
          <Stack gap={0} sx={{ flex: 1, alignSelf: "center" }}>
            <Image
              src={burgerImage}
              alt="Delicious Burger"
              style={{ width: "100%", height: "auto" }}
            />
          </Stack>
          <Stack alignSelf="center" flex={1} height={{ xs: 130, sm: 325 }}>
            <Image
              src={currentImage ? cokezero : cokeImage}
              alt="Coke image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Heading;
