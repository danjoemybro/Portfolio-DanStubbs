import * as React from "react";
import MacCompareColumn from "../components/mac-compare/MacCompareColumn";
import Navbar from "../components/navbar";

export interface IMacCompareProps {}

export default function MacCompare(props: IMacCompareProps) {
  return (
    <Navbar pageTitle="Mac Compare">
      <div className="grid sm:grid-cols-3 gap-2">
        <MacCompareColumn />
        <MacCompareColumn />
        <MacCompareColumn />
      </div>
    </Navbar>
  );
}
