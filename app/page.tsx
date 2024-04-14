import { auth } from "@/auth";
import ChapterList from "@/components/chapter";
import LessonCard from "@/components/lessonCard";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";
import SubjectProgress from "@/components/subjectProgress";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
// lessonList: {
//   id: number;
//   linkTo: string;
//   nthLesson: string;
//   title: string;
//   context: string;
//   isDone: boolean;
// }[];

const lessonList = [
  {
    id: 1,
    linkTo: "#",
    nthLesson: "1",
    title: "dao dong dieu hoa",
    context: "bai quan trong",
    isDone: true,
  },
  {
    id: 2,
    linkTo: "#",
    nthLesson: "2",
    title: "dao dong dieu hoa 2",
    context: "bai quan trong hon",
    isDone: false,
  },
  {
    id: 3,
    linkTo: "#",
    nthLesson: "3",
    title:
      "mot tieu de rat lkjdsf sdf lsdkjfsdlfjsdlkf jsdlfkjsdf lsdjflsdf sldfkjsldfs dfkjsdlfksd jflks dflsjdflskdjf",
    context: "bai quan trong hon",
    isDone: false,
  },
];

export default async function Home() {
  const session = await auth();
  const isLogin = !!session?.user;
  if (isLogin) await redirect("/dashboard");

  return (
    <>
      {/* {!isLogin && <Navbar />}
      {isLogin && <NavbarAuth imageLink={session?.user?.image as string} />} */}
      <div className="container py-[20%]">
        <h1 className="text-7xl font-bold text-center">
          Công phá THPT Quốc gia
        </h1>
        <div className="flex flex-wrap justify-center pt-16 gap-16">
          <Link href="/api/auth/signin">
            <Button className="bg-primary scale-125 font-semibold">
              Đăng nhập
            </Button>
          </Link>
          <Link href="/thu-vien">
            <Button className="bg-secondary-foreground scale-125 font-semibold">
              Thư viện
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
