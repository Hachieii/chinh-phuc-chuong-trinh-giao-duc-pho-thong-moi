import { auth } from "@/auth";
import updateCompletedLesson from "@/lib/updateCompletedLesson";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";
import ToggleMessage from "./message";

export default async function ToggleComplete({
  subjectName,
  title,
}: {
  subjectName: string;
  title: string;
}) {
  const session = await auth();
  const isLogin = !!session?.user;

  if (!isLogin) return await redirect("/api/auth/signin");

  return (
    <>
      <form
        action={async () => {
          "use server";
          await updateCompletedLesson(subjectName, title);
          redirect(`/thu-vien/${subjectName}`);
        }}
      >
        <Button type="submit">Hoàn thành</Button>
        <ToggleMessage message="Tạo ghi nhớ thành công" />;
      </form>
    </>
  );
}
