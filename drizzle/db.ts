import { drizzle } from "drizzle-orm/vercel-postgres";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

const db = drizzle(sql, {
  schema: { schema, logger: true },
});
export default db;
