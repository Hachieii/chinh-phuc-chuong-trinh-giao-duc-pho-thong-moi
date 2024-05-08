import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";

// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import db from "@/drizzle/db";
import { otherLinks, history } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import Link from "next/link";
import Badge from "@/components/badge";

async function getData(subjectName: string) {
  if (subjectName != "tat-ca")
    return await db.select().from(otherLinks).where(
      // and(eq(memo.userId, session?.user?.id as string), eq(memo.subject, name))
      eq(otherLinks.subject, subjectName)
    );
  return await db.select().from(otherLinks);
}

async function updateData(id: string, title: string, linkTo: string) {
  const session = await auth();
  if (!session?.user) return;

  await db
    .insert(history)
    .values({
      linkId: id,
      userId: session?.user?.id as string,
      linkTo: linkTo,
      title: title,
    })
    .onConflictDoUpdate({
      target: history.id,
      set: { createdAt: new Date() },
    });
}

async function Component({ subjectName }: { subjectName: string }) {
  const datas = await getData(subjectName);

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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bài tập</CardTitle>
        <CardDescription>
          Cùng với các độ khó khác nhau giúp cũng cố kiến thức
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tên</TableHead>
              <TableHead>Link</TableHead>
              <TableHead className="hidden md:table-cell">Môn</TableHead>
              <TableHead className="hidden md:table-cell">Chủ đề</TableHead>
              <TableHead className="hidden md:table-cell">Độ khó</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/*  */}
            {datas.map((data, i) => {
              return (
                <TableRow key={i}>
                  <TableCell className="font-medium">{data.title}</TableCell>
                  <TableCell>
                    <form
                      action={async () => {
                        "use server";
                        await updateData(data.id, data.title, data.linkTo);
                        redirect(data.linkTo);
                      }}
                    >
                      <Button type="submit">Đi đến</Button>
                    </form>
                    {/* <Link href={data.linkTo}>
                      <Button
                        onClick={async () => {
                          "use server";
                          await updateData(data.id, data.title, data.linkTo);
                        }}
                      >
                        Đi đến
                      </Button>
                    </Link> */}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {realName[data.subject as keyof object]}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {data.topic}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {/* <Badge variant="destructive">{data.badge}</Badge> */}
                    <Badge difficulty={data.badge as string} />
                  </TableCell>
                </TableRow>
              );
            })}
            {/*  */}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
}

export default async function Page() {
  const session = await auth();
  const isLogin = !!session?.user;

  return (
    <>
      {!isLogin && <Navbar />}
      {isLogin && <NavbarAuth imageLink={session?.user?.image as string} />}
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
        <Tabs defaultValue="tat-ca" className="w-full">
          <TabsList>
            <TabsTrigger value="tat-ca">Tất cả</TabsTrigger>
            <TabsTrigger value="toan">Toán</TabsTrigger>
            <TabsTrigger value="ly">Lý</TabsTrigger>
            <TabsTrigger value="hoa">Hóa</TabsTrigger>
            <TabsTrigger value="tin">Tin</TabsTrigger>
            <TabsTrigger value="anh">Anh</TabsTrigger>
            <TabsTrigger value="van">Văn</TabsTrigger>
            <TabsTrigger value="su">Sử</TabsTrigger>
            <TabsTrigger value="dia">Địa</TabsTrigger>
            <TabsTrigger value="sinh">Sinh</TabsTrigger>
          </TabsList>
          <TabsContent value="tat-ca">
            <Component subjectName="tat-ca" />
          </TabsContent>
          <TabsContent value="toan">
            <Component subjectName="toan" />
          </TabsContent>
          <TabsContent value="ly">
            <Component subjectName="ly" />
          </TabsContent>
          <TabsContent value="hoa">
            <Component subjectName="hoa" />
          </TabsContent>
          <TabsContent value="tin">
            <Component subjectName="tin" />
          </TabsContent>
          <TabsContent value="anh">
            <Component subjectName="anh" />
          </TabsContent>
          <TabsContent value="van">
            <Component subjectName="van" />
          </TabsContent>
          <TabsContent value="su">
            <Component subjectName="su" />
          </TabsContent>
          <TabsContent value="dia">
            <Component subjectName="dia" />
          </TabsContent>
          <TabsContent value="sinh">
            <Component subjectName="sinh" />
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
