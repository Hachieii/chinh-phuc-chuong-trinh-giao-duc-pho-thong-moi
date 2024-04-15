import { auth } from "@/auth";
import updateCompletedLesson from "@/lib/updateCompletedLesson";
import { redirect } from "next/navigation";
import { Button } from "./ui/button";

export default async function ToggleComplete({
  subjectName,
  title,
}: {
  subjectName: string;
  title: string;
}) {
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
      </form>
    </>
  );
}
