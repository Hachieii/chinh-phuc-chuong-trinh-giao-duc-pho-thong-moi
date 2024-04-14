import updateCompletedLesson from "@/lib/updateCompletedLesson";
import frontmatter from "../frontmatter";
import { redirect } from "next/navigation";

export default async function Page() {
  await updateCompletedLesson(frontmatter.subject, frontmatter.title);
  await redirect("/thu-vien/toan");
}
