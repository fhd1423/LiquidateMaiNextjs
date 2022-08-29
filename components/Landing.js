import React from 'react'
import background from "../public/assets/bgrnd.png"
import Image from 'next/image'
import { ArrowCircleDownIcon } from '@heroicons/react/outline'

const Landing = () => {
  return (
    <div className='flex justify-evenly h-full w-full position:relative '>
      {<Image className='fixed' src="/assets/npng.jpg" layout='fill' quality='100' />}
      <h1 className='absolute top-60 p-4 text-6xl animate-type'> Mai Finance Vault Analytics</h1>
      <button className='border-4 border-black rounded-lg p-4 bg-[#EDE6D4] font-bold absolute top-80 text-4xl mt-20 hover:shadow-xl hover:text-[#EDE6D4] hover:bg-black hover:border-[#EDE6D4]'> Enter App</button>
      <ArrowCircleDownIcon className='absolute h-12 w-12 bottom-0 animate-pulse animate-bounce' />
      <div className='justify-evenly flex absolute bg-[#EDE6D4] w-full h-full font-bold text-black mt-[821px]'>
        <div className='grid-flow-row grid-rows-2 grid-cols-1 gap-7 flex justify-start'>
          <div className='rounded-2xl mt-20 h-80 w-72 border-2 border-black hover:shadow-2xl hover:scale-125'> We aggregate data for over 10,000 Vaults created in Mai.Finance</div>
          <div className='rounded-2xl mt-20 h-80 w-72 border-2 border-black hover:shadow-2xl hover:scale-125'> hi</div>
          <div className='rounded-2xl mt-20 h-80 w-72 border-2 border-black hover:shadow-2xl hover:scale-125'> hi</div>
        </div>
      </div>
    </div>
  )
}

export default Landing


