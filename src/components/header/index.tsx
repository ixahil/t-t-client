import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
// import { CommandMenu } from "@/components/command-menu"
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/header/main-nav";
import { Button } from "../ui/button";
import { CiHeart, CiSearch, CiUser } from "react-icons/ci";

// import { MobileNav } from "@/components/mobile-nav"
// import { ModeToggle } from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 shadow-md border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-24 w-full px-16 items-center mx-auto justify-between">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandMenu /> */}
          </div>
          <nav className="flex w-1/4 items-center justify-between divide-x">
            <CiSearch size={30} className="flex-grow" />
            <CiUser size={30} className="flex-grow" />
            <CiHeart size={30} className="flex-grow" />
            {/* <ModeToggle /> */}
          </nav>
        </div>
      </div>
    </header>
  );
}
