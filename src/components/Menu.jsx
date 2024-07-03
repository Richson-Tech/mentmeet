"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CgMenu } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const links = [
  { id: 1, title: "MentMeet", url: "/" },
  { id: 2, title: "Explore", url: "/explore" },
  { id: 3, title: "meet", url: "/meet" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);

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
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
