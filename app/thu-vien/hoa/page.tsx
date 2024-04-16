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
    title: "CÂN BẰNG HOÁ HỌC",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Khái niệm về cân bằng hoá học",
        context: "To do",
        isDone: false,
        linkTo: "/thu-vien/hoa/khai-niem-ve-can-bang-hoa-hoc",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Cân bằng trong dung dịch nước",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Ôn tập chương 1",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 2,
    nthChapter: "2",
    title: "NITROGEN - SULFUR",
    lessonList: [
      {
        id: 1,
        nthLesson: "4",
        title: "Nitrogen",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "5",
        title: "Ammonia - Muối ammonium",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "6",
        title: "Một số hợp chất của nitrogen với oxygen",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "7",
        title: "Sulfur và sulfur dioxide",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "8",
        title: "Sulfuric acid và muối sulfate",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "9",
        title: "Ôn tập chương 2",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 3,
    nthChapter: "3",
    title: "ĐẠI CƯƠNG VỀ HOÁ HỌC HỮU CƠ",
    lessonList: [
      {
        id: 1,
        nthLesson: "10",
        title: "Hợp chất hữu cơ và hoá học hữu cơ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "11",
        title: "Phương pháp tách biệt và tinh chế hợp chất hữu cơ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "12",
        title: "Công thức phân tử hợp chất hữu cơ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "13",
        title: "Cấu tạo hoá học hợp chất hữu cơ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "14",
        title: "Ôn tập chương 3",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 4,
    nthChapter: "4",
    title: "HYDROCARBON",
    lessonList: [
      {
        id: 1,
        nthLesson: "15",
        title: "Alkane",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "16",
        title: "Hydrocarbon không no",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "17",
        title: "Arene (Hydrocarbon thơm)",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "18",
        title: "Ôn tập chương 4",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 5,
    nthChapter: "5",
    title: "DẪN XUẤT HALOGEN - ALCOHOL - PHENOL",
    lessonList: [
      {
        id: 1,
        nthLesson: "19",
        title: "Dẫn xuất halogen",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "20",
        title: "Alcohol",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "21",
        title: "Phenol",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "22",
        title: "Ôn tập chương 5",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 6,
    nthChapter: "6",
    title: "HỢP CHẤT CARBONYL - CARBOXYLIC ACID",
    lessonList: [
      {
        id: 1,
        nthLesson: "23",
        title: "Hợp chất carbonyl",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "24",
        title: "Carboxylic acid",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "25",
        title: "Ôn tập chương 6",
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
                subject="hoa"
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
