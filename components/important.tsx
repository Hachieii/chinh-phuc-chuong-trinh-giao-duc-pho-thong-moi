import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "./ui/button";

import { Save } from "lucide-react";
import addNewMemo from "@/lib/addNewMemo";

export default function Important({
  children,
  title,
  subjectName,
}: {
  children: React.ReactNode;
  title: string;
  subjectName: string;
}) {
  return (
    <>
      <Card className="border-solid py-6">
        <CardContent className="text-[20px]">{children}</CardContent>
        <CardFooter className="flex justify-end">
          <form
            action={async () => {
              "use server";
              await addNewMemo(subjectName, title, children as string);
            }}
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button type="submit">
                    <Save />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Thêm vào mục lưu trữ</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </form>
        </CardFooter>
      </Card>
    </>
  );
}
