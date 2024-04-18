ALTER TABLE "history" ADD COLUMN "linkId" text NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "history" ADD CONSTRAINT "history_linkId_otherLinks_id_fk" FOREIGN KEY ("linkId") REFERENCES "otherLinks"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
