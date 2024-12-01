import React from "react";
import { Box, Typography } from "@mui/material";

const OpeningHours = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        paddingX={6}
        fontWeight={"bold"}
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          textAlign: "right",
          background: "linear-gradient(45deg, #290978, #FFA500, #FFD701)",
          backgroundClip: "text",
        }}
      >
        Opening Hours
      </Typography>
      <Typography
        variant="h5"
        paddingX={6}
        fontWeight={"bold"}
        sx={{
          background: "linear-gradient( #290979, #FFA500, #FFD700)",
          backgroundClip: "text",
        }}
      >
        <Typography sx={{ textAlign: "right" }}>
          Monday: 8:00 AM - 8:00 PM
        </Typography>
        <Typography sx={{ textAlign: "right" }}>
          Tuesday: 8:00 AM - 8:00 PM
        </Typography>
        <Typography sx={{ textAlign: "right" }}>
          Wednesday: 8:00 AM - 8:00 PM
        </Typography>
        <Typography sx={{ textAlign: "right" }}>
          Thursday: 8:00 AM - 8:00 PM
        </Typography>
        <Typography sx={{ textAlign: "right" }}>
          Friday: 8:00 AM - 10:00 PM
        </Typography>
        <Typography sx={{ textAlign: "right" }}>
          Saturday: 9:00 AM - 10:00 PM
        </Typography>
        <Typography sx={{ textAlign: "right" }}>
          Sunday: 9:00 AM - 6:00 PM
        </Typography>
      </Typography>
    </Box>
  );
};

export default OpeningHours;
