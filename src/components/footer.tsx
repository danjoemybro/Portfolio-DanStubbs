import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  const [count, setCount] = useState(0);

  return (
    <footer className="dark:bg-zinc-800 bg-zinc-300 py-10 ">
      <div className="max-w-screen-lg m-auto px-5">
        <h2 className="text-2xl pb-2">Footer Title</h2>
        <p>Footer Contents</p>
      </div>
      <div className="max-w-screen-lg m-auto grid grid-cols-5 gap-2 p-4">
        <FooterLinkColumn title="Pages">
          <FooterLink to="">Lorem, ipsum.</FooterLink>
          <FooterLink to="">Fugiat, molestiae?</FooterLink>
          <FooterLink to="">Inventore, sunt!</FooterLink>
          <FooterLink to="">Nam, eum.</FooterLink>
          <FooterLink to="">Odio, dolores?</FooterLink>
        </FooterLinkColumn>
        <FooterLinkColumn title="Love">
          <FooterLink to="">Lorem, ipsum.</FooterLink>
          <FooterLink to="">Nam, eum.</FooterLink>
          <FooterLink to="">Unde, fuga.</FooterLink>
          <FooterLink to="">Odio, dolores?</FooterLink>
        </FooterLinkColumn>
        <FooterLinkColumn title="Love">
          <FooterLink to="">Lorem, ipsum.</FooterLink>
          <FooterLink to="">Fugiat, molestiae?</FooterLink>
          <FooterLink to="">Inventore, sunt!</FooterLink>
          <FooterLink to="">Nam, eum.</FooterLink>
          <FooterLink to="">Unde, fuga.</FooterLink>
          <FooterLink to="">Odio, dolores?</FooterLink>
        </FooterLinkColumn>
        <FooterLinkColumn title="Love">
          <FooterLink to="">Lorem, ipsum.</FooterLink>
          <FooterLink to="">Nam, eum.</FooterLink>
          <FooterLink to="">Unde, fuga.</FooterLink>
          <FooterLink to="">Odio, dolores?</FooterLink>
        </FooterLinkColumn>
        <FooterLinkColumn title="Love">
          <FooterLink to="">Lorem, ipsum.</FooterLink>
          <FooterLink to="">Fugiat, molestiae?</FooterLink>
          <FooterLink to="">Inventore, sunt!</FooterLink>
        </FooterLinkColumn>
      </div>
    </footer>
  );
}

interface IFooterLinkColumnProps {
  title: string;
  children: any;
}

function FooterLinkColumn(props: IFooterLinkColumnProps) {
  return (
    <div className="pr-3 flex flex-col gap-1">
      <h2 className="font-medium pb-1">{props.title}</h2>
      {props.children}
    </div>
  );
}

interface IFooterLinkProps {
  to: string;
  children: any;
}

function FooterLink(props: IFooterLinkProps) {
  return (
    <Link to={props.to}>
      <div className="hover:underline text-sm">{props.children}</div>
    </Link>
  );
}
