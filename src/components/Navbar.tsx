"use client";

import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
      
    >
      <Menu setActive={setActive}>
        <Link href="/">
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/courses">All courses</HoveredLink>
            <HoveredLink href="/music_theory">Basic Music Theory</HoveredLink>
            <HoveredLink href="/advance_composition">Aadvance Composition</HoveredLink>
            <HoveredLink href="/song_writing">Songwriting</HoveredLink>
            <HoveredLink href="/music_production">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contactus">
        <MenuItem setActive={setActive} active={active} item="Contact us">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
