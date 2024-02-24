// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { Sidebar, TopMenu } from '@/components';
import { getServerSession } from 'next-auth';

import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {

  const sesion = await getServerSession(authOptions);

  if (!sesion) {
    redirect('/api/auth/signin');
  }

  return (
    <>
      <Sidebar sesion={sesion}/>     
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="px-6 pt-6 bg-white p-2 m-2 pb-5 rounded">
         { children }
        </div>
      </div>
    </>
  );
}
