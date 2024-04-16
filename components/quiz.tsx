"use client";
import * as React from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { type CarouselApi } from "@/components/ui/carousel";

type Question = {
  quesTitle: string;
  ans1: [string, boolean];
  ans2: [string, boolean];
  ans3: [string, boolean];
  ans4: [string, boolean];
  reason: string;
};

function Cards({ data }: { data: Question[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {data.map((question, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardHeader className="flex flex-col gap-6">
                    <CardTitle className="text-4xl font-bold">
                      {question.quesTitle}
                    </CardTitle>

                    <CardDescription className="flex flex-col gap-6">
                      <span className="text-xl font-semibold">
                        {question.ans1[0]}
                      </span>
                      <Separator />
                      <span className="text-xl font-semibold">
                        {question.ans2[0]}
                      </span>
                      <Separator />
                      <span className="text-xl font-semibold">
                        {question.ans3[0]}
                      </span>
                      <Separator />
                      <span className="text-xl font-semibold">
                        {question.ans4[0]}
                      </span>
                    </CardDescription>
                  </CardHeader>

                  <div className="flex justify-end p-6">
                    <AlertDialog>
                      <AlertDialogTrigger>
                        <Button variant="outline">Check đáp án</Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>Đáp án:</AlertDialogTitle>
                          <AlertDialogDescription className="space-y-6">
                            <p>
                              {question.ans1[1] ? question.ans1[0] + " " : ""}
                              {question.ans2[1] ? question.ans2[0] + " " : ""}
                              {question.ans3[1] ? question.ans3[0] + " " : ""}
                              {question.ans4[1] ? question.ans4[0] + " " : ""}
                            </p>

                            <p>{question.reason}</p>
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogAction>Tiếp tục</AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="" />
      </Carousel>
      <div className="py-2 text-center text-sm text-muted-foreground">
        Câu thứ {current} trong tổng số {count}
      </div>
    </>
  );
}

export default function Quiz({ data }: { data: Question[] }) {
  const [quizStarted, setQuizStarted] = React.useState(false);

  return (
    <>
      {!quizStarted ? (
        <>
          <h1 className="text-4xl font-bold text-center">
            Đã đến lúc kiểm tra những gì bạn đã học.
          </h1>
          <div className="flex flex-wrap justify-center pt-16 gap-16">
            <Button
              className="bg-primary scale-125 font-semibold"
              onClick={() => setQuizStarted(true)}
            >
              Bắt đầu
            </Button>
          </div>
        </>
      ) : (
        <Cards data={data} />
      )}
    </>
  );
}
