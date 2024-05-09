import checkIfExist from "@/lib/checkIfExist";
import LessonCard from "./lessonCard";

export default async function ChapterList({
  subject,
  pref,
  nthChapter,
  title,
  lessonList,
}: {
  subject: string;
  pref: string;
  nthChapter: string;
  title: string;
  lessonList: {
    id: number;
    linkTo: string;
    nthLesson: string;
    title: string;
    context: string;
    isDone: boolean;
  }[];
}) {
  // lessonList.forEach(async (lesson) => {
  //   lesson.isDone = await checkIfExist(title, lesson.title);
  // });

  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-bold text-4xl py-16">
          {nthChapter != "#" && `${pref} ${nthChapter}: ${title}`}
          {nthChapter == "#" && `${title}`}
        </h2>
        <div className="flex flex-wrap gap-6">
          {lessonList.map(async (lesson) => {
            return (
              <div className="w-[27%] min-w-72" key={lesson.id}>
                <LessonCard
                  linkTo={lesson.linkTo}
                  nthLesson={lesson.nthLesson}
                  title={lesson.title}
                  context={lesson.context}
                  isDone={await checkIfExist(subject, lesson.title)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
