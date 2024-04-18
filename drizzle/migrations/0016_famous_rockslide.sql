ALTER TABLE "otherLinks" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "otherLinks" ADD CONSTRAINT "otherLinks_id_unique" UNIQUE("id");