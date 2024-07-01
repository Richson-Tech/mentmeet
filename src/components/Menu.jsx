"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const links = [
  { id: 1, title: "Homepage", url: "/" },

];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [showInvestDropdown, setShowInvestDropdown] = useState(false);
  const [arrowIcon, setArrowIcon] = useState(<IoMdArrowDropdown size={24} />);

  const handleInvestHover = () => {
    setShowInvestDropdown(true);
  };

  const handleInvestLeave = () => {
    setShowInvestDropdown(false);
  };

  const handleInvestClick = () => {
    setShowInvestDropdown(!showInvestDropdown);
    setArrowIcon(
      showInvestDropdown ? (
        <IoMdArrowDropdown size={24} />
      ) : (
        <IoMdArrowDropup size={24} />
      )
    );
  };

  return (
    <div>
      {!open ? (
        <CgMenu size="2rem" onClick={() => setOpen(true)} />
      ) : (
        <MdOutlineClose size="2rem" onClick={() => setOpen(false)} />
      )}
      {open && (
        <div className="bg-white text-black absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col gap-8 pl-6 items-start justify-center text-3xl font-serif2 z-10">
          {links.map((item) => (
            <React.Fragment key={item.id}>
              {item.title === "Investing" ? (
                <div
                  className="relative"
                  onMouseEnter={handleInvestHover}
                  onMouseLeave={handleInvestLeave}
                >
                  <p
                    className="flex items-center cursor-pointer"
                    onClick={handleInvestClick}
                  >
                    <span>{item.title}</span>
                    {arrowIcon}
                  </p>
                  {showInvestDropdown && (
                    <div className="absolute flex flex-col top-full left-0 bg-white text-black py-2 px-4 ">
                      <Link href="/investing">
                        <p
                          className={`text-base font-serif ${
                            pathname === "/investing" ? "text-[#79C947]" : ""
                          }`}
                        >
                          Invest
                        </p>
                        <p className="text-sm text-[#767676] font-mono">
                          Investment Account
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={item.url} onClick={() => setOpen(false)}>
                  <p
                    className={`text-2xl font-serif ${
                      pathname === item.url ? "text-[#79C947]" : ""
                    }`}
                  >
                    {item.title}
                  </p>
                </Link>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
