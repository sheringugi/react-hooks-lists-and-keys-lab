import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    <a key="link[0]" href="#home">home</a>
    <a key="link[1]" href="#about">about</a>
    <a key="link[2]" href= "#projects">projects</a>
  </nav>;
}

export default NavBar;
