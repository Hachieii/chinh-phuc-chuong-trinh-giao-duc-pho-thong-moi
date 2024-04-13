import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Check } from "lucide-react";
import Link from "next/link";

export default function LessonCard({
  linkTo,
  nthLesson,
  title,
  context,
  isDone,
}: {
  linkTo: string;
  nthLesson: string;
  title: string;
  context: string;
  isDone: boolean;
}) {
  return (
    <Link href={linkTo}>
      <Card
        x-chunk="dashboard-01-chunk-0"
        className="hover:bg-primary-foreground h-full flex items-stretch"
      >
        <CardHeader>
          <CardTitle className="flex flex-row items-center space-y-0 pb-2 gap-4">
            <Avatar>
              <AvatarFallback className={isDone ? "bg-green-400" : ""}>
                {!isDone && nthLesson}
                {isDone && <Check className="text-background" />}
              </AvatarFallback>
            </Avatar>
            {title}
          </CardTitle>
          <CardDescription>{context}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
