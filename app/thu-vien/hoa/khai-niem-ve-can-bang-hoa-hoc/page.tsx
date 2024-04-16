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
  subjectName: "hoa",
  title: "Khái niệm về cân bằng hoá học",
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
          <h1>Khái niệm về cân bằng hoá học</h1>
          <p></p>
          <p></p>

          <h2>I. Khái niệm phản ứng thuận nghịch và trạng thái cân bằng</h2>
          <Important subjectName="hoa" title="Khái niệm phản ứng thuận nghịch">
            Phản ứng thuận nghịch là phản ứng trong đó ở cùng điều kiện, xảy ra
            đồng thời sựu chuyển chất phản ứng thành chất sản phẩm và sự chuyển
            chất sản phẩm thành chất phản ứng
          </Important>
          <Important subjectName="hoa" title="Khái niệm trạng thái cân bằng">
            Trạng thái cân bằng của phản ứng thuận nghịch là trạng thái mà tốc
            độ phản ứng thuận bằng tốc độ phản ứng nghịch
          </Important>
          <p></p>
          <p></p>

          <h2>II. Biểu thức hằng số cân bằng và ý nghĩa</h2>
          <p></p>
          <p></p>
          <h3>1. Biểu thức hằng số cân bằng</h3>
          <p></p>
          <p></p>
          <ul>
            <li>
              Xét phản ứng thuận nghịch tổng quát: aA + bB ={`>`} cC + dD.
            </li>
            <li className="font-bold">
              Ở trạng thái cân bằng, hằng số cân bằng (KC) được xác định theo
              biểu thức:
            </li>
          </ul>
          <div className="flex justify-center">
            <Image
              src="/hoa/bai1/Picture1.png"
              alt="latex"
              width={127}
              height={45}
            />
          </div>
          <p className="font-bold">Trong đó:</p>
          <ul>
            <li>
              [A], [B], [C], [D] là nồng độ mol của các chất A, B, C, D ở trạng
              thái cân bằng
            </li>
            <li>
              a, b, c, d là hệ số tỉ lượng của các chất trong phương trình hóa
              học của phản ứng.
            </li>
          </ul>

          <p></p>
          <p></p>

          <h3>2. Ý nghĩa của biểu thức hằng số cân bằng</h3>
          <div className="flex justify-center">
            <Image
              src="/hoa/bai1/Picture1.png"
              alt="latex"
              width={127}
              height={45}
            />
          </div>
          <ul>
            <li className="font-bold">
              Hằng số cân bằng KC phụ thuộc vào bản chất của phản ứng và nhiệt
              độ
            </li>
            <li className="font-bold">
              KC càng lớn thì phản ứng thuận càng chiếm ưu thế và ngược lại
            </li>
          </ul>

          <p></p>
          <p></p>

          <h2>
            III. Ảnh hưởng của nhiệt độ, nồng độ và áp suất đến cân bằng hóa học
          </h2>
          <p></p>
          <p></p>
          <h3>1. Ảnh hưởng của nhiệt độ tới cân bằng hóa học</h3>
          <Important
            subjectName="hoa"
            title="Ảnh hưởng của nhiệt độ tới cân bằng hóa học"
          >
            Khi nhiệt độ tăng, cân bằng chuyển dịch theo chiều làm giảm nhiệt
            độ, tức là chiều phản ứng thu nhiệt, nghĩa là chiều làm giảm tác
            động của tăng nhiệt độ và ngược lại
          </Important>

          <p></p>
          <p></p>

          <h3>2. Nguyên lí chuyển dịch cân bằng Le Chatelier</h3>
          <p></p>
          <p></p>

          <ul>
            <li className="font-bold">
              Khi tăng nồng độ một chất trong phản ứng thì cân bằng hóa học bị
              phá vỡ và chuyển dịch theo chiều làm giảm nồng độ của chất đó và
              ngược lại
            </li>
            <li className="font-bold">
              Khi tăng áp suất chung của hệ, thì cân bằng chuyển dịch theo chiều
              làm giảm áp suất, tức là chiều làm giảm số mol khí và ngược lại
            </li>
          </ul>

          <Important
            subjectName="hoa"
            title="Nguyên lí chuyển dịch cân bằng Le Chatelier"
          >
            Nguyên lí chuyển dịch cân bằng Le Chatelier: Một phản ứng thuận
            nghịch đang ở trạng thái cân bằng, khi chịu một tác động bên ngoài
            như biến đổi nồng độ, nhiệt độ, áp suất thì cân bằng sẽ chuyển dịch
            theo chiều làm giảm tác động bên ngoài đó
          </Important>

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
