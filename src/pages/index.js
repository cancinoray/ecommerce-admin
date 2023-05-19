import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data: session} = useSession()
  if(!session) {
    return (
      <div className='bg-blue-900 w-screen h-screen flex items-center'>
      <div className='text-center w-full'>
      <button className='bg-white p-2 rounded-lg px-4' onClick={() => signIn('google')}>Login with Google</button>
      </div>
    </div>
    )
  }

  return (
    <div className='bg-blue-900 min-h-screen'>
    <Nav />
      <div className='p-2'>logged in {session.user.email} </div>
    </div>
  )
}
