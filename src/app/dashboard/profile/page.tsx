'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {
  const { data: sesion } = useSession();

  useEffect(() => {
    console.log('Client Side');
  }, []);
  
  return (
    <div>
      <h1>Page Profile</h1>
      <hr />
      <div className="className flex flex-col">
        <span className="className flex flex-row">{ sesion?.user?.name ?? 'Anonimus' }</span>
        <span className="className flex flex-row">{ sesion?.user?.email ?? 'No email' }</span>
        <span className="className flex flex-row">{ sesion?.user?.image ?? 'No image' }</span>
      </div>
    </div>
  );
}