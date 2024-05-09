import { auth } from "@/auth";
import ChapterList from "@/components/chapter";
import ListSubjects from "@/components/listsubjects";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";

const data = [
  {
    id: 1,
    nthChapter: "1",
    title: "Cách mạng tư sản và sự phát triển của chủ nghĩa tư bản",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Một số vấn đề chung về cách mạng tư sản",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Sự xác lập và phát triển của chủ nghĩa tư bản",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 2,
    nthChapter: "2",
    title: "Chủ nghĩa xã hội từ năm 1917 đến nay",
    lessonList: [
      {
        id: 1,
        nthLesson: "3",
        title: "Sự hình thành Liên bang Cộng hòa xã hội chủ nghĩa Xô Viết",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "4",
        title:
          "Sự phát triển của chủ nghĩa xã hội từ sau chiến tranh thế giới thứ hai đến nay",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 3,
    nthChapter: "3",
    title: "Quá trình giành độc lập dân tộc của các quốc gia Đông Nam Á",
    lessonList: [
      {
        id: 1,
        nthLesson: "5",
        title:
          "Quá trình xâm lược và cai trị của chủ nghĩa thực dân ở Đông Nam Á",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "6",
        title: "Hành trình đi đến độc lập dân tộc ở Đông Nam Á",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 4,
    nthChapter: "4",
    title:
      "Chiến tranh bảo vệ Tổ quốc và chiến tranh giải phóng dân tộc trong lịch sử Việt Nam (trước Cách mạng tháng Tám năm 1945)",
    lessonList: [
      {
        id: 1,
        nthLesson: "7",
        title: "Khái quát về chiến tranh bảo vệ tổ quốc trong lịch sử Việt Nam",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "8",
        title: "Khái quát về chiến tranh bảo vệ tổ quốc trong lịch sử Việt Nam",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 5,
    nthChapter: "5",
    title: "Một số cuộc cải cách lớn trong lịch sử Việt Nam (trước năm 1858)",
    lessonList: [
      {
        id: 1,
        nthLesson: "9",
        title:
          "Cuộc cải cách của Hồ Quý Ly và triều Hồ (cuối thế kỉ XIV, đầu thế kỉ XV)",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "10",
        title: "Cuộc cải cách của Lê Thánh Tông (thế kỉ XV)",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "11",
        title: "Cuộc cải cách của Minh Mạng (nửa đầu thế kỉ XIX)",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 6,
    nthChapter: "6",
    title:
      "Lịch sử bảo vệ chủ quyền, các quyền và lợi ích hợp pháp của Việt Nam ở biển Đông",
    lessonList: [
      {
        id: 1,
        nthLesson: "12",
        title: "Vị trí và tầm quan trọng của biển Đông",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "13",
        title: "Việt Nam và biển Đông",
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
                subject="su"
                pref="Chủ đề"
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
