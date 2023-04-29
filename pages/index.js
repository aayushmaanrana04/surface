import Link from 'next/link'

export default function Home(){
  return(
    <div className="bg-[#8D448B] text-white font-poppins lg:h-[100vh]">
      <nav className="py-6 flex justify-center items-center lg:py-5 lg:justify-around">
        <div className="text-6xl">SURFACE</div>
        <div className="text-xl font-bold hidden lg:inline-block">
          <Link href="/auth/register">
            <button className="hover:bg-fuchsia-500 hover:border-2 hover:border-white border-2 border-[#8D448B] px-3 py-1 hover:rounded-md mr-2">Register</button>
          </Link>
          <Link href="/auth/login">
            <button className="border-white border-2 px-3 py-1 rounded-md ml-4 hover:bg-fuchsia-500">Login</button>
          </Link>
        </div>
      </nav>

      <div className="flex items-center mt-[30%] pb-[10%] lg:pb-[0] lg:mt-0 h-[85%] justify-center">
        <div className="w-11/12 item-center lg:w-full flex justify-center mx-auto">
          <div className="mx-auto w-[100vw] lg:w-[40%] justify-center px-auto font-poppins my-auto text-center">
            <p className="text-[42px] font-bold leading-[50px]">SURFACE</p>
            <p className="text-[42px] font-bold leading-[50px]">Management Solution</p>
            <p className="my-5 inline-block w-10/12 text-gray-300">collaborative interface for project Management</p>
            <div className="w-1/2 mx-auto flex justify-around text-xl font-bold lg:hidden">
              <button className="hover:bg-fuchsia-500 hover:border-2 hover:border-white px-3 py-1 hover:rounded-md border-2 border-[#8D448B] mr-2">Register</button>
              <button className="border-white border-2 px-3 py-1 rounded-md ml-4 hover:bg-fuchsia-500">Login</button>
            </div>
            <img className="block my-10 lg:my-0 lg:hidden" src="/homepage.webp" alt="" />
            <div className="w-10/12 mx-auto flex justify-between text-center mt-5">
              <div className="mx-5">
                <p className="text-[40px]">1K</p>
                <p className="text-gray-300">Brand Owners</p>
              </div>
              <div className="mx-5">
                <p className="text-[40px]">2K</p>
                <p className="text-gray-300">Active Users</p>
              </div>
              <div className="mx-5">
                <p className="text-[40px]">50+</p>
                <p className="text-gray-300">Partners</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:inline-block w-[50%]">
            <img className="hidden w-2/3 ml-20 lg:inline-block" src="/homepage.webp" alt="" />
          </div>
        </div>
      </div>


    </div>
  )
}
// mongodb+srv://Sparsh30:OLQTowZrZtwZtpgx@cluster0.vgkyxxj.mongodb.net/?retryWrites=true&w=majority