import { auth } from "@/auth";
import db from "@/drizzle/db";
import { lessonCompleted } from "@/drizzle/schema";
import { redirect } from "next/navigation";

export default async function updateCompletedLesson(
  subjectName: string,
  title: string
) {
  const session = await auth();
  if (!session?.user) return redirect("/api/auth/signin");

  await db
    .insert(lessonCompleted)
    .values({
      userId: session?.user?.id as string,
      subject: subjectName,
      title: title,
    })
    .onConflictDoNothing();
}
