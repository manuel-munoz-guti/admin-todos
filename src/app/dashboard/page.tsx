import { WidgetItem } from "@/components";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {

  const sesion = await getServerSession(authOptions);

  if (!sesion) {
    redirect('/api/auth/signin');
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
      <WidgetItem title="Usuario conectado Server Side">
        <div className="flex flex-col">
          <span className="flex flex-row">{ sesion.user?.name }</span>
          <span className="flex flex-row">{ sesion.user?.image }</span>
          <span className="flex flex-row">{ sesion.user?.email }</span>
        </div>
      </WidgetItem>
    </div>
  );
}