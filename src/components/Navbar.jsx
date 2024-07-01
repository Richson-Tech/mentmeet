import React from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-20 w-full text-black flex flex-row px-3 md:flex-row items-center justify-between md:h-24 lg:px-20 xl:px-40">
      {/* LEFT SIDE */}
      <div className="flex md:hidden">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={135}
            height={195}
            className="object-center object-cover mt-1 pl-0"
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <Image
          src="/logo.png"
          alt="logo"
          width={135}
          height={195}
          className="object-center object-cover mt-1 pl-0"
        />
      </div>
      <div className="hidden md:flex gap-4 flex-1 items-center justify-center">
        {/* Links */}
      </div>
      {/* Right Side - Visible on Small Screens */}
      <div className="md:hidden flex flex-row justify-center items-center space-x-3 pt-5 pb-5">
        {" "}
        {/* Modified container */}
        <div className="md:hidden">
          <Menu />
        </div>
      </div>
      {/* Right Side - Hidden on Small Screens */}
      <div className="hidden md:flex items-center justify-center space-x-3">
        <Link href="/login">Login</Link>
        <Link href="/login">Logout</Link>
      </div>
    </div>
  );
};

export default Navbar;
