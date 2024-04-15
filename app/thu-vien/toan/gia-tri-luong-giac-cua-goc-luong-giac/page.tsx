import { auth } from "@/auth";
import Important from "@/components/important";
import ListSubjects from "@/components/listsubjects";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";
import { ModeToggle } from "@/components/theme-toggle";
import ToggleComplete from "@/components/toggleComplete";
import { MDXRemote } from "next-mdx-remote/rsc";
import DangerContent from "@/components/danger";
import Quiz from "@/components/quiz";
import Image from "next/image";
// import gia_tri_luong_giac_cua_goc_luong_giac from "@/contents/toan";

const metadata = {
  subjectName: "toan",
  title: "Giá trị lượng giác của góc lượng giác",
};

const md = `
# Hello

<Important title="Tiêu đề" subjectName="${metadata.subjectName}"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </Important>
<DangerContent>Không có gì chỉ là cái này dễ nhầm thì cho đỏ cho nó đặc biệt</DangerContent>
<ToggleComplete subjectName="${metadata.subjectName}" title="${metadata.title}" />
`;

const data = [
  {
    questitle: "Số đo theo đơn vị radian của góc 315° là",
    ans1: ["A. 7π/2", false],
    ans2: ["B. 7π/4", true],
    ans3: ["C. 2π/7", false],
    ans4: ["D. 4π/7", false],
    resson: "Áp dụng công thức x° = x * π/180 rad",
  },
  {
    questitle:
      "Cung tròn có số đo là 5π/4. Hãy chọn số đo độ của cung tròn đó trong các cung tròn sau đây",
    ans1: ["A. 5°", false],
    ans2: ["B. 15°", false],
    ans3: ["C. 172°", false],
    ans4: ["D. 225°", true],
    resson: "Áp dụng công thức x rad = x * (180/π)°",
  },
  {
    questitle:
      "Góc 63°48' đổi sang radian có giá trị gần nhất với giá trị nào sau đây (lấy π = 3.1416)",
    ans1: ["A. 1.113 rad", false],
    ans2: ["B. 1.108 rad", false],
    ans3: ["C. 1.107 rad", false],
    ans4: ["D. 1.114 rad", true],
    resson:
      "có 63°48' = 63° + (48')° = 63° + (48/60)° = 63.8° -> Áp dụng công thức x° = x * (π/180) rad",
  },
];

type Question = {
  questitle: string;
  ans1: [string, boolean];
  ans2: [string, boolean];
  ans3: [string, boolean];
  ans4: [string, boolean];
  resson: string;
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
        {/* <div className="container prose dark:prose-invert pt-16"> */}
        <div className="prose dark:prose-invert pt-16">
          <h1 className="font-bold">
            Lý thuyết giá trị lượng giác của góc lượng giác
          </h1>

          <h2 className="pt-8">1. Góc lượng giác</h2>
          <h3 className="pt-4">
            A. Khái niệm góc lượng giác và số đo của góc lượng giác
          </h3>

          <Important
            title="Khái niệm góc lượng giác và số đo của góc lượng giác"
            subjectName="toan"
          >
            Trong mặt phẳng, cho 2 tia Ou, Ov. Xét tia Om cùng nằm tròn mặt
            phẳng này. Nếu tia Om quay quanh điểm O, theo một chiều nhất định từ
            Ou đến Ov, thì ta nói nó quét một góc lượng giác với tia đầu Ou và
            tia cuối Ov.
          </Important>

          <ul>
            <li>Kí hiệu: (Ou, Ov).</li>
            <li>
              Số đo của góc lượng giác có tia đầu Ou và tia cuối Ov kí hiệu là
              sđ(Ou, Ov).
            </li>
          </ul>

          <h3 className="pt-4">B. Hệ thức chasles</h3>
          <Important title="Hệ thức chasles" subjectName="toan">
            Với 3 tia Ou, Ov, Ow bất kì ta có: sđ(Ou, Ov) + sđ(Ov, Ow) = sđ(Ou,
            Ow) + k360°
          </Important>

          <h2 className="pt-8">2. Đơn vị đo góc và độ dài cung tròn</h2>
          <h3 className="pt-4">A. Đơn vị đo góc và cung tròn</h3>
          <Important title="Đơn vị đo góc và cung tròn" subjectName="toan">
            Đơn vị độ: 1° = 60', 1' = 60"; Đơn vị radian: 1° = π/180 rad, 1rad =
            (180/π)°
          </Important>

          <DangerContent>
            <ul>
              <li>
                Khi viết số đo của một góc theo đơn vị rađian, người ta thường
                không viết chữ rad sau số đo. Chẳng hạn góc π/2 được hiểu là góc
                π/2 rad.
              </li>
            </ul>
          </DangerContent>

          <h3>Có thể bạn sẽ cần:</h3>
          <a href="https://vi.wikipedia.org/wiki/Radian#Chuyển_đổi_giữa_radian_và_gradian">
            Bảng chuyển đổi giữa độ và radian
          </a>

          <h3 className="font-bold">Ví dụ: </h3>
          <ul>
            <li>50° = 50. π/180 = 5π/18</li>
          </ul>

          <h3 className="pt-4">B. Độ dài cung tròn</h3>
          <Important title="Độ dài cung tròn" subjectName="toan">
            Một cung của đường tròn bán kính R và có số đo α rad thì có độ dài l
            = Rα.
          </Important>

          <h3 className="font-bold">Ví dụ: </h3>
          <ul>
            <li>
              Cung của đường tròn bán kính 2 cm và có số đo π/3 thì có độ dài l
              = 2π/3 (cm).
            </li>
          </ul>

          <h2 className="pt-8">3. Giá trị lượng giác của góc lượng giác</h2>
          <h3 className="pt-4">A. Đường tròn lượng giác</h3>
          <Important title="Đường tròn lượng giác" subjectName="toan">
            Đường tròn lượng giác là đường tròn có tâm tại gốc tọa độ, bán kính
            bằng 1, được định hướng và lấy điểm A(1; 0) làm điểm gốc của đường
            tròn.
          </Important>
          <ul>
            <li className="font-bold">
              Điểm trên đường tròn lượng giác biểu diễn góc lượng giác có số đo
              α (độ hoặc rađian) là điểm M trên đường tròn lượng giác sao cho sđ
              (OA, OM) = α.
            </li>
          </ul>

          <h3 className="pt-4">B. Các giá trị lượng giác của góc lượng giác</h3>
          <Important
            title="Các giá trị lượng giác của góc lượng giác"
            subjectName="toan"
          >
            – Hoành độ x của điểm M được gọi là côsin của α, kí hiệu là cos α.
            cosα = x.
          </Important>

          <Important
            title="Các giá trị lượng giác của góc lượng giác"
            subjectName="toan"
          >
            – Tung độ y của điểm M được gọi là sin của α, kí hiệu là sin α. sinα
            = y.
          </Important>

          <Important
            title="Các giá trị lượng giác của góc lượng giác"
            subjectName="toan"
          >
            – Nếu cosα ≠ 0, tỉ số sin α / cos α được gọi là tang của α, kí hiệu
            là tanα. tan α = sin α / cos α = y / x ( x ≠ 0 ) .
          </Important>

          <Important
            title="Các giá trị lượng giác của góc lượng giác"
            subjectName="toan"
          >
            – Nếu sinα ≠ 0, tỉ số cos α / sin α được gọi là côtang của α, kí
            hiệu là cotα. cot α = cos α / sin α = x / y ( y ≠ 0 ) .
          </Important>

          <ul>
            <li>
              Các giá trị cosα, sinα, tanα, cotα được gọi là giá trị lượng giác
              của α.
            </li>
          </ul>

          <h3>Thông tin thêm suy ra từ định nghĩa:</h3>
          <ul>
            <li>Ta còn gọi trục tung là trục sin, trục hoành là trục côsin</li>
            <li>–1 ≤ sinα ≤ 1; –1 ≤ cosα ≤ 1; (giả sử biểu thức xác định)</li>
            <li>
              sin (α + k2ℼ) = sinα; cos (α + k2ℼ) = cosα (k ∈ ℤ). (giả sử biểu
              thức xác định)
            </li>
            <li>tanα xác định khi α ≠ π/2 + kπ ( k ∈ Z )</li>
            <li>cotα xác định khi α ≠ kπ ( k ∈ Z ) .</li>
            <li>
              Dấu của các giá trị lượng giác của một góc lượng giác phụ thuộc
              vào vị trí điểm biểu diễn M trên đường tròn lượng giác:
            </li>
          </ul>

          <table className="table-fixed">
            <tr>
              <th>Giá trị lượng giác \ Góc phần tư</th>
              <th>I</th>
              <th>II</th>
              <th>III</th>
              <th>IV</th>
            </tr>
            <tr>
              <th>cosα</th>
              <th>+</th>
              <th>-</th>
              <th>-</th>
              <th>+</th>
            </tr>
            <tr>
              <th>sinα</th>
              <th>+</th>
              <th>+</th>
              <th>-</th>
              <th>-</th>
            </tr>
            <tr>
              <th>tanα</th>
              <th>+</th>
              <th>-</th>
              <th>+</th>
              <th>-</th>
            </tr>
            <tr>
              <th>cotα</th>
              <th>+</th>
              <th>-</th>
              <th>+</th>
              <th>-</th>
            </tr>
          </table>

          <h3 className="pt-4">C. Giá trị lượng giác của các góc đặc biệt</h3>

          <table className="table-fixed">
            <tr>
              <th rowSpan={2}>Góc α</th>
              <th>0</th>
              <th>π/6</th>
              <th>π/4</th>
              <th>π/3</th>
              <th>π/2</th>
            </tr>
            <tr>
              <th>0°</th>
              <th>30°</th>
              <th>45°</th>
              <th>60°</th>
              <th>90°</th>
            </tr>
            <tr>
              <th>sinα</th>
              <th>0</th>
              <th>1/2</th>
              <th>√2/2</th>
              <th>√3/2</th>
              <th>1</th>
            </tr>
            <tr>
              <th>cosα</th>
              <th>1</th>
              <th>√3/2</th>
              <th>√2/2</th>
              <th>1/2</th>
              <th>0</th>
            </tr>
            <tr>
              <th>tanα</th>
              <th>0</th>
              <th>√3/3</th>
              <th>1</th>
              <th>√3</th>
              <th>Không xác định</th>
            </tr>
            <tr>
              <th>cotα</th>
              <th>Không xác định</th>
              <th>√3</th>
              <th>1</th>
              <th>√3/3</th>
              <th>0</th>
            </tr>
          </table>

          <h2 className="pt-8">4. Quan hệ giữa các giá trị lượng giác</h2>
          <h3 className="pt-4">A. Các công thức lượng giác cơ bản</h3>

          <Important title="Các công thức lượng giác cơ bản" subjectName="toan">
            (sin^2 α) + (cos^2 α) = 1
          </Important>
          <Important title="Các công thức lượng giác cơ bản" subjectName="toan">
            1 + (tan^2 α) = 1 / (cos^2 α) (α ≠ π/2 + kπ , k ∈ Z)
          </Important>
          <Important title="Các công thức lượng giác cơ bản" subjectName="toan">
            1 + (cot^2 α) = 1 / (sin^2 α) (α ≠ kπ , k ∈ Z)
          </Important>
          <Important title="Các công thức lượng giác cơ bản" subjectName="toan">
            tanα . cotα = 1 (α ≠ kπ/2 , k ∈ Z )
          </Important>

          <h3 className="pt-4">
            B. Giá trị lượng giác của các góc có liên quan đặc biệt
          </h3>
          <h4 className="font-bold">Góc đối nhau (α cà -α)</h4>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc đối nhau)"
            subjectName="toan"
          >
            cos(–α) = cos α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc đối nhau)"
            subjectName="toan"
          >
            sin(–α) = – sin α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc đối nhau)"
            subjectName="toan"
          >
            tan(–α) = – tan α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc đối nhau)"
            subjectName="toan"
          >
            cot(–α) = – cot α
          </Important>

          <h4 className="font-bold">Góc bù nhau (α và π – α)</h4>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc bù nhau)"
            subjectName="toan"
          >
            sin(π – α) = sin α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc bù nhau)"
            subjectName="toan"
          >
            cos(π – α) = – cos α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc bù nhau)"
            subjectName="toan"
          >
            tan(π – α) = -tan α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc bù nhau)"
            subjectName="toan"
          >
            cot(π – α) = -cot α
          </Important>

          <h4 className="font-bold">Góc phụ nhau (α và π/2 − α)</h4>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc phụ nhau)"
            subjectName="toan"
          >
            sin(π/2 - α) = cos α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc phụ nhau)"
            subjectName="toan"
          >
            cos(π/2 - α) = sin α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc phụ nhau)"
            subjectName="toan"
          >
            tan(π/2 - α) = cot α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc phụ nhau)"
            subjectName="toan"
          >
            cot(π/2 - α) = tan α
          </Important>

          <h4 className="font-bold">Góc hơn kém π (α và π + α)</h4>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc hơn kém π)"
            subjectName="toan"
          >
            sin(π + α) = -sin α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc hơn kém π)"
            subjectName="toan"
          >
            cos(π + α) = -cos α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc hơn kém π)"
            subjectName="toan"
          >
            tan(π + α) = tan α
          </Important>
          <Important
            title="Giá trị lượng giác của các góc có liên quan đặc biệt (Góc hơn kém π)"
            subjectName="toan"
          >
            cot(π + α) = cot α
          </Important>

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
