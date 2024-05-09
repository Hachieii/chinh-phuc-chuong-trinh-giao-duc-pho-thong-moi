import { auth } from "@/auth";
import ChapterList from "@/components/chapter";
import ListSubjects from "@/components/listsubjects";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";

const data = [
  {
    id: 1,
    nthChapter: "#",
    title: "Phần một: Một số vấn đề về kinh tế - xã hội thế giới",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title:
          "Sự khác biệt về trình độ phát triển kinh tế - xã hội của các nhóm nước",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Toàn cầu hóa, khu vực hóa kinh tế",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Một số tổ chức khu vực và quốc tế",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Thực hành: Tìm hiểu về toàn cầu hóa, khu vực hóa",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Một số vấn đề an ninh toàn cầu",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Thực hành: Viết báo cáo về nền kinh tế tri thức",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 2,
    nthChapter: "#",
    title: "Phần hai: Địa lí khu vực và quốc gia",
    lessonList: [],
  },
  {
    id: 3,
    nthChapter: "#",
    title: "Khu vực Mỹ La tinh",
    lessonList: [
      {
        id: 7,
        nthLesson: "7",
        title:
          "Vị trí địa lí, điều kiện tự nhiên, dân cư, xã hội và kinh tế khu vực Mỹ La - Tinh",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title:
          "Thực hành: Viết báo cáo về tình hình phát triển kinh tế - xã hội ở cộng hòa liên bang Bra-xin",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 4,
    nthChapter: "#",
    title: "Liên minh châu Âu (EU)",
    lessonList: [
      {
        id: 9,
        nthLesson: "9",
        title:
          "EU - Một liên kết kinh tế khu vực lớn. Vị thế của EU trong nền kinh tế thế giới",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 10,
        nthLesson: "10",
        title:
          "Thực hành: Viết báo cáo về công nghiệp của cộng hòa liên bang Đức",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 5,
    nthChapter: "#",
    title: "Khu vực Đông Nam Á",
    lessonList: [
      {
        id: 11,
        nthLesson: "11",
        title:
          "Vị trí địa lí, điều kiện tự nhiên, dân cư, xã hội và kinh tế khu vực Đông Nam Á",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 12,
        nthLesson: "12",
        title: "Hiệp hội các quốc gia Đông Nam Á (ASEAN)",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 13,
        nthLesson: "13",
        title:
          "Thực hành : Tìm hiểu về hoạt động du lịch và kinh tế đối ngoại của khu vực Đông Nam Á",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 14,
        nthLesson: "14",
        title:
          "Vị trí địa lí, điều kiện tự nhiên, dân cư, xã hội và kinh tế khu vực Tây Nam Á",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 15,
        nthLesson: "15",
        title: "Thực hành: Viết báo cáo về vấn đề dầu mỏ ở khu vực Tây Nam Á",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 6,
    nthChapter: "#",
    title: "Hợp chủng quốc Hoa Kỳ",
    lessonList: [
      {
        id: 16,
        nthLesson: "16",
        title: "Vị trí địa lí, điều kiện tự nhiên và dân cư, xã hội Hoa Kỳ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 17,
        nthLesson: "17",
        title: "Kinh tế Hoa Kỳ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 18,
        nthLesson: "18",
        title:
          "Thực hành: Tìm hiểu về hoạt động xuất khẩu, nhập khẩu của Hoa Kỳ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 7,
    nthChapter: "#",
    title: "Liên Bang Nga",
    lessonList: [
      {
        id: 19,
        nthLesson: "19",
        title:
          "Vị trí địa lí, điều kiện tự nhiên và dân cư, xã hội Liên Bang Nga",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 20,
        nthLesson: "20",
        title: "Kinh tế Liên Bang Nga",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 21,
        nthLesson: "21",
        title:
          "Thực hành: Tìm hiểu về công nghiệp khai thác dầu khí của Liên Bang Nga",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 8,
    nthChapter: "#",
    title: "Nhật Bản",
    lessonList: [
      {
        id: 22,
        nthLesson: "22",
        title: "Vị trí địa lí, điều kiện tự nhiên và dân cư, xã hội Nhật Bản",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 23,
        nthLesson: "23",
        title: "Kinh tế Nhật Bản",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 24,
        nthLesson: "24",
        title:
          "Thực hành: Viết báo cáo về hoạt động kinh tế đối ngoại của Nhật Bản",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 9,
    nthChapter: "#",
    title: "Cộng hòa nhân dân Trung Hoa (Trung Quốc)",
    lessonList: [
      {
        id: 25,
        nthLesson: "25",
        title: "Vị trí địa lí, điều kiện tự nhiên và dân cư, xã hội Trung Quốc",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 26,
        nthLesson: "26",
        title: "Kinh tế Trung Quốc",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 27,
        nthLesson: "27",
        title:
          "Thực hành: Viết báo cáo về sự thay đổi của nền kinh tế Trung Quốc",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 10,
    nthChapter: "#",
    title: "Ô-Xtrây-Li-a",
    lessonList: [
      {
        id: 28,
        nthLesson: "28",
        title:
          "Thực hành: Đọc bản đồ; phân tích số liệu, tư liệu và viết báo cáo về tình hình phát triển kinh tế Ô-Xtrây-Li-a",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 11,
    nthChapter: "#",
    title: "Cộng hòa Nam Phi",
    lessonList: [
      {
        id: 29,
        nthLesson: "29",
        title:
          "Vị trí địa lí, điều kiện tự nhiên và dân cư, xã hội Cộng hòa Nam Phi",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 30,
        nthLesson: "30",
        title: "Kinh tế Cộng hòa Nam Phi",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 31,
        nthLesson: "31",
        title:
          "Thực hành: Tìm hiểu về công nghiệp khai thác khoáng sản của Cộng hòa Nam Phi",
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

      <div className="container">
        {data.map((chapter) => {
          return (
            <div key={chapter.id} className="py-16">
              <ChapterList
                subject="dia"
                pref=""
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
