
// Raccourci MUI : "'.bg' = badge"
import Layout from "@/components/layouts/Layout";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className='ng-blue-900 h-scren flex'>
        <div className='text-center w-full'>
          <button className='bg-white p-2 rounded-md' onClick={() => signIn()}>
            Se connecter avec Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className='text-blue-900 flex justify-between'>
        <h2>
          Hello, <b>{session?.user?.name}</b>
        </h2>
        <div className='flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden'>
          <img src={session?.user?.image} alt='' className='w-6 h-6' />
          <span className='px-2'>{session?.user?.name}</span>
        </div>
      </div>
    </Layout>
  );
}
