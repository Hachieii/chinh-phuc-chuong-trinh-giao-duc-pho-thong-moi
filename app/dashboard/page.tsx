import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
import { redirect } from "next/navigation";
import NavbarAuth from "@/components/navbarAuthen";

import { auth } from "@/auth";
import SubjectProgress from "@/components/subjectProgress";

import db from "@/drizzle/db";
import { lessonCompleted, memo } from "@/drizzle/schema";
import { and, desc, eq } from "drizzle-orm";
import MemoCard from "@/components/memoCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LinkCard from "@/components/linkCard";

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

async function getMemo() {
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
      // and(eq(memo.userId, session?.user?.id as string), eq(memo.subject, name))
      and(eq(memo.userId, session?.user?.id as string))
    )
    .orderBy(desc(memo.createdAt))
    .limit(5);

  return res;
}

export default async function Dashboard() {
  const session = await auth();
  const isLogin = !!session?.user;
  if (!isLogin) {
    return redirect("/api/auth/signin");
  }

  const tableAll = await getMemo();
  // const tableLy = await getMemo("ly");
  // const tableHoa = await getMemo("hoa");
  // const tableTin = await getMemo("tin");

  return (
    <>
      <NavbarAuth imageLink={session?.user?.image as string} />
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <SubjectProgress
              title="Toán"
              type="Lý thuyết"
              completed={await totCompleted("toan")}
              total={33}
            />
            <SubjectProgress
              title="Lý"
              type="Lý thuyết"
              completed={await totCompleted("ly")}
              total={26}
            />
            <SubjectProgress
              title="Hóa"
              type="Lý thuyết"
              completed={await totCompleted("hoa")}
              total={25}
            />
            <SubjectProgress
              title="Tin"
              type="Lý thuyết"
              completed={await totCompleted("tin")}
              total={49}
            />
          </div>
          {/* 
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <SubjectProgress
              title="Toán"
              type="Bài tập"
              completed={0}
              total={100}
            />
            <SubjectProgress
              title="Lý"
              type="Bài tập"
              completed={0}
              total={100}
            />
            <SubjectProgress
              title="Hóa"
              type="Bài tập"
              completed={0}
              total={100}
            />
            <SubjectProgress
              title="Tin"
              type="Bài tập"
              completed={0}
              total={100}
            />
          </div> */}
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Lưu trữ</CardTitle>
                  <CardDescription>
                    Những ghi nhớ gần đây đã lưu.
                  </CardDescription>
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
                    <Link href="/dashboard/anh">
                      <DropdownMenuItem>Anh</DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/van">
                      <DropdownMenuItem>Văn</DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/su">
                      <DropdownMenuItem>Sử</DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/dia">
                      <DropdownMenuItem>Địa</DropdownMenuItem>
                    </Link>
                    <Link href="/dashboard/sinh">
                      <DropdownMenuItem>Sinh</DropdownMenuItem>
                    </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </CardHeader>
              {tableAll.map((card, i) => {
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
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle>Lịch sử bài tập</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <LinkCard
                  linkTo="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  title="Hóa cao cấp"
                />
                <LinkCard
                  linkTo="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  title="Ma trận tuyến tính"
                />
                <LinkCard
                  linkTo="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  title="Lý thuyết dây"
                />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}
