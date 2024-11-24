import React from "react";
import { Box, Toolbar } from "@mui/material";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";

const Page = () => {
  return (
    <>
      <Box
        sx={{
          background: "linear-gradient(135deg, #6096FD, #FAA7B8)",
          transition: "background 0.5s ease",
          minHeight: "100vh", // This makes the background cover the whole screen
          ":hover": {
            background: "linear-gradient(135deg, #FAA7B8, #6096FD)",
          },
        }}
      >
        <Navbar />
        <Toolbar />
        <Heading></Heading>
      </Box>
    </>
  );
};

export default Page;
