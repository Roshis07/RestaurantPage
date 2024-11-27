import React from "react";
import { Box, Typography } from "@mui/material";

const OpeningHours = () => {
  return (
    <Box>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
          textAlign: "right",
        }}
      >
        Opening Hours
      </Typography>
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
    </Box>
  );
};

export default OpeningHours;
