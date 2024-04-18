ALTER TABLE "otherLinks" DROP COLUMN IF EXISTS "id";--> statement-breakpoint
ALTER TABLE "otherLinks" ADD CONSTRAINT "otherLinks_linkTo_unique" UNIQUE("linkTo");