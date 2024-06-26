import { auth } from "@/auth";
import ChapterList from "@/components/chapter";
import ListSubjects from "@/components/listsubjects";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";

const data = [
  {
    id: 1,
    nthChapter: "1",
    title: "Câu chuyện và điểm nhìn trong truyện kể",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Vợ nhặt",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Chí Phèo",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Thực hành tiếng Việt trang 36",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Viết văn bản nghị luận về một tác phẩm truyện",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Thuyết trình về nghệ thuật kể chuyện trong một tác phẩm truyện",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Củng cố, mở rộng trang 48",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Thực hành đọc Cải ơi",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 2,
    nthChapter: "2",
    title: "Cấu tứ và hình ảnh trong thơ trữ tình",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Nhớ đồng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Tràng giang",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Con đường mùa đông",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Thực hành tiếng Việt trang 65",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Viết văn bản nghị luận về một tác phẩm thơ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Giới thiệu một tác phẩm nghệ thuật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Củng cố, mở rộng trang 73",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: "Thực hành đọc Thời gian",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 3,
    nthChapter: "3",
    title: "Cấu trúc của văn bản nghị luận",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Cầu hiền chiếu",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Tôi có một ước mơ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Một thời đại trong thi ca",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Thực hành tiếng Việt trang 89",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Viết bài văn nghị luận về một vấn đề xã hội",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Trình bày ý kiến đánh giá, bình luận một vấn đề xã hội",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Củng cố mở rộng trang 97",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: "Thực hành đọc Tiếp xúc với tác phẩm",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 4,
    nthChapter: "4",
    title: "Tự sự trong truyện thơ dân gian và trong thơ trữ tình",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Lời tiễn dặn",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Dương phụ hành",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Thuyền và biển",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Thực hành tiếng Việt trang 112",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Viết bài văn nghị luận về một vấn đề xã hội trang 114",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Thảo luận về một vấn đề trong đời sống",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Củng cố, mở rộng trang 122",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: "Thực hành đọc Nàng Ờm nhắn nhủ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 5,
    nthChapter: "5",
    title: "Nhân vật và xung đột trong bi kịch",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Sống, hay không sống - đó là vấn đề",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Vĩnh biệt Cửu Trùng Đài",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Viết báo cáo nghiên cứu về một vấn đề tự nhiên, xã hội",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Trình bày báo cáo kết quả nghiên cứu",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Củng cố, mở rộng trang 151",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Thực hành đọc Prô-mê-tê bị xiềng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 6,
    nthChapter: "#",
    title: "Ôn tập học kì 1",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Hệ thống hóa kiến thức đã học",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Luyện tập và vận dụng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 7,
    nthChapter: "6",
    title: "Nguyễn Du - Những điều trông thấy mà đau đớn lòng",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Tác gia Nguyễn Du",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Trao duyên",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Độc Tiểu Thanh kí",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Thực hành tiếng Việt trang 20",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Viết văn bản thuyết minh về một tác phẩm văn học",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Nói và nghe Giới thiệu một tác phẩm văn học",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Củng cố, mở rộng trang 28",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: "Thực hành đọc Chí khí anh hùng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 9,
        nthLesson: "9",
        title: "Thực hành đọc Mộng đắc thái liên",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 8,
    nthChapter: "7",
    title: "Ghi chép và tưởng tượng trong kí",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Ai đã đặt tên cho dòng sông",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: '"Và tôi vẫn muốn mẹ…"',
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Cà Mau quê xứ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Thực hành tiếng Việt trang 51",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Viết văn bản thuyết minh về một hiện tượng xã hội",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Nói và nghe Thảo luận, tranh luận về một vấn đề trong đời sống",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Củng cố, mở rộng trang 59",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: "Thực hành đọc Cây diêm cuối cùng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 9,
    nthChapter: "8",
    title: "Cấu trúc của văn bản thông tin",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Nữ phóng viên đầu tiên",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Trí thông minh nhân tạo",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title:
          "Pa-ra-lim-pích (Paralympic): Một lịch sử chữa lành những vết thương",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Thực hành tiếng Việt trang 78",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Viết văn bản thuyết minh về một vấn đề của xã hội đương đại",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Nói và nghe Tranh biện về một vấn đề trong đời sống",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Củng cố, mở rộng trang 88",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: "Thực hành đọc Ca nhạc ở Miệt Vườn",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 10,
    nthChapter: "9",
    title: "Lựa chọn và hành động",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Bài ca ngất ngưởng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Văn tế nghĩa sĩ Cần Giuộc",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Cộng đồng và cá thể",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Thực hành tiếng Việt trang 110",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Viết văn nghị luận về một tác phẩm nghệ thuật",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Giới thiệu một tác phẩm nghệ thuật (tiếp theo)",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Củng cố, mở rộng trang 119",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: '"Làm việc" cũng là "làm người"',
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 11,
    nthChapter: "#",
    title: "Ôn tập học kì 2",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Hệ thống hóa kiến thức đã học",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Luyện tập và vận dụng",
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
                subject="van"
                pref="Bài"
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
