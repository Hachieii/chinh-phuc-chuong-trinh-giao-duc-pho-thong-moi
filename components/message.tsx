"use client";
import { toast } from "sonner";

export default function ToggleMessage({ message }: { message: string }) {
  toast.success(message);
  return <></>;
}
