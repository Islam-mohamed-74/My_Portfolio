"use client";

import { useState, useMemo } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Blog from "./Blog";
import Contact from "./Contact";

export default function MainContent() {
  const [activePage, setActivePage] = useState("about");

  const pages = useMemo(
    () => ({
      about: <About />,
      resume: <Resume />,
      portfolio: <Portfolio />,
      blog: <Blog />,
      contact: <Contact />,
    }),
    []
  );

  return (
    <div className="main-content">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      {pages[activePage]}
    </div>
  );
}
