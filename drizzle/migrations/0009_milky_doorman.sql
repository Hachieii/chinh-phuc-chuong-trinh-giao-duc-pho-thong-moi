ALTER TABLE "history" ADD COLUMN "createdAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "history" ADD CONSTRAINT "history_linkId_unique" UNIQUE("linkId");