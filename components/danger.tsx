import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CircleAlert } from "lucide-react";
import { Button } from "./ui/button";

export default function DangerContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Card className="bg-destructive">
        <CardHeader>
          <CardTitle className="flex">
            <CircleAlert />
            <div className="mx-3">Chú ý!</div>
          </CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
}
