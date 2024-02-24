import Image from 'next/image';
import Link from 'next/link';
import { CiLogout } from 'react-icons/ci';
import { SidebarItem } from './SidebarItem';
import { IoBasketOutline, IoCalendarOutline, IoCheckboxOutline, IoCodeWorkingOutline, IoListOutline, IoPersonOutline } from 'react-icons/io5';
import { Session } from 'next-auth';
import { LogoutButton } from '..';

const DEFAULT_USER_IMAGE='https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp';
const DEFAULT_USER_NAME='Anonymus';

interface Props {
  sesion: Session | null
}

const navbarItemsArray = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    icon: <IoCalendarOutline size={30} />
  },
  {
    title: 'Rest TODOS',
    path: '/dashboard/rest-todos',
    icon: <IoCheckboxOutline size={30} />
  },
  {
    title: 'Server Actions',
    path: '/dashboard/server-todos',
    icon: <IoListOutline size={30} />
  },
  {
    title: 'Cookies',
    path: '/dashboard/cookies',
    icon: <IoCodeWorkingOutline size={30} />
  },
  {
    title: 'Product',
    path: '/dashboard/products',
    icon: <IoBasketOutline size={30} />
  },
  {
    title: 'Profile',
    path: '/dashboard/profile',
    icon: <IoPersonOutline size={30} />
  },
];

export const Sidebar = ({ sesion }: Props) => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href='/dashboard'>
            <Image
              src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              className="w-32"
              width={48}
              height={48}
              alt="tailus logo"
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src={sesion?.user?.image ?? DEFAULT_USER_IMAGE }
            className="m-auto rounded-full object-cover"
            width={150}
            height={150}
            alt=""
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{ sesion?.user?.name ?? DEFAULT_USER_NAME}</h5>
          <span className="hidden text-gray-400 lg:block capitalize">
            { sesion?.user?.roles?.join(',') ?? ['client'] }
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {
            navbarItemsArray.map((item) => (
              <SidebarItem key={item.path} {...item} />
            ))
          }
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  )
}
