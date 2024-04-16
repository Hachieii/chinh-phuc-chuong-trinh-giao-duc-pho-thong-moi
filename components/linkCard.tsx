import { SquareArrowOutUpRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function LinkCard({
  linkTo,
  title,
}: {
  linkTo: string;
  title: string;
}) {
  return (
    <>
      <a href={linkTo}>
        <Card className="hover:bg-accent flex flex-row justify-between">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{linkTo}</CardDescription>
          </CardHeader>
        </Card>
      </a>
    </>
  );
}
