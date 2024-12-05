"use client";
import { Typography, Card, Stack, CardMedia, CardContent } from "@mui/material";
import React, { useState, useEffect } from "react";
import burger1 from "../image/burger1.png";
// import OpeningHours from "./OpeningHours";
import burger2 from "../image/burger2.png";
import burger3 from "../image/burger3.png";
import drink1 from "../image/drink1.png";
import deserat from "../image/deseart.png";
import breakfast from "../image/breakfast.png";
import Footervedio from "./Footervedio";

const Footer = () => {
  const cardList = [
    { title: "McChicken Burger", image: burger1 },
    { title: "Burger meal deal", image: burger2 },
    { title: "Breakfast", image: breakfast },

    { title: "Filet Burger meal deal", image: burger3 },
    { title: "Mediterranean Burger", image: burger2 },
    { title: "Frozen Drink", image: drink1 },
    { title: "Mediterranean Burger", image: burger2 },
    { title: "Veggie Burger", image: burger3 },
    { title: "Drinks Menu", image: deserat },
  ];

  const [visibleCards, setVisibleCards] = useState(cardList.slice(0, 3));
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const newStartIndex = (startIndex + 1) % cardList.length;
      const newVisibleCards = [
        cardList[(newStartIndex + 2) % cardList.length],
        cardList[(newStartIndex + 1) % cardList.length],
        cardList[newStartIndex],
      ];

      setVisibleCards(newVisibleCards);
      setStartIndex(newStartIndex);
    }, 7000);

    return () => clearInterval(interval);
  }, [startIndex, cardList]);

  return (
    <>
      <Typography
        variant="h5"
        paddingX={6}
        fontWeight={"bold"}
        sx={{
          background: "linear-gradient(45deg, #290979, #FFA500, #FFD700)",
          backgroundClip: "text",
          color: "transparent",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Special menu
      </Typography>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        gap={12}
        marginTop={1.2}
        paddingX={6}
      >
        <Stack direction={{ xs: "column", sm: "row" }} gap={2.5}>
          {visibleCards.map((card, index) => (
            <Card
              key={`${card.title}-${index}`}
              elevation={5}
              sx={{
                width: index === 1 ? 280 : 240,
                height: index === 1 ? 220 : 220,
                background: "transparent",
                border: index === 1 ? "2px solid #EEDDF2" : "none",

                ":hover": { transform: "scale(1.1)" },
                transition: "transform 0.3s",
              }}
            >
              <CardMedia
                component="img"
                image={card.image.src}
                alt={card.title}
                sx={{
                  height: index === 1 ? 160 : 160,
                  objectFit: "contain",
                }}
              />
              <CardContent
                sx={{
                  backgroundColor: index === 1 ? "#FAC8F8" : "#ACF8FA",
                  padding: 2,
                  height: 80,
                }}
              >
                <Typography
                  variant="subtitle1"
                  textAlign="center"
                  sx={{
                    lineHeight: "1.2",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
        <Footervedio></Footervedio>
        {/* <OpeningHours /> */}
      </Stack>
    </>
  );
};

export default Footer;
