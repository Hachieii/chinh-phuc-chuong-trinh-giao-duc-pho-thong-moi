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

import db from "@/drizzle/db";
import { memo } from "@/drizzle/schema";
import { and, desc, eq } from "drizzle-orm";
import MemoCard from "@/components/memoCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

async function getMemo(name: string, state: string) {
  const session = await auth();
  if (!session?.user) return [];

  const res = await db
    .select({
      id: memo.id,
      subject: memo.subject,
      title: memo.title,
      context: memo.context,
      createdAt: memo.createdAt,
      state: memo.state,
    })
    .from(memo)
    .where(
      and(
        eq(memo.userId, session?.user?.id as string),
        eq(memo.subject, name),
        eq(memo.state, state)
      )
      // and(eq(memo.userId, session?.user?.id as string))
    )
    .orderBy(desc(memo.createdAt));

  return res;
}

async function renderUi(subjectName: string, state: string) {
  const session = await auth();
  const isLogin = !!session?.user;
  if (!isLogin) {
    return redirect("/api/auth/signin");
  }

  const realName = {
    toan: "Toán",
    ly: "Lý",
    hoa: "Hóa",
    tin: "Tin",
    anh: "Anh",
    van: "Văn",
    su: "Sử",
    dia: "Địa",
    sinh: "Sinh",
  };

  const tableTin = await getMemo(subjectName, state);

  return (
    <>
      <div className="flex min-h-screen w-full flex-col">
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:gap-8">
            <Card className="xl:col-span-2">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Thẻ nhớ</CardTitle>
                  <CardDescription>
                    {realName[subjectName as keyof object]}
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
              {tableTin.map((card, i) => {
                return (
                  <CardContent key={i}>
                    <MemoCard
                      id={card.id as string}
                      subject={card.subject as string}
                      title={card.title as string}
                      context={card.context as string}
                      createdAt={card.createdAt as Date}
                      haveFilter={true}
                      state={card.state as string}
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

export default async function Dashboard() {
  const session = await auth();
  const isLogin = !!session?.user;
  if (!isLogin) {
    return redirect("/api/auth/signin");
  }

  return (
    <>
      <NavbarAuth imageLink={session?.user?.image as string} />
      <Tabs defaultValue="bad" className="w-full pt-12">
        <TabsList className="flex justify-center gap-8">
          <TabsTrigger value="bad">Mới học</TabsTrigger>
          <TabsTrigger value="hard">Cần học lại</TabsTrigger>
          <TabsTrigger value="good">Tốt</TabsTrigger>
          <TabsTrigger value="easy">Dễ</TabsTrigger>
        </TabsList>
        <TabsContent value="bad">{await renderUi("van", "bad")}</TabsContent>
        <TabsContent value="hard">{await renderUi("van", "hard")}</TabsContent>
        <TabsContent value="good">{await renderUi("van", "good")}</TabsContent>
        <TabsContent value="easy">{await renderUi("van", "easy")}</TabsContent>
      </Tabs>
    </>
  );
}
