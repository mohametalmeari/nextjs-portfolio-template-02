"use client";

import Link from "next/link";
import React from "react";
import IconButton from "./IconButton";
import { InstagramIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const Footer = () => {
  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  return (
    <footer className="flex flex-col text-gray-300">
      <div className="bg-gradient-to-r from-[#b16cea] via-[#ff5e69] to-[#ffa84b] w-full h-1" />
      <div className="md:px-20 lg:px-40 flex mt-16 mb-32">
        <div className="flex-1 flex flex-col justify-between gap-5">
          <h2 className="font-bold text-3xl">LOGO</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nulla
            fugiat ullam sint. Tempora culpa sint illo nostrum commodi eveniet
            nesciunt quibusdam, ipsam, harum facere doloremque modi quos
            reiciendis laborum?
          </p>
        </div>
        <div className="flex-1 flex flex-col items-end justify-between">
          <ul className="flex gap-10">
            {links.map((link) => (
              <li key={link.href} className="hover:underline">
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <div className="flex gap-3">
            <IconButton
              onClick={() => window.open("https://www.linkedin.com/")}
            >
              <LinkedinIcon />
            </IconButton>
            <IconButton onClick={() => window.open("https://www.x.com/")}>
              <TwitterIcon />
            </IconButton>
            <IconButton
              onClick={() => window.open("https://www.instagram.com/")}
            >
              <InstagramIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
