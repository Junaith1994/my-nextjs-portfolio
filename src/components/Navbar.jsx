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
  Button,
} from "@heroui/react";
import handleSlowScroll from "@/utilities/scrollFeature";
// import { usePathname } from "next/navigation";

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
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  // Handle active link
  const handleActiveLink = (link) => {
    setActiveLink(link);
  };
  // const pathname = usePathname(); // Get the current route
  // console.log(pathname);
  // const isActive = (href) =>
  //   pathname === href ? "text-blue-500 font-bold" : "text-blue-700";

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">Junaith</p>
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
        <NavbarItem isActive={false}>
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
        <NavbarItem>
          <Link color="foreground" href="#contact">
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>
      {/* <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
