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
import { toast } from "sonner";
import ToggleMessage from "./message";

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
                      <AlertDialog>
                        <AlertDialogTrigger>
                          <Save />
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>{title}</AlertDialogTitle>
                            <AlertDialogDescription>
                              {children}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogAction>Xác nhận</AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Thêm vào mục lưu trữ</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </form>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
