import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navArr = [
    {
      text: "Home",
      link: "#home",
    },
    // {
    //   text: "Work",
    //   link: "#work",
    // },
    {
      text: "Projects",
      link: "#projects",
    },
    {
      text: "Resume",
      link: "#resume",
    },
    {
      text: "About",
      link: "#about",
    },
  ];

  return (
    <div className="fixed top-0 h-24 z-10 w-screen flex justify-evenly items-center uppercase bg-black bg-opacity-80">
      {navArr.map((item, i) => {
        return (
          <li
            key={i}
            className="list-none text-blueLight hover:text-blueDark text-sm sm:text-lg"
          >
            <Link href={item.link}>{item.text}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default Navbar;
