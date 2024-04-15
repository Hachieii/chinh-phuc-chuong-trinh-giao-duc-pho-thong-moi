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
    questitle: "ques 1",
    ans1: ["ans 1", false],
    ans2: ["ans 2", false],
    ans3: ["ans 3", false],
    ans4: ["ans 4", true],
    resson: "yes",
  },
  {
    questitle: "ques 2",
    ans1: ["ans 1", false],
    ans2: ["ans 2", true],
    ans3: ["ans 3", false],
    ans4: ["ans 4", false],
    resson: "not yes",
  },
  {
    questitle: "ques 3",
    ans1: ["ans 1", true],
    ans2: ["ans 2", false],
    ans3: ["ans 3", false],
    ans4: ["ans 4", false],
    resson: "!yes",
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

      <div className="container prose dark:prose-invert pt-16">
        <MDXRemote
          source={md}
          components={{ ModeToggle, ToggleComplete, Important, DangerContent }}
        />
        <Quiz data={data as Question[]} />
      </div>
    </>
  );
}
