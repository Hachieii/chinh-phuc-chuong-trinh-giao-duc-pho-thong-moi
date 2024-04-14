import { auth } from "@/auth";
import db from "@/drizzle/db";
import { lessonCompleted } from "@/drizzle/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function checkIfExist(subjectName: string, title: string) {
  const session = await auth();
  if (!session?.user) return false;

  // await db
  //   .insert(lessonCompleted)
  //   .values({
  //     userId: session?.user?.id as string,
  //     subject: subjectName,
  //     title: title,
  //   })
  //   .onConflictDoNothing();

  const isCompleted = await db
    .select()
    .from(lessonCompleted)
    .where(
      and(
        eq(lessonCompleted.userId, session?.user?.id as string),
        eq(lessonCompleted.subject, subjectName),
        eq(lessonCompleted.title, title)
      )
    )
    .limit(1);

  // console.log({ isCompleted, subjectName, title });

  return isCompleted.length > 0;
}
