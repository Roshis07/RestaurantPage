import { Typography, Card, Stack, CardMedia, CardContent } from "@mui/material";
import React from "react";
import burger1 from "../image/burger1.png";
import OpeningHours from "./OpeningHours";
import burger2 from "../image/burger2.png";
import burger3 from "../image/burger3.png";

const Footer = () => {
  const cardList = [
    { title: "McChicken Burger", image: burger1 },
    { title: "Burger meal deal", image: burger2 },
    { title: "Filet Burger meal deal", image: burger3 },
    { title: " Mediterian Burger", image: burger2 },
  ];

  return (
    <>
      <Typography variant="h5" paddingX={6} fontWeight={"bold"} color="green">
        Special menu
      </Typography>
      <Stack direction={"row"} gap={20} marginTop={0.5} paddingX={6}>
        <Stack direction={"row"} gap={2.5}>
          {cardList.map((card) => (
            <Card
              key={card.title}
              elevation={5}
              sx={{
                background: "transparent",
                ":hover": { transform: "scale(1.1)" },
              }}
            >
              <CardMedia
                component="img"
                image={card.image.src}
                alt="Special 1"
                sx={{
                  height: 150,
                  objectFit: "contain",
                }}
              />
              <CardContent
                sx={{
                  backgroundColor: "#e6ffe6",
                  padding: 2,
                }}
              >
                <Typography variant="subtitle1">{card.title}</Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <OpeningHours></OpeningHours>
      </Stack>
    </>
  );
};

export default Footer;
