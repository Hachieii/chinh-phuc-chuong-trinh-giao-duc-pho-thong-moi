import { Card, CardContent, CardFooter } from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Button } from "./ui/button";

import { Save } from "lucide-react";
import addNewMemo from "@/lib/addNewMemo";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

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
      <div className="py-8">
        <Card className="border-solid py-6">
          <CardContent className="text-[20px]">{children}</CardContent>
          <CardFooter className="flex justify-end">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AlertDialog>
                    <AlertDialogTrigger>
                      <Button>
                        <Save />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>{title}</AlertDialogTitle>
                        <AlertDialogDescription>
                          {children}
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Hủy</AlertDialogCancel>
                        <form
                          action={async () => {
                            "use server";
                            await addNewMemo(
                              subjectName,
                              title,
                              children as string
                            );
                          }}
                        >
                          <AlertDialogAction type="submit">
                            Lưu
                          </AlertDialogAction>
                        </form>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </TooltipTrigger>
                <TooltipContent>Tạo thẻ nhớ</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
