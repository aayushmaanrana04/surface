import { BiChart, BiDollar } from 'react-icons/bi';
import { BsCartX } from 'react-icons/bs';

export default function Dashboard(){


    return (
        <div className="py-6 px-4 bg-gray-100 flex-1 h-[90vh]">
            <div className='flex justify-center flex-wrap gap-4 font-extrabold'>
            {/* <div className='flex justify-around items-center lg:flex-wrap font-extrabold'> */}
                <div className='flex justify-center items-center w-fit mx-2 px-2 py-8 bg-white rounded-[30px] shadow-2xl hover:scale-110 transition-all ease-in-out delay-75'>
                    <div className='text-center w-2/5'>
                        <BiChart className='mx-auto text-6xl mb-4 rounded-full bg-red-400 text-white p-2' />
                        <p className='text-lg w-[125px] mr-8 font-extrabold'>Total Products</p>
                    </div>
                    <div className='w-3/5'>
                        <div className='mx-auto border-[20px] border-red-400 rounded-full w-[125px] h-[125px] flex justify-center items-center font-extrabold text-lg'>15,531</div>
                    </div>
                </div>

                <div className='flex justify-center items-center w-fit mx-2 px-2 py-8 bg-white rounded-[30px] shadow-2xl hover:scale-110 transition-all ease-in-out delay-75'>
                    <div className='text-center w-2/5'>
                        <BiDollar className='mx-auto text-6xl mb-4 rounded-full bg-[rgb(116,122,224)] text-white p-2' />
                        <p className='text-lg w-[125px] mr-8 font-extrabold'>Total Store Value</p>
                    </div>
                    <div className='w-3/5'>
                        <div className='mx-auto border-[20px] border-[rgb(116,122,224)] rounded-full w-[125px] h-[125px] flex justify-center items-center font-extrabold text-lg'>15,531</div>
                    </div>
                </div>

                <div className='flex justify-center items-center w-fit mx-2 px-2 py-8 bg-white rounded-[30px] shadow-2xl hover:scale-110 transition-all ease-in-out delay-75'>
                    <div className='text-center w-2/5'>
                        <BsCartX className='mx-auto text-6xl mb-4 rounded-full bg-[#50C878] text-white p-2' />
                        <p className='text-lg font-extrabold w-[125px] mr-8 text-center mx-auto'>Out of Stock</p>
                    </div>
                    <div className='w-3/5'>
                        <div className='mx-auto border-[20px] border-[#50C878] rounded-full w-[125px] h-[125px] flex justify-center items-center font-extrabold text-lg'>15,531</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

// F87171