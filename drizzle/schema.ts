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
  serial,
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

export const otherLinks = pgTable("otherLinks", {
  id: text("id").unique().primaryKey(),
  title: varchar("title", { length: 256 }).notNull(),
  linkTo: text("linkTo").notNull().unique(),
  badge: varchar("badge", { length: 256 }).notNull(),
  subject: varchar("subject", { length: 256 }).notNull(),
  topic: varchar("topic", { length: 256 }),
});

export const history = pgTable("history", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  linkId: text("linkId")
    .notNull()
    .unique()
    .references(() => otherLinks.id),
  linkTo: text("linkTo")
    .notNull()
    .unique()
    .references(() => otherLinks.linkTo, { onDelete: "cascade" }),
  title: varchar("title")
    .notNull()
    .references(() => otherLinks.title, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const otherLinksRelations = relations(otherLinks, ({ many }) => ({
  history: many(history),
}));

export const historyRelations = relations(history, ({ one }) => ({
  users: one(users, {
    fields: [history.userId],
    references: [users.id],
  }),
  otherLinks: one(otherLinks, {
    fields: [history.linkId],
    references: [otherLinks.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  lessonCompleted: many(lessonCompleted),
  memo: many(memo),
  history: many(history),
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
