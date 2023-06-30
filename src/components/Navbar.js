"use client";

import {
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
  BiLogoGithub,
  BiSolidMoon,
  BiSolidSun,
} from "react-icons/bi";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const Navbar = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme("light");
  const [darkMode, setDarkMode ] = useState(false);
  // Theme Handler
  const themeHandler = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  console.log(theme);
  console.log(darkMode);
  // 
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const CustomLink = ({ href, title }) => {
    return (
      <Link href={href} className="relative group mr-4 ">
        {title}
        <span
          className={` absolute -bottom-[2px] left-0 bg-[#0091ff] h-[2px] inline-block group-hover:w-full transition-[width] ease-out duration-200 ${
            pathname === href ? "w-full" : "w-0"
          }`}></span>
      </Link>
    );
  };

  return (
    <header className="py-5 flex justify-between px-5 container mx-auto">
      <nav className="">
        <CustomLink href="/" title="Home" />
        <CustomLink href="/about" title="About" />
      </nav>
      {/* TODO: */}
      <nav className="flex-center ">
        <motion.a
          target="_blank"
          href="https://web.facebook.com/Khalid.hotsot"
          className="w-9 mr-4"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}>
          <BiLogoFacebookCircle size={30}></BiLogoFacebookCircle>
        </motion.a>
        <motion.a
          target="_blank"
          href="https://www.linkedin.com/in/khalid-hasan-42a81427b"
          className="w-9 mr-4"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}>
          <BiLogoLinkedinSquare size={30}></BiLogoLinkedinSquare>
        </motion.a>
        <motion.a
          target="_blank"
          href="https://github.com/khalidhasan8880"
          className="w-9 mr-4"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.9 }}>
          <BiLogoGithub size={30}></BiLogoGithub>
        </motion.a>

        <button onClick={themeHandler}>{darkMode ? <BiSolidMoon size={25}></BiSolidMoon>: <BiSolidSun size={25}></BiSolidSun>}</button>
      </nav>
    </header>
  );
};

export default Navbar;
