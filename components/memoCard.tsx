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
  state,
}: {
  id: string;
  subject: string;
  title: string;
  context: string;
  createdAt: Date;
  haveFilter: boolean;
  state: string;
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
                        redirect(`/dashboard/${subject}`);
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
                  {state != "bad" && (
                    <AlertDialogAction
                      type="submit"
                      className="bg-accent text-foreground hover:text-background"
                    >
                      Mới học
                    </AlertDialogAction>
                  )}
                  {state == "bad" && (
                    <AlertDialogAction type="submit" className="">
                      <div className="">Mới học</div>
                    </AlertDialogAction>
                  )}
                </form>

                <form
                  action={async () => {
                    "use server";
                    await updateState(subject, title, "hard");
                  }}
                >
                  {state != "hard" && (
                    <AlertDialogAction
                      type="submit"
                      className="bg-accent text-foreground hover:text-background"
                    >
                      Cần học lại
                    </AlertDialogAction>
                  )}
                  {state == "hard" && (
                    <AlertDialogAction type="submit" className="">
                      <div className="">Cần học lại</div>
                    </AlertDialogAction>
                  )}
                </form>

                <form
                  action={async () => {
                    "use server";
                    await updateState(subject, title, "good");
                  }}
                >
                  {state != "good" && (
                    <AlertDialogAction
                      type="submit"
                      className="bg-accent text-foreground hover:text-background"
                    >
                      Tốt
                    </AlertDialogAction>
                  )}
                  {state == "good" && (
                    <AlertDialogAction type="submit" className="">
                      <div className="">Tốt</div>
                    </AlertDialogAction>
                  )}
                </form>

                <form
                  action={async () => {
                    "use server";
                    await updateState(subject, title, "easy");
                  }}
                >
                  {state != "easy" && (
                    <AlertDialogAction
                      type="submit"
                      className="bg-accent text-foreground hover:text-background"
                    >
                      Dễ
                    </AlertDialogAction>
                  )}
                  {state == "easy" && (
                    <AlertDialogAction type="submit" className="">
                      <div className="">Dễ</div>
                    </AlertDialogAction>
                  )}
                </form>
                <AlertDialogCancel>Hủy</AlertDialogCancel>
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
