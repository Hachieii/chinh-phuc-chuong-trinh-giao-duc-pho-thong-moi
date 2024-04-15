import { auth } from "@/auth";
import ChapterList from "@/components/chapter";
import ListSubjects from "@/components/listsubjects";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";
import Image from "next/image";

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
    title: "HÀM SỐ LƯỢNG GIÁC VÀ PHƯƠNG TRÌNH LƯỢNG GIÁC",
    lessonList: [
      {
        id: 1,
        title: "Giá trị lượng giác của góc lượng giác",
        nthLesson: "1",
        context: "To do",
        isDone: false,
        linkTo: "/thu-vien/toan/gia-tri-luong-giac-cua-goc-luong-giac",
      },
      {
        id: 2,
        title: "Công thức lượng giác",
        nthLesson: "2",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        title: "Hàm số lượng giác",
        nthLesson: "3",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        title: "Phương trình lượng giác cơ bản",
        nthLesson: "4",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 2,
    nthChapter: "2",
    title: "DÃY SỐ. CẤP SỐ CỘNG VÀ CẤP SỐ NHÂN",
    lessonList: [
      {
        id: 1,
        title: "Dãy số",
        nthLesson: "5",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        title: "Cấp số cộng",
        nthLesson: "6",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        title: "Cấp số nhân",
        nthLesson: "7",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 3,
    nthChapter: "3",
    title: "CÁC SỐ ĐẶC TRƯNG ĐO XU THẾ TRUNG TÂM CỦA MẪU SỐ LIỆU GHÉP NHÓM",
    lessonList: [
      {
        id: 1,
        title: "Mẫu số liệu ghép nhóm",
        nthLesson: "8",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        title: "Các số đặc trưng đo xu thế trung tâm",
        nthLesson: "9",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 4,
    nthChapter: "4",
    title: "QUAN HỆ SONG SONG TRONG KHÔNG GIAN",
    lessonList: [
      {
        id: 1,
        title: "Đường thẳng và mặt phẳng trong không gian",
        nthLesson: "10",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        title: "Hai đường thẳng song song",
        nthLesson: "11",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        title: "Đường thẳng và mặt phẳng song song",
        nthLesson: "12",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        title: "Hai mặt phẳng song song",
        nthLesson: "13",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        title: "Phép chiếu song song",
        nthLesson: "14",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 5,
    nthChapter: "5",
    title: "GIỚI HẠN. HÀM SỐ LIÊN TỤC",
    lessonList: [
      {
        id: 1,
        title: "Giới hạn của dãy số",
        nthLesson: "15",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        title: "Giới hạn của hàm số",
        nthLesson: "16",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        title: "Hàm số liên tục",
        nthLesson: "17",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 6,
    nthChapter: "6",
    title: "HÀM SỐ MŨ VÀ HÀM SỐ LÔGARIT",
    lessonList: [
      {
        id: 1,
        title: "Luỹ thừa với số mũ thực",
        nthLesson: "18",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        title: "Lôgarit",
        nthLesson: "19",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        title: "Hàm số mũ và hàm số lôgarit",
        nthLesson: "20",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        title: "Phương trình, bất phương trình mũ và lôgarit",
        nthLesson: "21",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 7,
    nthChapter: "7",
    title: "QUAN HỆ VUÔNG GÓC TRONG KHÔNG GIAN",
    lessonList: [
      {
        id: 1,
        title: "Hai đường thẳng vuông góc",
        nthLesson: "22",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        title: "Đường thẳng vuông góc với mặt phẳng",
        nthLesson: "23",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        title: "Phép chiếu vuông góc. Góc giữa đường thẳng và mặt phẳng",
        nthLesson: "24",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        title: "Hai mặt phẳng vuông góc",
        nthLesson: "25",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        title: "Khoảng cách",
        nthLesson: "26",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        title: "Thể tích",
        nthLesson: "27",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 8,
    nthChapter: "8",
    title: "CÁC QUY TẮC TÍNH XÁC SUẤT",
    lessonList: [
      {
        id: 1,
        title: "Biến cố hợp, biến cố giao, biến cố độc lập",
        nthLesson: "28",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        title: "Công thức cộng xác suất",
        nthLesson: "29",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        title: "Công thức nhân xác suất cho hai biến cố độc lập",
        nthLesson: "30",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 9,
    nthChapter: "9",
    title: "ĐẠO HÀM",
    lessonList: [
      {
        id: 1,
        title: "Định nghĩa và ý nghĩa của đạo hàm",
        nthLesson: "31",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        title: "Các quy tắc tính đạo hàm",
        nthLesson: "32",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        title: "Đạo hàm cấp hai",
        nthLesson: "33",
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
                subject="toan"
                pref="CHƯƠNG"
                title={chapter.title}
                nthChapter={chapter.nthChapter}
                lessonList={chapter.lessonList}
              />
            </div>
          );
        })}
      </div>

      <Image src="Picture1" alt="image" />
    </>
  );
}
