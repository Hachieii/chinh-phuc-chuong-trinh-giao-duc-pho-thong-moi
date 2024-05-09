import { auth } from "@/auth";
import ChapterList from "@/components/chapter";
import ListSubjects from "@/components/listsubjects";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";

const data = [
  {
    id: 1,
    nthChapter: "1",
    title: "Trao đổi chất và chuyển hóa năng lượng ở sinh vật",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Khái quát về trao đổi chất và chuyển hóa năng lượng ở sinh vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Trao đổi nước và khoáng ở thực vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title:
          "Thực hành: Thí nghiệm trao đổi nước ở thực vật và trông cây bằng thủy canh, khí canh",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Quang hợp ở thực vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title:
          "Thực hành: Quan sát lục lạp và tách chiết sắc tố; chứng minh sự hình thành sản phẩm quang hợp",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Hô hấp ở thực vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Thực hành: Một số thí nghiệm về hô hấp ở thực vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: "Dinh dưỡng và tiêu hóa ở động vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 9,
        nthLesson: "9",
        title: "Hô hấp ở động vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 10,
        nthLesson: "10",
        title: "Tuần hoàn ở động vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 11,
        nthLesson: "11",
        title: "Thực hành: Tìm hiểu hoạt động của hệ tuần hoàn",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 12,
        nthLesson: "12",
        title: "Miễn dịch ở động vật và người",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 13,
        nthLesson: "13",
        title: "Bài tiết và cân bằng nội môi",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 14,
        nthLesson: "",
        title: "Ôn tập Chương 1",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 2,
    nthChapter: "2",
    title: "Cảm ứng ở sinh vật",
    lessonList: [
      {
        id: 14,
        nthLesson: "14",
        title: "Khái quát về cảm ứng ở sinh vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 15,
        nthLesson: "15",
        title: "Cảm ứng ở thực vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 16,
        nthLesson: "16",
        title: "Thực hành: Cảm ứng ở thực vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 17,
        nthLesson: "17",
        title: "Cảm ứng ở động vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 18,
        nthLesson: "18",
        title: "Tập tính ở động vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 19,
        nthLesson: "",
        title: "Ôn tập Chương 2",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 3,
    nthChapter: "3",
    title: "Sinh trưởng và phát triển ở sinh vật",
    lessonList: [
      {
        id: 19,
        nthLesson: "19",
        title: "Khái quát về sinh trưởng và phát triển ở sinh vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 20,
        nthLesson: "20",
        title: "Sinh trưởng và phát triển ở thực vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 21,
        nthLesson: "21",
        title: "Sinh trưởng và phát triển ở động vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 22,
        nthLesson: "22",
        title: "Thực hành: Quan sát sự sinh trưởng và phát triển ở sinh vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 23,
        nthLesson: "",
        title: "Ôn tập Chương 3",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 4,
    nthChapter: "4",
    title: "Sinh sản ở sinh vật",
    lessonList: [
      {
        id: 23,
        nthLesson: "23",
        title: "Khái quát về sinh sản ở sinh vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 24,
        nthLesson: "24",
        title: "Sinh sản ở thực vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 25,
        nthLesson: "25",
        title: "Thực hành: Nhân giống vô tính và thụ phấn ở thực vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 26,
        nthLesson: "26",
        title: "Sinh sản ở động vật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 27,
        nthLesson: "",
        title: "Ôn tập Chương 4",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 5,
    nthChapter: "5",
    title:
      "Mối quan hệ giữa các quá trình sinh lí trong cơ thể và một số ngành nghề liên quan đến sinh học cơ thể",
    lessonList: [
      {
        id: 27,
        nthLesson: "27",
        title: "Cơ thể sinh vật là một hệ thống mở và tự điều chỉnh",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 28,
        nthLesson: "28",
        title: "Một số ngành nghề liên quan đến sinh học cơ thể",
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
                subject="sinh"
                pref="Chương"
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
