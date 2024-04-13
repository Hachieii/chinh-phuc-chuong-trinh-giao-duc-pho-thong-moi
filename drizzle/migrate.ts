import { sql } from "@vercel/postgres";
import { drizzle } from "drizzle-orm/vercel-postgres";
import { migrate } from "drizzle-orm/postgres-js/migrator";

const connectionString = process.env.POSTGRES_URL as string;
export const db = drizzle(sql);
async function main() {
  await migrate(db, {
    migrationsFolder: "drizzle/migrations",
    migrationsSchema: "drizzle/schema.ts",
  });
}
main();
