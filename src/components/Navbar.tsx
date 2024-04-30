"use client"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { RiUserForbidFill, RiUserAddFill } from "react-icons/ri";
import { FaUserMd } from "react-icons/fa";

const listNav = [
  {
    icon: FaUserMd  ,
    url: "all-professional"
  },
  {
    icon: RiUserAddFill  ,
    url: "new-professional"
  },
  {
    icon: RiUserForbidFill  ,
    url: "block-professional"
  },
]

export function Navbar() {
  const pathname = usePathname()
  const path = pathname.split("/")[1]

  return (
    <aside className="w-full max-w-[200px] flex flex-col items-center">
      <span className="text-3xl text-teal-200 pt-5">Health</span>
      <nav>
        <ul className="w-full flex flex-col gap-6 pt-10">
          {listNav.map((list, index) => (
            <li className={`w-full after:block after:border-b-2 after:border-zinc-800 after:pb-6 ${index === listNav.length - 1 ? 'after:border-none' : ''}`} key={list.url}>
              <Link href={`/${list.url}`} className={`text-2xl text-white block p-4 rounded-xl transition-all  ${path === list.url ? "bg-gradient-primary text-zinc-900" : "hover:bg-zinc-700" }`}>
                <list.icon />
              </Link>
            </li>

          ))}
        </ul>
      </nav>
    </aside>
  )
}