import * as React from "react";
import { Link } from "gatsby";
import Navbar from "../components/navbar";
import "../styles/index.css";
import "../styles/style.css";

// markup
const IndexPage = () => {
  return (
    <main className="dark:bg-black bg-white">
      <Navbar pageTitle="Home Page">
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <h1 className="md:p-6 text-sky-400 text-9xl ">Love!??? yes</h1>
      </Navbar>
    </main>
  );
};

export default IndexPage;
