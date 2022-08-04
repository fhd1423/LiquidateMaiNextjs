import React from 'react'
import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
    return (
        <div className='fixed w-full h-20 shadow-xl z-[100]'>
            <div className='flex justify-evenly items-center w-full h-full px-10 2xl:px-25 '>
                <div>
                    <ul className='hidden md:flex'>
                        <Link href='/'>
                            <li className='rounded-full py-1 px-3 ml-20 mr-20 text-sm uppercase border-2 border-gray-500 hover:border-white hover:bg-gray-500 hover:text-white hover:scale-125'>  About </li>
                        </Link>
                        <Link href='/'>
                            <li className='rounded-full py-1 px-3 ml-20 mr-20 text-sm uppercase border-2 border-gray-500 hover:border-white hover:bg-gray-500 hover:text-white hover:scale-125'>  Vaults </li>
                        </Link>
                        <Link href='/'>
                            <li className='rounded-full py-1 px-3 ml-20 mr-20 text-sm uppercase border-2 border-gray-500 hover:border-white hover:bg-gray-500 hover:text-white hover:scale-125'>  Claim </li>
                        </Link>
                    </ul>
                </div>
            </div>
            

        </div>
    )
}

export default Navbar