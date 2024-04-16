"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const subjects: { id: number; link: string; name: string; linkName: string }[] =
  [
    { id: 1, link: "/thu-vien/toan", name: "Toán", linkName: "toan" },
    { id: 2, link: "/thu-vien/ly", name: "Lý", linkName: "ly" },
    { id: 3, link: "/thu-vien/hoa", name: "Hóa", linkName: "hoa" },
    { id: 4, link: "/thu-vien/tin", name: "Tin", linkName: "tin" },
    { id: 5, link: "/thu-vien/anh", name: "Anh", linkName: "anh" },
    { id: 6, link: "/thu-vien/van", name: "Văn", linkName: "van" },
    { id: 7, link: "/thu-vien/su", name: "Sử", linkName: "su" },
    { id: 8, link: "/thu-vien/dia", name: "Địa", linkName: "dia" },
    { id: 9, link: "/thu-vien/sinh", name: "Sinh", linkName: "sinh" },
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
      <header className="sticky z-10 top-0 flex h-16 items-center gap-8 border-b bg-background px-4 md:px-6">
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
