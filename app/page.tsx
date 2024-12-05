import React from "react";
import { Toolbar } from "@mui/material";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Heading></Heading>
      <Footer></Footer>
    </>
  );
};

export default Page;
