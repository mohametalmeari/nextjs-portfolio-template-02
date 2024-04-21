"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    {
      title: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      title: "About",
      href: "/about",
      active: pathname === "/about",
    },
    {
      title: "Services",
      href: "/services",
      active: pathname === "/services",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      active: pathname === "/portfolio",
    },
    {
      title: "Blog",
      href: "/blog",
      active: pathname === "/blog",
    },
  ];

  return (
    <nav className="flex items-center md:px-20 lg:px-40 justify-between bg-[#161513] sticky top-0 z-50 bg-opacity-90">
      <div className="flex-1">
        <Link href="/" className="font-bold text-4xl">
          LOGO
        </Link>
      </div>
      <ul className="flex gap-10">
        {links.map((link) => (
          <li
            key={link.href}
            className={`relative flex justify-center ${
              link.active ? "text-white" : "text-gray-300 hover:text-white"
            }`}
          >
            <Link href={link.href} className="py-6 px-2">
              {link.title}
            </Link>
            {link.active && (
              <div className="w-8 h-1 bg-gradient-to-r from-[#b16cea]  via-[#ff5e69] to-[#ffa84b] absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full" />
            )}
          </li>
        ))}
      </ul>
      <div className="flex-1 flex justify-end">
        <button className="bg-white text-[#161513] rounded-lg px-4 py-2">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
