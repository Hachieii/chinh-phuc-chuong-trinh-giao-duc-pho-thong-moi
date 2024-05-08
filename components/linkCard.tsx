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

function textShrink(s: string) {
  const mxSize = 60;
  if (s.length <= mxSize) return s;
  return s.slice(0, mxSize - 1) + "...";
}

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
        <Card className="hover:bg-accent flex flex-row">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{textShrink(linkTo)}</CardDescription>
          </CardHeader>
        </Card>
      </a>
    </>
  );
}
