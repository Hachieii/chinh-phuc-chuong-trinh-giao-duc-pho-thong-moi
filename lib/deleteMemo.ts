import { auth } from "@/auth";
import db from "@/drizzle/db";
import { memo } from "@/drizzle/schema";
import { and, eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export default async function deleteMemo(id: string) {
  const session = await auth();
  if (!session?.user) return redirect("/api/auth/signin");

  await db
    .delete(memo)
    .where(and(eq(memo.id, id), eq(memo.userId, session?.user?.id as string)));
}
