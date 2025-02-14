"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = useState(null);
  console.log(activeLink);
  // Handle active link
  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  // Close menu when a nav link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="" justify="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={isMenuOpen ? "hidden" : "block md:hidden"}
        />
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-2xl text-inherit">
              <span className="text-cyan-400">JUNAITH</span> |{" "}
              <span>&lt;MERN STACK DEVELOPER /&gt;</span>
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/#about-me"
            onPress={() => handleActiveLink("about-me")}
            className={
              activeLink === "about-me"
                ? "text-blue-600 font-bold underline underline-offset-8"
                : "text-slate-300 font-bold"
            }
          >
            About Me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            aria-current="page"
            href="#skills"
            onPress={() => handleActiveLink("skills")}
            className={
              activeLink === "skills"
                ? "text-blue-600 font-bold underline underline-offset-8"
                : "text-slate-300 font-bold"
            }
          >
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="foreground"
            href="#projects"
            onPress={() => handleActiveLink("projects")}
            className={
              activeLink === "projects"
                ? "text-blue-600 font-bold underline underline-offset-8"
                : "text-slate-300 font-bold"
            }
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="foreground"
            href="#contact"
            onPress={() => handleActiveLink("contact")}
            className={
              activeLink === "contact"
                ? "text-blue-600 font-bold underline underline-offset-8"
                : "text-slate-300 font-bold"
            }
          >
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            // onMenuOpenChange={!setIsMenuOpen}
            href="/#about-me"
            onPress={() => {
              handleActiveLink("about-me");
              setIsMenuOpen(!isMenuOpen);
            }}
            className={
              activeLink === "about-me"
                ? "text-blue-600 font-bold underline underline-offset-8 w-full"
                : "text-slate-300 font-bold w-full"
            }
            size="lg"
          >
            About Me
          </Link>
          <Link
            href="/#skills"
            onPress={() => {
              handleActiveLink("skills");
              setIsMenuOpen(!isMenuOpen);
            }}
            className={
              activeLink === "skills"
                ? "text-blue-600 font-bold underline underline-offset-8 w-full"
                : "text-slate-300 font-bold w-full"
            }
            size="lg"
          >
            Skills
          </Link>
          <Link
            href="/#projects"
            onPress={() => {
              handleActiveLink("projects");
              setIsMenuOpen(!isMenuOpen);
            }}
            className={
              activeLink === "projects"
                ? "text-blue-600 font-bold underline underline-offset-8 w-full"
                : "text-slate-300 font-bold w-full"
            }
            size="lg"
          >
            Projects
          </Link>
          <Link
            href="/#contact"
            onPress={() => {
              handleActiveLink("contact");
              setIsMenuOpen(!isMenuOpen);
            }}
            className={
              activeLink === "contact"
                ? "text-blue-600 font-bold underline underline-offset-8 w-full"
                : "text-slate-300 font-bold w-full"
            }
            size="lg"
          >
            Contact Me
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
