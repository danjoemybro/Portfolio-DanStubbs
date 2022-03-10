import * as React from "react";

// styles
const pageStyles = {
  color: "#232129",
  padding: 30,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <h1>Does this website work?</h1>
      <h2>Interesting!</h2>
    </main>
  );
};

export default IndexPage;
