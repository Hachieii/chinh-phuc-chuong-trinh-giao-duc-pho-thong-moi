"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { CornerUpLeft } from "lucide-react";

export default function GoBack() {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      size="icon"
      type="button"
      onClick={() => router.back()}
    >
      <CornerUpLeft />
    </Button>
  );
}
