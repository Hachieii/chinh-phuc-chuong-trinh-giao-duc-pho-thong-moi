"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Input } from "./ui/input";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const subjects: { id: number; link: string; name: string; linkName: string }[] =
  [
    { id: 1, link: "/thu-vien/toan", name: "Toán", linkName: "toan" },
    { id: 2, link: "/thu-vien/ly", name: "Lý", linkName: "ly" },
    { id: 3, link: "/thu-vien/hoa", name: "Hóa", linkName: "hoa" },
    { id: 4, link: "/thu-vien/tin", name: "Tin", linkName: "tin" },
  ];

const IsActive = (path: string) => {
  const pathnames = usePathname().split("/");
  for (let i = 0; i < pathnames.length; ++i) {
    if (pathnames[i] === path) return true;
  }
  return false;
};

export default function ListSubjects() {
  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-8 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-16 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          {subjects.map((item) => {
            return (
              <Link
                href={item.link}
                key={item.id}
                className={`flex items-center gap-2 text-lg font-semibold md:text-base mr-6 ${
                  IsActive(item.linkName)
                    ? "hover:text-foreground border-b-2 border-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </header>
    </>
  );
}
