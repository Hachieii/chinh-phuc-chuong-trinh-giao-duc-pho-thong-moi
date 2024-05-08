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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import updateState from "@/lib/updateMemoState";

export default function MemoCard({
  id,
  subject,
  title,
  context,
  createdAt,
  haveFilter,
}: {
  id: string;
  subject: string;
  title: string;
  context: string;
  createdAt: Date;
  haveFilter: boolean;
}) {
  const subjectName = {
    toan: "Toán",
    ly: "Lý",
    hoa: "Hóa",
    tin: "Tin",
  };

  return (
    <>
      <AlertDialog>
        <Card>
          <div className="flex justify-between">
            <CardHeader className="w-full">
              <AlertDialogTrigger>
                <Card className="hover:bg-accent min-w-full">
                  <CardHeader className="">
                    <div className="flex flex-col py-6 gap-2">
                      <CardTitle>{title}</CardTitle>
                      {!haveFilter && (
                        <CardDescription>
                          {subjectName[subject as keyof object]}
                        </CardDescription>
                      )}
                      <CardDescription>
                        {createdAt.toDateString()}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              </AlertDialogTrigger>
            </CardHeader>

            <CardFooter className="flex justify-end pr-12">
              <AlertDialog>
                <AlertDialogTrigger>
                  <Button className="bg-destructive">
                    <Trash2 />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Bạn có thực sự chắc chứ?
                    </AlertDialogTitle>
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
                      <AlertDialogAction type="submit">
                        Xác nhận
                      </AlertDialogAction>
                    </form>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </CardFooter>
          </div>

          <AlertDialogContent className="scale-125 sm:max-w-[425px]">
            <AlertDialogHeader>
              <AlertDialogTitle className="pb-2">{title}</AlertDialogTitle>
              <AlertDialogDescription>{context}</AlertDialogDescription>
            </AlertDialogHeader>
            <div className="flex justify-center pt-8">
              <AlertDialogFooter className="">
                <form
                  action={async () => {
                    "use server";
                    await updateState(subject, title, "bad");
                  }}
                >
                  <AlertDialogAction type="submit">Mới học</AlertDialogAction>
                </form>

                <form
                  action={async () => {
                    "use server";
                    await updateState(subject, title, "hard");
                  }}
                >
                  <AlertDialogAction type="submit">
                    Cần học lại
                  </AlertDialogAction>
                </form>

                <form
                  action={async () => {
                    "use server";
                    await updateState(subject, title, "good");
                  }}
                >
                  <AlertDialogAction type="submit">Tốt</AlertDialogAction>
                </form>

                <form
                  action={async () => {
                    "use server";
                    await updateState(subject, title, "easy");
                  }}
                >
                  <AlertDialogAction type="submit">Dễ</AlertDialogAction>
                </form>
              </AlertDialogFooter>
            </div>
          </AlertDialogContent>

          {/* <CardFooter className="flex justify-end pr-12">
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
                    <AlertDialogAction type="submit">
                      Xác nhận
                    </AlertDialogAction>
                  </form>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardFooter> */}
        </Card>
      </AlertDialog>
    </>
  );
}
