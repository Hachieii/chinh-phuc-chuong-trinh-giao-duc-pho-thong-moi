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
    nthChapter: "A",
    title:
      "MÁY TÍNH VÀ XÃ HỘI TRI THỨC THẾ GIỚI THIẾT BỊ SỐ - HỆ ĐIỀU HÀNH VÀ PHẦN MỀM ỨNG DỤNG",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Bên trong máy tính",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Khám phá thế giới thiết bị số thông minh",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Khái quát về hệ điều hành",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Thực hành với các thiết bị số",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Phần mềm ứng dụng và dịch vụ phần mềm",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 2,
    nthChapter: "C",
    title:
      "TỔ CHỨC LƯU TRỮ, TÌM KIẾM VÀ TRAO ĐỔI THÔNG TIN TÌM KIẾM VÀ TRAO ĐỔI THÔNG TIN TRÊN MẠNG",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Lưu trữ trực tuyến",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Thực hành một số tính năng hữu ích của máy tìm kiếm",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Thực hành một số tính năng nâng cao của mạng xã hội",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Thực hành một số tính năng hữu ích của dịch vụ thư điện tử",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 3,
    nthChapter: "D",
    title:
      "ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ TRONG MÔI TRƯỜNG SỐ ỨNG XỬ VĂN HOÁ VÀ AN TOÀN TRÊN MẠNG",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Phòng tránh lừa đảo và ứng xử văn hóa trên mạng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 4,
    nthChapter: "F",
    title:
      "GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH GIỚI THIỆU CÁC HỆ CƠ SỞ DỮ LIỆU",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Bài toán quản lí và cơ sở dữ liệu",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Bảng và khoá chính trong cơ sở dữ liệu quan hệ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title:
          "Quan hệ giữa các bảng và khoá ngoài trong cơ sở dữ liệu quan hệ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Các biểu mẫu cho xem và cập nhập dữ liệu",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Truy vấn trong cơ sở dữ liệu quan hệ",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Truy vấn trong cơ sở dữ liệu quan hệ (tiếp theo)",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Các loại kiến trúc của hệ cơ sở dữ liệu",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: "Bảo vệ sự an toàn của hệ CSDL và bảo mật thông tin trong CSDL",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 5,
    nthChapter: "G",
    title: "HƯỚNG NGHIỆP VỚI TIN HỌC GIỚI THIỆU NGHỀ QUẢN TRỊ CƠ SỞ DỮ LIỆU",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Nghề quản trị cơ sở dữ liệu",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 6,
    nthChapter: "E(ICT)",
    title: "ỨNG DỤNG TIN HỌC PHẦN MỀM CHỈNH SỬA ẢNH VÀ LÀM VIDEO",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title:
          "Một số thao tác chỉnh sửa ảnh và hỗ trợ chỉnh sửa ảnh trong phần mềm GIMP",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Tẩy xoăn ảnh trong GIMP",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Tạo ảnh động trong GMP",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Giới thiệu phần mềm làm video Animiz",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Chỉnh sửa video trên Animiz",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Làm phim hoạt hình trên Animiz",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Thực hành tổng hợp",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 7,
    nthChapter: "F(ICT)",
    title:
      "GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH. THỰC HÀNH TẠO VÀ KHAI THÁC CƠ SỞ DỮ LIỆU",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Làm quen với Microsoft Access",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Tạo bảng trong cơ sở dữ liệu",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Liên kết các bằng trong cơ sở dữ liệu",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Tạo và sử dụng biểu mẫu",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Thiết kế truy vấn",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Tạo báo cáo đơn giản",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Chỉnh sửa các thành phần giao diện",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: "Hoàn tất ứng dụng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
    ],
  },
  {
    id: 8,
    nthChapter: "F(CS)",
    title:
      "Giải quyết vấn đề với sự trợ giúp của máy tính (Giới thiệu nghề quản trị cơ sở dữ liệu)",
    lessonList: [
      {
        id: 1,
        nthLesson: "1",
        title: "Kiểu mảng và cấu trúc mảng",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 2,
        nthLesson: "2",
        title: "Mảng hai chiều",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 3,
        nthLesson: "3",
        title: "Thực hành về tệp, mảng và danh sách",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 4,
        nthLesson: "4",
        title: "Làm mịn dần từng bước từ thuật toán đến chương trình máy tính",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 5,
        nthLesson: "5",
        title: "Đánh giá thuật toán",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 6,
        nthLesson: "6",
        title: "Kiểm thử và sửa lỗi chương trình",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 7,
        nthLesson: "7",
        title: "Lập trình giải bài toán tìm kiếm",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 8,
        nthLesson: "8",
        title: "Lập trình một số thuật toán sắp xếp",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 9,
        nthLesson: "9",
        title: "Lập trình sắp xếp nhanh",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 10,
        nthLesson: "10",
        title: "Thiết kế chương trình từ trên xuống và phương pháp mô đun hoá",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 11,
        nthLesson: "11",
        title: "Thực hành thiết kế và lập trình theo mo đun",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 12,
        nthLesson: "12",
        title: "Thực hành thiết kế và lập trình theo mo đun tiếp theo",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 13,
        nthLesson: "13",
        title: "Thực hành thiết kế và lập trình theo mo đun tiếp theo",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 14,
        nthLesson: "14",
        title: "Thực hành về thư viện các hàm tự định nghĩa",
        context: "To do",
        isDone: false,
        linkTo: "#",
      },
      {
        id: 15,
        nthLesson: "15",
        title: "Cấu trúc dữ liệu danh sách liên kết và ứng dụng",
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
                subject="tin"
                pref="CHỦ ĐỀ"
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
