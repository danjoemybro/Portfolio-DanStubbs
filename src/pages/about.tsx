import * as React from "react";
import Navbar from "../components/navbar";

// styles
const pageStyles = {
  color: "#232129",
  padding: "2em",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

export interface IAboutPageProps {}

export default function AboutPage(props: IAboutPageProps) {
  return (
    <Navbar pageTitle="About Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Navbar>
  );
}
