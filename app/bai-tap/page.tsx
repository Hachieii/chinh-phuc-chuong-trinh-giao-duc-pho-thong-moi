import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import { Badge } from "@/components/ui/badge";
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

function Component({ subjectName }: { subjectName: string }) {
  if (subjectName !== "ly") return <></>;
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
            <TableRow>
              <TableCell className="font-medium">
                Chuyên Đề Vận Dụng Cao Dao Động Điều Hòa
              </TableCell>
              <TableCell>
                <a href="https://www.scribd.com/document/453671689/Tailieupro-com-Chuyen-%C4%90%E1%BB%81-V%E1%BA%ADn-D%E1%BB%A5ng-Cao-Dao-%C4%90%E1%BB%99ng-%C4%90i%E1%BB%81u-Hoa-pdf">
                  <p className="underline">Link</p>
                </a>
              </TableCell>
              <TableCell className="hidden md:table-cell">Lý</TableCell>
              <TableCell className="hidden md:table-cell">
                Dao động điều hòa
              </TableCell>
              <TableCell className="hidden md:table-cell">
                <Badge variant="destructive">Vận dụng cao</Badge>
              </TableCell>
            </TableRow>
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
        <Tabs defaultValue="toan" className="w-full">
          <TabsList>
            <TabsTrigger value="toan">Toán</TabsTrigger>
            <TabsTrigger value="ly">Lý</TabsTrigger>
            <TabsTrigger value="hoa">Hóa</TabsTrigger>
            <TabsTrigger value="tin">Tin</TabsTrigger>
          </TabsList>
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
        </Tabs>
      </main>
    </>
  );
}
