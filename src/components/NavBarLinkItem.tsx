import * as React from "react";
import { Link } from "gatsby";

export interface INavbarLinkItemProps {
  pageTitle: string;
  pageRoute: string;
}

export default function NavbarLinkItem(props: INavbarLinkItemProps) {
  return (
    <Link
      className="p-4 text-zinc-600 hover:text-black dark:text-zinc-200 dark:hover:text-zinc-50 duration-200"
      to={props.pageRoute}
    >
      {props.pageTitle}
    </Link>
  );
}
