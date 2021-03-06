import * as React from "react";
import Footer from "./footer";
import NavbarLinkItem from "./NavBarLinkItem";

export interface INavbarProps {
  pageTitle: string;
  children: any;
}

export default function Navbar(props: INavbarProps) {
  return (
    <div className="">
      <title>Dan Stubbs | {props.pageTitle}</title>
      <nav className="bg-zinc-100 dark:bg-zinc-800 shadow-lg fixed top-0 w-full">
        <div className=" flex max-w-screen-lg m-auto">
          <NavbarLinkItem pageTitle="Home" pageRoute="/" />
          <NavbarLinkItem pageTitle="About" pageRoute="/about" />
          <div className="grow"></div>
          <NavbarLinkItem pageTitle="Mac Compare" pageRoute="/mac-compare" />
        </div>
      </nav>
      <main className="">
        <div className="bg-zinc-200 dark:bg-zinc-800">
          <header className="max-w-screen-lg m-auto px-5">
            <h1 className="sm:text-6xl text-5xl font-medium py-10 pt-40">
              {props.pageTitle}
            </h1>
          </header>
        </div>
        <article className="max-w-screen-lg m-auto py-10 px-5">
          {props.children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
