import { auth } from "@/auth";
import ChapterList from "@/components/chapter";
import ListSubjects from "@/components/listsubjects";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";

// id: number
// nthChapter: string,
// title: string,
// lessonList,

// linkTo: string;
// nthLesson: string;
// title: string;
// context: string;
// isDone: boolean;

const data = [
  {
    id: 1,
    nthChapter: "1",
    title: "DAO ĐỘNG",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Dao động điều hòa",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Mô tả dao động điều hòa",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Vận tốc, gia tốc trong dao động điều hòa",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Bài tập về dao động điều hòa",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title:
          "Động năng. Thế năng. Sự chuyển hóa năng lượng trong dao động điều hòa",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Dao động tắt dần. Dao động cưỡng bức. Hiện tượng cộng hưởng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Bài tập về sự chuyển hóa năng lượng trong dao động điều hòa",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 2,
    nthChapter: "2",
    title: "SÓNG",
    lessonList: [
      {
        id: 1,
        nthLesson: "8",
        title: "Mô tả sóng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "9",
        title: "Sóng ngang. Sóng dọc. Sự truyền năng lượng của sóng cơ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "10",
        title: "Thực hành: Đo tần số của sóng âm",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "11",
        title: "Sóng điện từ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "12",
        title: "Giao thoa sóng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "13",
        title: "Sóng dừng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "14",
        title: "Bài tập về sóng dừng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "15",
        title: "Thực hành: Đo tốc độ truyền âm",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 3,
    nthChapter: "3",
    title: "ĐIỆN TRƯỜNG",
    lessonList: [
      {
        id: 1,
        nthLesson: "16",
        title: "Lực tương tác giữa hai điện tích",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "17",
        title: "Khái niệm điện trường",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "18",
        title: "Điện trường đều",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "19",
        title: "Thế năng điện",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "20",
        title: "Điện thế",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "21",
        title: "Tụ điện",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 4,
    nthChapter: "4",
    title: "DÒNG ĐIỆN. MẠCH ĐIỆN",
    lessonList: [
      {
        id: 1,
        nthLesson: "22",
        title: "Cường độ dòng điện",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "23",
        title: "Điện trở. Định luật Ohm",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "24",
        title: "Nguồn điện",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "25",
        title: "Năng lượng và công suất điện",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "26",
        title:
          "Thực hành: Đo suất điện động và điện trở trong của pin điện hóa",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
];

export default async function Page() {
  const session = await auth();
  const isLogin = !!session?.user;
  return (
    <>
      {isLogin && <NavbarAuth imageLink={session?.user?.image as string} />}
      {!isLogin && <Navbar />}
      <ListSubjects />

      <div className="container scale-90">
        {data.map((chapter) => {
          return (
            <div key={chapter.id} className="py-16">
              <ChapterList
                subject="ly"
                pref="CHƯƠNG"
                title={chapter.title}
                nthChapter={chapter.nthChapter}
                lessonList={chapter.lessonList}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
