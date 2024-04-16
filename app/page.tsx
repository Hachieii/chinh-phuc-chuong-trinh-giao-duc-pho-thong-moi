import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  const isLogin = !!session?.user;
  if (isLogin) await redirect("/dashboard");

  return (
    <>
      {/* {!isLogin && <Navbar />}
      {isLogin && <NavbarAuth imageLink={session?.user?.image as string} />} */}
      <div className="container py-[20%]">
        <h1 className="text-7xl font-bold text-center">
          Chinh phục chương trình giáo dục phổ thông mới
        </h1>
        <div className="flex flex-wrap justify-center pt-16 gap-16">
          <Link href="/api/auth/signin">
            <Button className="bg-primary scale-125 font-semibold">
              Đăng nhập
            </Button>
          </Link>
          <Link href="/thu-vien">
            <Button className="bg-secondary-foreground scale-125 font-semibold">
              Thư viện
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
