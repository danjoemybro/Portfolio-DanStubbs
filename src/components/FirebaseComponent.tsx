import * as React from "react";
import { useState } from "react";
import firebase from "gatsby-plugin-firebase";

function Component() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {}, []);

  return <div>{data ? data : "Loading..."}</div>;
}

export default Component;
