ALTER TABLE "history" ADD COLUMN "linkId" integer NOT NULL;--> statement-breakpoint
ALTER TABLE "otherLinks" ADD COLUMN "id" serial NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "history" ADD CONSTRAINT "history_linkId_otherLinks_id_fk" FOREIGN KEY ("linkId") REFERENCES "otherLinks"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
