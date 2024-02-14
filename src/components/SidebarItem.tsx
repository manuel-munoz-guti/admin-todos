'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    text: string;
    path: string;
    icon: JSX.Element;
}

export const SidebarItem = ({ text, path, icon }: Props) => {
  const pathname = usePathname();

  return(
    <li>
      <Link href={path} className={`relative px-4 py-3 flex items-center space-x-4 ${ (pathname === path) ? 'rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400' : 'rounded-md text-gray-600 group'}`} >
        { icon }
        <span className="-mr-1 font-medium">{ text }</span>
      </Link>
    </li>
  )
}