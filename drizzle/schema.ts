import { Many, relations } from "drizzle-orm";
import {
  timestamp,
  pgTable,
  text,
  primaryKey,
  integer,
  varchar,
  uuid,
  unique,
} from "drizzle-orm/pg-core";
import type { AdapterAccount } from "next-auth/adapters";

export const users = pgTable("user", {
  id: text("id").notNull().primaryKey(),
  name: text("name"),
  email: text("email").notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const lessonCompleted = pgTable(
  "lessonCompleted",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    title: varchar("title", { length: 256 }).notNull(),
    subject: varchar("subject", { length: 256 }).notNull(),
    completedAt: timestamp("completedAt").defaultNow(),
  },
  (t) => ({
    unq: unique().on(t.userId, t.title),
  })
);

export const memo = pgTable("memo", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  subject: varchar("subject", { length: 256 }).notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  context: text("context"),
  createdAt: timestamp("createdAt").defaultNow(),
});

export const usersRelations = relations(users, ({ many }) => ({
  lessonCompleted: many(lessonCompleted),
  memo: many(memo),
}));

export const lessonRelations = relations(lessonCompleted, ({ one }) => ({
  users: one(users, {
    fields: [lessonCompleted.userId],
    references: [users.id],
  }),
}));

export const memoRelations = relations(memo, ({ one }) => ({
  users: one(users, {
    fields: [memo.userId],
    references: [users.id],
  }),
}));

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccount["type"]>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").notNull().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = pgTable(
  "verificationToken",
  {
    identifier: text("identifier").notNull(),
    token: text("token").notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey({ columns: [vt.identifier, vt.token] }),
  })
);
