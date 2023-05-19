import Link from "next/link";
import { RiStoreLine } from "react-icons/ri";

export default function Nav () {
  return (
    <aside className="text-white p-4">
      <a className="flex space-x-2">
        <span className="flex items-center justify-items-center">
          <RiStoreLine />
        </span>
        <span>
          ECommerceAdmin
        </span>
      </a>
      <nav>
        <Link href='/'>
          Dashboard
        </Link>
      </nav>
    </aside>
  )
}


