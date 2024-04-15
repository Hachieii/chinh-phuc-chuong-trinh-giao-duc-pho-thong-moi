import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CircleAlert } from "lucide-react";

export default function DangerContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="py-8">
        <Card className="bg-destructive">
          <CardHeader>
            <CardTitle className="flex">
              <CircleAlert />
              <div className="mx-3">Chú ý!</div>
            </CardTitle>
            <CardDescription className="text-primary font-bold text-md">
              {children}
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
