import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";

export default async function Page() {
  const session = await auth();
  const isLogin = !!session?.user;
  return (
    <>
      {!isLogin && <Navbar />}
      {isLogin && <NavbarAuth imageLink={session?.user?.image as string} />}
    </>
  );
}
