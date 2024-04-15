/* eslint-disable react/no-unescaped-entities */
import { auth } from "@/auth";
import Important from "@/components/important";
import ListSubjects from "@/components/listsubjects";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";
import ToggleComplete from "@/components/toggleComplete";
import DangerContent from "@/components/danger";
import Quiz from "@/components/quiz";
import Image from "next/image"; // import gia_tri_luong_giac_cua_goc_luong_giac from "@/contents/toan";

const metadata = {
  subjectName: "tin",
  title: "Bên trong máy tính",
};

const data = [
  {
    quesTitle: "Trong các câu sau, những câu nào đúng",
    ans1: [
      "A. CPU có hiệu năng càng cao thì máy tính có hiệu năng càng cao",
      true,
    ],
    ans2: ["B. Dung lượng ổ cứng đo bằng GHz", false],
    ans3: ["C. Các bộ nhớ Ram ngày nay có dung lượng hàng TB", false],
    ans4: ["D. Dung lượng RAM có ảnh hưởng tới hiệu năng của máy tính", true],
    reason:
      "A, D đúng vì cả hai đều đóng góp vào tiến trình hoạt động của máy. B sai vì GHz là đơn vị thường được dùng để đo tốc độ của CPU chứ không được dùng để chỉ giới hạn bộ nhớ. C sai vì RAM ngày nay chỉ có dung lượng tối đa là 256GB",
  },
  {
    quesTitle:
      "Em hãy sắp xếp thứ tự ưu tiên khi chọn mua máy tính: 1. Ổ cứng dung lượng lớn, 2. RAM dung lượng lớn, 3. CPU tốc độ cao",
    ans1: ["A. 1, 2, 3", false],
    ans2: ["B. 3, 1, 2", false],
    ans3: ["C. 3, 2, 1", true],
    ans4: ["D. 2, 3, 1", false],
    reason:
      "Nếu dựa trên tiêu chí chung thì chúng ta luôn ưu tiên CPU và RAM lên hàng đầu vì chúng có vai trò quan trọng nhất trong việc quyết định tốc độ của máy",
  },
];

type Question = {
  quesTitle: string;
  ans1: [string, boolean];
  ans2: [string, boolean];
  ans3: [string, boolean];
  ans4: [string, boolean];
  reason: string;
};

export default async function Page() {
  const session = await auth();
  const isLogin = !!session?.user;

  return (
    <>
      {isLogin && <NavbarAuth imageLink={session?.user?.image as string} />}
      {!isLogin && <Navbar />}
      <ListSubjects />
      <div className="flex justify-center">
        <div className="prose dark:prose-invert pt-16">
          <h1>A. Lý thuyết Bên trong máy tính</h1>
          <p></p>
          <p></p>

          <h2>1. Các cổng logic và tính toán nhị phân</h2>
          <p></p>
          <p></p>

          <h3>a. Cổng logic</h3>
          <Important subjectName="tin" title="Khái niệm Cổng logic">
            Các cổng logic là thành phần cơ bản thực hiện mọi tính toán trong
            máy tính, được tạo ra bằng cách kết hợp các bóng bán dẫn để thực
            hiện chức năng bật hoặc tắt mạch đơn giản, tương ứng với hai giá trị
            0 và 1.
          </Important>
          <p></p>
          <p></p>

          <p>
            Các cổng logic được đặt tên tương ứng với chức năng thực hiện, bao
            gồm cổng AND, cổng OR, cổng NOT, cổng XOR,... Bảng 1 liệt kê một số
            loại cổng logic thông dụng và bảng hoạt động tương ứng của chúng
            được gọi là bảng chân lý.
          </p>
          <Image
            src="/tin/bai1/Picture1.png"
            alt="bảng chân lý"
            width={1132}
            height={655}
          />
          <p>
            Cổng AND thực hiện chức năng nhân logic, ví dụ như để đèn F sáng thì
            cả công tắc A và công tắc B đồng thời phải đóng, nếu một trong hai
            công tắc mở thì đèn F tắt.
          </p>
          <p></p>
          <p></p>

          <h3>b. Thực hiện phép toán nhị phân với mạch logic</h3>
          <p></p>
          <p></p>

          <p>
            Các phép toán trên hệ nhị phân thực hiện giống như trên hệ thập
            phân:
          </p>
          <ul>
            <li>
              Cộng hai số nhị phân 1 bit được thực hiện bằng bảng chân lí mạch
              cộng.
            </li>
            <li>
              Sơ đồ mạch logic để thực hiện phép cộng hai số nhị phân 1 bit được
              lập từ bảng chân lí mạch cộng.
            </li>
            <li>
              Phép cộng hai số nhị phân dài nhiều bit được thực hiện bằng cách
              cộng từng cặp bit từ phải sang trái và có bit nhớ.
            </li>
            <li>
              Mạch cộng đầy đủ (FA) có ba đầu vào là A, B và bit nhớ mang sang C
              và hai đầu ra là bit tổng S và bit nhớ C... Mạch cộng đầy đủ là
              ghép nối hai mạch cộng 1 bit.
            </li>
            <li>
              Các cổng logic AND, XOR có thể kết hợp để thực hiện phép tính cộng
              nhị phân và các mạch logic khác có thể được tạo thành từ các cổng
              logic cơ bản.
            </li>
          </ul>

          <p></p>
          <p></p>

          <h2>2. Những bộ phận chính bên trong máy tính</h2>
          <p></p>
          <p></p>
          <p className="font-bold">
            Máy tính bao gồm nhiều loại như: để bàn, xách tay, bảng. Bên trong
            thân máy tính chứa các bộ phận chính: bảng mạch chính, CPU, RAM,
            ROM, thiết bị lưu trữ. Tốc độ và dung lượng của chúng ảnh hưởng đến
            hiệu năng của máy:
          </p>
          <Important subjectName="tin" title="Bảng mạch chính (Mainboard)">
            Bảng mạch chính (Mainboard) có đế cắm CPU, ROM, các khe cắm RAM, các
            khe cắm ổ cứng và một số khe cắm khác. Nó làm nền tảng giao tiếp
            giữa CPU, RAM và các linh kiện khác.
          </Important>
          <Important
            subjectName="tin"
            title="CPU (Central Processing Unit - bộ xử lí trung tâm)"
          >
            CPU (Central Processing Unit – bộ xử lí trung tâm) đóng vai trò bộ
            não của máy tính; tìm nạp lệnh, giải mã và thực thi lệnh cho máy
            tính.
          </Important>
          <Important
            subjectName="tin"
            title="RAM (Random Access Memory — bộ nhớ truy cập ngẫu nhiên)"
          >
            {" "}
            RAM (Random Access Memory — bộ nhớ truy cập ngẫu nhiên) lưu trữ dữ
            liệu tạm thời trong quá trình tính toán, dữ liệu sẽ bị mất khi máy
            tính mất điện hoặc khởi động lại.
          </Important>
          <Important
            subjectName="tin"
            title="ROM (Read Only Memory - bộ nhớ chỉ đọc)"
          >
            ROM (Read Only Memory - bộ nhớ chỉ đọc) lưu trữ chương trình khởi
            động máy tính.
          </Important>
          <p></p>
          <p></p>
          <ul>
            <li>
              Thiết bị lưu trữ dùng để lưu trữ dữ liệu lâu dài và không bị mất
              khi máy tính tắt nguồn. HDD, SSD hoặc USB được sử dụng để lưu trữ
              dữ liệu.
            </li>
            <li>
              Dung lượng lưu trữ dữ liệu của máy tính là tổng dung lượng của ổ
              cứng HDD, ổ cứng SSD không bao gồm dung lượng lưu trữ của RAM, có
              thể lên tới hàng TB.
            </li>
          </ul>

          <p></p>
          <p></p>

          <h2>3. Hiệu năng của máy tính</h2>
          <p></p>
          <p></p>
          <ul>
            <li className="font-bold">
              Hiệu năng máy tính phụ thuộc vào thông số kĩ thuật và đồng bộ giữa
              các bộ phận.
            </li>
            <li className="font-bold">
              Tốc độ CPU và dung lượng RAM là chỉ số quan trọng đánh giá hiệu
              năng máy tính.
            </li>
            <li className="font-bold">
              Tốc độ CPU được đo bằng Hz và số nhân (core) càng nhiều thì hiệu
              năng càng tốt.
            </li>
            <li className="font-bold">
              Dung lượng RAM được đo bằng Byte và càng lớn thì hiệu năng càng
              cao.
            </li>
          </ul>

          <p></p>
          <p></p>
          <div className="py-8">
            <Quiz data={data as Question[]} />
          </div>

          <div className="flex justify-end pr-8">
            <ToggleComplete
              subjectName={metadata.subjectName}
              title={metadata.title}
            />
          </div>
        </div>
      </div>
    </>
  );
}
