import * as React from "react";
import { Link } from "gatsby";

export interface INavbarLinkItemProps {
  pageTitle: string;
  pageRoute: string;
}

export default function NavbarLinkItem(props: INavbarLinkItemProps) {
  return (
    <Link
      className="p-4 hover:bg-zinc-200 active:bg-zinc-300"
      to={props.pageRoute}
    >
      {props.pageTitle}
    </Link>
  );
}
