import { auth } from "@/auth";
import db from "@/drizzle/db";
import { memo } from "@/drizzle/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function updateState(
  subject: string,
  title: string,
  newState: string
) {
  const session = await auth();
  if (!session?.user) return redirect("/api/auth/signin");

  await db
    .update(memo)
    .set({ state: newState })
    .where(
      and(
        eq(memo.subject, subject),
        eq(memo.title, title),
        eq(memo.userId, session?.user?.id as string)
      )
    );

  redirect(`/dashboard/${subject}`);
}
