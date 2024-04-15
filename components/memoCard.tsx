import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";

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

import { Trash2 } from "lucide-react";
import deleteMemo from "@/lib/deleteMemo";
import { redirect } from "next/navigation";

export default function MemoCard({
  id,
  subject,
  title,
  context,
  createdAt,
}: {
  id: string;
  subject: string;
  title: string;
  context: string;
  createdAt: Date;
}) {
  const subjectName = {
    toan: "Toán",
    ly: "Lý",
    hoa: "Hóa",
    tin: "Tin",
  };

  return (
    <>
      <Card>
        <div className="md:flex justify-between">
          <CardHeader>
            <div className="pt-20 space-y-4">
              <CardTitle>{title}</CardTitle>
              <CardDescription>
                {subjectName[subject as keyof object]}
              </CardDescription>
              <CardDescription>{createdAt.toDateString()}</CardDescription>
            </div>
          </CardHeader>
          <CardContent className="max-w-3xl py-16 text-xl">
            {context}
          </CardContent>
        </div>

        <CardFooter className="flex justify-end pr-12">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="bg-destructive">
                <Trash2 />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Bạn có thực sự chắc chứ?</AlertDialogTitle>
                <AlertDialogDescription>
                  Hành động này không thể hoàn tác.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <form
                  action={async () => {
                    "use server";
                    await deleteMemo(id);
                    redirect("/dashboard");
                  }}
                >
                  <AlertDialogCancel>Hủy</AlertDialogCancel>
                  <AlertDialogAction type="submit">Xác nhận</AlertDialogAction>
                </form>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </CardFooter>
      </Card>
    </>
  );
}
