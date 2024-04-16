import { auth } from "@/auth";
import ListSubjects from "@/components/listsubjects";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";

export default async function Page() {
  const session = await auth();
  const isLogin = !!session?.user;
  return (
    <>
      {isLogin && <NavbarAuth imageLink={session?.user?.image as string} />}
      {!isLogin && <Navbar />}
      <ListSubjects />

      <div className="container scale-90"></div>
    </>
  );
}
