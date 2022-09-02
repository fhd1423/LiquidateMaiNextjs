import React from 'react'
import background from "../public/assets/bgrnd.png"
import Image from 'next/image'
import { ArrowCircleDownIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const Landing = () => {
  const router = useRouter()
  return (
    <div className='flex justify-evenly h-full w-full position:relative '>
      {<Image className='fixed' src="/assets/npng.jpg" layout='fill' quality='100' />}
      <h1 className='absolute top-60 p-4 text-6xl animate-type'> Mai Finance Vault Analytics</h1>
      <button onClick = {() => router.push('/vaults')} className='border-4 border-black rounded-lg p-4 bg-[#EDE6D4] font-bold absolute top-80 text-4xl mt-20 hover:shadow-xl hover:text-[#EDE6D4] hover:bg-black hover:border-[#EDE6D4]'> Enter App</button>
      <ArrowCircleDownIcon className='hidden absolute h-12 w-12 bottom-0 animate-pulse animate-bounce' />
    </div>
  )
}

export default Landing


