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
      <div className="container">
        <h2 className="font-bold flex justify-center text-5xl py-20">
          {nthChapter}. {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {lessonList.map((lesson) => {
            return (
              <LessonCard
                key={lesson.id}
                linkTo={lesson.linkTo}
                nthLesson={lesson.nthLesson}
                title={lesson.title}
                context={lesson.context}
                isDone={lesson.isDone}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
