import LessonCard from "./lessonCard";

export default function ChapterList({
  nthChapter,
  title,
  lessonList,
}: {
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
  return (
    <>
      <div className="flex flex-col">
        <h2 className="font-bold text-4xl py-16">
          {`CHƯƠNG ${nthChapter}: ${title}`}
        </h2>
        <div className="flex flex-wrap gap-6">
          {lessonList.map((lesson) => {
            return (
              <div className="w-[27%] min-w-72" key={lesson.id}>
                <LessonCard
                  linkTo={lesson.linkTo}
                  nthLesson={lesson.nthLesson}
                  title={lesson.title}
                  context={lesson.context}
                  isDone={lesson.isDone}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
