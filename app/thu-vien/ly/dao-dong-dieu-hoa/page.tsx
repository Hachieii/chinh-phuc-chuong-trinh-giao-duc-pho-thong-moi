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
  subjectName: "ly",
  title: "Dao động điều hòa",
};

const data = [
  {
    quesTitle:
      "Một chất điểm dao động điều hoà có quỹ đạo là một đoạn thẳng dài 10 cm. Biên độ dao động của chất điểm là ",
    ans1: ["A. 5 cm", true],
    ans2: ["B. -5 cm", false],
    ans3: ["C. 10 cm", false],
    ans4: ["D. -10 cm", false],
    reason: "Quỹ đạo chuyển động của vật dao động điều hòa: L = 2A -> A = 5cm",
  },
  {
    quesTitle:
      "Một chất điểm dao động điều hoà trong 10 dao động toàn phần đi được quãng đường dài 120 cm. Quỹ đạo của dao động có chiều dài là ",
    ans1: ["A. 6 cm", true],
    ans2: ["B. 12 cm", false],
    ans3: ["C. 3 cm", false],
    ans4: ["D. 9 cm", false],
    reason:
      "Quãng đường vật đi được trong 10 dao động toàn phần là: S=10.4A⇒120=40A⇒A=3(cm) -> Chiều dài quỹ đạo dao động là: L=2A=2.3=6(cm) ",
  },
  {
    quesTitle:
      "Một chất điểm dao động điều hòa có phương trình li độ theo thời gian là x = 6cos(10πt + π/3)(cm). Li độ của vật khi dao động khi pha dao động bằng -π/3 là",
    ans1: ["A. 3 cm", true],
    ans2: ["B. -3 cm", false],
    ans3: ["C. 4,24 cm", false],
    ans4: ["D. -4,24 cm", false],
    reason:
      "Thay pha dao động bằng -π/3 vào phương trình dao động ta có: x = 6cos(-π/3) = 3(cm)",
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
          <h1>Dao Động Điều Hòa</h1>
          <p></p>
          <p></p>
          <h2>I. Những đặc điểm của dao động cơ</h2>
          <p></p>
          <p></p>
          <Important subjectName="ly" title="Dao động cơ">
            Vật chuyển động quanh vị trí cân bằng gọi là dao động cơ
          </Important>
          <p></p>
          <ul>
            <li>
              <h4 className="italic font-bold">
                Dao động cơ có thể tuần hoàn hoặc không tuần hoàn
              </h4>
            </li>
          </ul>
          <p></p>
          <Important subjectName="ly" title="Dao động điều hòa">
            Tùy theo vật hay hệ vật dao động điều hòa có thể có mức độ phức tạp
            khác nhau. Dao động đơn giản nhất là dao động điều hòa
          </Important>
          <p></p>
          <p></p>
          <h3>1. Đồ thị của dao động điều hòa</h3>
          <Image
            src="/ly/bai1/Picture1.png"
            alt="Đồ thị biểu diễn li độ x"
            width={324}
            height={156}
          />
          <p></p>
          <p></p>
          <Important subjectName="ly" title="Đồ thị của dao động điều hòa">
            Đồ thị của dao động điều hòa là đường cong có dạng hình sin, cho
            biết vị trí của vật trên trục x tại những thời điểm khác nhau
          </Important>
          <p></p>
          <p></p>
          <h3>2. Phương trình dao động điều hòa</h3>
          <Important subjectName="ly" title="Phương trình dao động điều hòa">
            x = Acos(ωt + φ)
          </Important>
          <p></p>
          <p>Trong đó:</p>

          <ul>
            <li>x: li độ của dao động</li>
            <li>A: biên độ dao động (A{`>`}0)</li>
            <li>ω: tần số góc của dao động (đơn vị: rad/s)</li>
            <li>φ: pha ban đầu của dao động</li>
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
