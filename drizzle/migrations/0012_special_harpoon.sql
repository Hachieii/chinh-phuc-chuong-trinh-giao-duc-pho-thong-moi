ALTER TABLE "history" ALTER COLUMN "linkId" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "history" ALTER COLUMN "linkId" DROP NOT NULL;