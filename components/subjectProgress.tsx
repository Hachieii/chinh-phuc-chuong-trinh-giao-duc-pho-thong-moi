import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "@/components/ui/progress";

export default function SubjectProgress({
  title,
  type,
  completed,
  total,
}: {
  title: string;
  type: string;
  completed: number;
  total: number;
}) {
  const percentage = (completed * 100) / total;

  return (
    <>
      <Card x-chunk="dashboard-01-chunk-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{type}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold mb-4">{title}</div>
          <div className="flex flex-row justify-between gap-4">
            <Progress value={percentage} />
            <p className="text-xs text-muted-foreground">
              {completed}/{total}
            </p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
