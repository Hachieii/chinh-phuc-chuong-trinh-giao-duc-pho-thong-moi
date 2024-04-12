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

import { Separator } from "@/components/ui/separator";

const subjects: { id: number; link: string; name: string; linkName: string }[] =
  [
    { id: 1, link: "/thu-vien/toan", name: "Toán", linkName: "toan" },
    { id: 2, link: "/thu-vien/ly", name: "Lý", linkName: "ly" },
    { id: 3, link: "/thu-vien/hoa", name: "Hóa", linkName: "hoa" },
    { id: 4, link: "/thu-vien/tin", name: "Tin", linkName: "tin" },
  ];

const navItems: { id: number; link: string; name: string; linkName: string }[] =
  [
    { id: 1, link: "/dashboard", name: "Trang chính", linkName: "dashboard" },
    { id: 2, link: "/thu-vien", name: "Thư viện", linkName: "thu-vien" },
  ];

const IsActive = (path: string) => {
  const pathnames = usePathname().split("/");
  for (let i = 0; i < pathnames.length; ++i) {
    if (pathnames[i] === path) return true;
  }
  return false;
};

export default function Navbar() {
  const isLogin = false;

  return (
    <>
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
          </Link>
          {navItems.map((item) => {
            return (
              <Link
                href={item.link}
                key={item.id}
                className={`flex items-center gap-2 text-lg font-semibold md:text-base ${
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
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold md:text-base"
              >
                <Package2 className="h-6 w-6" />
              </Link>
              {navItems.map((item) => {
                return (
                  <Link
                    href={item.link}
                    key={item.id}
                    className={`flex items-center gap-2 text-lg font-semibold md:text-base ${
                      IsActive(item.linkName)
                        ? "hover:text-foreground border-b-2 border-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Separator />
              {IsActive("thu-vien") &&
                subjects.map((item) => {
                  return (
                    <Link
                      href={item.link}
                      key={item.id}
                      className={`flex items-center gap-2 text-lg font-semibold md:text-base ${
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
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Tìm kiếm"
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {!isLogin && (
                <Link href="/api/auth/signin">
                  <DropdownMenuItem>Login</DropdownMenuItem>
                </Link>
              )}
              {!isLogin && (
                <Link href="/api/auth/signin">
                  <DropdownMenuItem>Sign up</DropdownMenuItem>
                </Link>
              )}

              {isLogin && <DropdownMenuLabel>My Account</DropdownMenuLabel>}
              {isLogin && <DropdownMenuSeparator />}
              {isLogin && <DropdownMenuItem>Settings</DropdownMenuItem>}
              {isLogin && <DropdownMenuItem>Support</DropdownMenuItem>}
              {isLogin && <DropdownMenuSeparator />}
              {isLogin && <DropdownMenuItem>Log out</DropdownMenuItem>}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
}
