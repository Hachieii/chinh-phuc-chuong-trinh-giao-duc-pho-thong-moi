import { auth } from "@/auth";
import db from "@/drizzle/db";
import { memo } from "@/drizzle/schema";
import { redirect } from "next/navigation";

export default async function addNewMemo(
  subjectName: string,
  title: string,
  context: string
) {
  const session = await auth();
  if (!session?.user) return redirect("/api/auth/signin");

  await db
    .insert(memo)
    .values({
      userId: session?.user?.id as string,
      subject: subjectName,
      title: title,
      context: context,
    })
    .onConflictDoNothing();
}
