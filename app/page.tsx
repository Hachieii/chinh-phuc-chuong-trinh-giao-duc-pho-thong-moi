import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import NavbarAuth from "@/components/navbarAuthen";

export default async function Home() {
  const session = await auth();
  const isLogin = !!session?.user;
  console.log(session?.user);
  return (
    <>
      {!isLogin && <Navbar />}
      {isLogin && <NavbarAuth imageLink={session?.user?.image as string} />}
      {JSON.stringify(session?.user, null, 9)}
    </>
  );
}
