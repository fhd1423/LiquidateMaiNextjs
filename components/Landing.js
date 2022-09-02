import React from 'react'
import background from "../public/assets/bgrnd.png"
import Image from 'next/image'
import { ArrowCircleDownIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const Landing = () => {
  const router = useRouter()
  return (
    <div className='flex justify-evenly h-full w-full position:relative bg-[#EDE6D4]'>
      {<Image className='fixed invisible md:visible' src="/assets/npng.jpg" layout='fill' quality='100' />}
      {<Image className='fixed visible md:invisible' src="/assets/jj.png" layout='fill' quality='100' />}
      <h1 className='absolute top-40 p-4 text-6xl animate-type'> Mai Finance Vault Analytics</h1>
      <button onClick = {() => router.push('/vaults')} className='border-4 border-black rounded-lg p-4 bg-[#EDE6D4] font-bold absolute top-60 text-4xl mt-40 hover:shadow-xl hover:text-[#EDE6D4] hover:bg-black hover:border-[#EDE6D4]'> Enter App</button>
      <ArrowCircleDownIcon className='hidden absolute h-12 w-12 bottom-0 animate-pulse animate-bounce' />
    </div>
  )
}

export default Landing


