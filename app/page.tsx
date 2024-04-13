import { auth } from "@/auth";
import ChapterList from "@/components/chapter";
import LessonCard from "@/components/lessonCard";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";
import SubjectProgress from "@/components/subjectProgress";
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
  return (
    <>
      {!isLogin && <Navbar />}
      {isLogin && <NavbarAuth imageLink={session?.user?.image as string} />}
      {JSON.stringify(session?.user, null, 9)}
      <div className="container">
        <ChapterList
          nthChapter="1"
          title="chuong dau tien"
          lessonList={lessonList}
        />
        <ChapterList
          nthChapter="2"
          title="chuong tiep theo"
          lessonList={lessonList}
        />
      </div>
    </>
  );
}
