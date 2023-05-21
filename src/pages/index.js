import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useSession, signIn, signOut } from "next-auth/react"
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data: session} = useSession()
  if(!session) {
    return (
      <div className='flex items-center w-screen h-screen bg-blue-900'>
      <div className='w-full text-center'>
      <button className='p-2 px-4 bg-white rounded-lg' onClick={() => signIn('google')}>Login with Google</button>
      </div>
    </div>
    )
  }

  return (
    <div className='min-h-screen bg-blue-900'>
      <Nav />
      <div className='p-2'>logged in {session.user.email} </div>
    </div>
  )
}
