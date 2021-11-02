import React from "react";
import Link from "next/link";

const Navbar = () => {
  const navArr = [
    {
      text: "Home",
      link: "#home",
    },
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
    <div className="fixed top-0 h-20 z-20 w-screen flex justify-evenly items-center uppercase bg-black bg-opacity-90">
      <div className="w-0 md:w-1/2">
        <h4 className="h4 text-sienna md:ml-12 float-left hidden md:block">
          Christopher Leja
        </h4>
      </div>
      <div className="w-full md:w-1/2 justify-evenly flex ">
        {navArr.map((item, i) => {
          return (
            <li
              key={i}
              className="list-none text-blueLight hover:text-blueDark"
            >
              <Link href={item.link}>{item.text}</Link>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
