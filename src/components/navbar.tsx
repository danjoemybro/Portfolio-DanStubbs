import * as React from "react";
import { Link } from "gatsby";

export interface INavbarProps {
  pageTitle: string;
  children: any;
}

export default function Navbar(props: INavbarProps) {
  return (
    <div className="p-10">
      <title>{props.pageTitle}</title>
      <nav>
        <ul>
          <LinkItem pageTitle="Home" pageRoute="/" />
          <LinkItem pageTitle="About" pageRoute="/about" />
          <LinkItem pageTitle="Name" pageRoute="/about/name" />
        </ul>
      </nav>
      <main>
        <h1>{props.pageTitle}</h1>
        {props.children}
      </main>
    </div>
  );
}

export interface ILinkItemProps {
  pageTitle: string;
  pageRoute: string;
}

function LinkItem(props: ILinkItemProps) {
  return (
    <li>
      <Link className="underline text-blue-600" to={props.pageRoute}>
        {props.pageTitle}
      </Link>
    </li>
  );
}
