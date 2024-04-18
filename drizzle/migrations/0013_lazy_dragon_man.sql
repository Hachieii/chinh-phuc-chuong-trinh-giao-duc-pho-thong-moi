ALTER TABLE "history" DROP CONSTRAINT "history_linkId_unique";--> statement-breakpoint
ALTER TABLE "history" DROP CONSTRAINT "history_linkId_otherLinks_id_fk";
--> statement-breakpoint
ALTER TABLE "history" DROP COLUMN IF EXISTS "linkId";--> statement-breakpoint
ALTER TABLE "history" ADD CONSTRAINT "history_linkTo_unique" UNIQUE("linkTo");