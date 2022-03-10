import * as React from "react";
import Navbar from "../../components/navbar";

export  interface INamePageProps {}

export default function NamePage(props: INamePageProps) {
  return (
    <Navbar pageTitle="Name Page">
      <h1>Love!</h1>
    </Navbar>
  );
}
