import LogoutBtn from '@/components/LogoutBtn';
import { auth } from '../api/auth/[...nextauth]/auth'
import Image from 'next/image'

export default async function Page(params: any) {
  const session = await auth();
  return (
    <main className="flex flex-col gap-3">
      <h1>Protected</h1>
      <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-yellow-200">
        <Image
          priority={true}
          src={session?.user?.image || ""}
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div>
          Name: <span className="font-bold">{session?.user?.name}</span>
        </div>
        <div>
          Email: <span className="font-bold">{session?.user?.email}</span>
        </div>
      </div>
      {/* <a href="/auth">sign out</a> */}
      <LogoutBtn />
      <a href="/">public route</a>
    </main>
  );
}
