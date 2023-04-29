import { FaUserCircle } from 'react-icons/fa'
import { HiMenu } from 'react-icons/hi'

export default function Navbar(){
    return (
        <div className="flex justify-between items-center px-8 py-2 bg-gray-100">
            <div className="">
                <span className='text-5xl hidden md:inline-block'>LOGO</span>
                <HiMenu className='md:hidden text-4xl inline-block' />
            </div>
            <div className="flex justify-center items-center text-lg w-fit">
                <p className='w-fit'>Hey, <span className="font-bold">User</span></p>
                <FaUserCircle className='text-4xl ml-2 md:ml-3 text-gray-500' />
            </div>
        </div>
    )
}