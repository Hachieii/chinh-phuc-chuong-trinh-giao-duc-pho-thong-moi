import Link from "next/link";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { redirect } from "next/navigation";
import NavbarAuth from "@/components/navbarAuthen";

import { auth } from "@/auth";
import SubjectProgress from "@/components/subjectProgress";

import db from "@/drizzle/db";
import { lessonCompleted, memo, users } from "@/drizzle/schema";
import { and, count, desc, eq } from "drizzle-orm";
import MemoCard from "@/components/memoCard";

async function totCompleted(name: string) {
  const session = await auth();
  if (!session?.user) return 0;

  const completed = await db
    .select()
    .from(lessonCompleted)
    .where(
      and(
        eq(lessonCompleted.userId, session?.user?.id as string),
        eq(lessonCompleted.subject, name)
      )
    );

  return completed.length;
}

async function getMemo(name: string) {
  const session = await auth();
  if (!session?.user) return [];

  const res = await db
    .select({
      id: memo.id,
      subject: memo.subject,
      title: memo.title,
      context: memo.context,
      createdAt: memo.createdAt,
    })
    .from(memo)
    .where(
      and(eq(memo.userId, session?.user?.id as string), eq(memo.subject, name))
      // and(eq(memo.userId, session?.user?.id as string))
    )
    .orderBy(desc(memo.createdAt));

  return res;
}

export default async function Dashboard() {
  const session = await auth();
  const isLogin = !!session?.user;
  if (!isLogin) {
    return redirect("/api/auth/signin");
  }

  const tableHoa = await getMemo("hoa");

  return (
    <>
      <NavbarAuth imageLink={session?.user?.image as string} />
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:gap-8">
            <Card className="xl:col-span-2">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Lưu trữ</CardTitle>
                  <CardDescription>Hóa</CardDescription>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" className="ml-auto gap-1">
                      Xem tất cả
                      <ArrowUpRight className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Chọn môn</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Link href="/dashboard/toan">
                      <DropdownMenuItem>Toán</DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/ly">
                      <DropdownMenuItem>Lý</DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/hoa">
                      <DropdownMenuItem>Hóa</DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/tin">
                      <DropdownMenuItem>Tin</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              {tableHoa.map((card, i) => {
                return (
                  <CardContent key={i}>
                    <MemoCard
                      id={card.id as string}
                      subject={card.subject as string}
                      title={card.title as string}
                      context={card.context as string}
                      createdAt={card.createdAt as Date}
                    />
                  </CardContent>
                );
              })}
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}