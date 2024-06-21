'use client'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()

  const seachFn = () => {
    router.push('/about')
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-center mt-[-50px]">
        <main className="flex justify-center w-screen ">
          <div className=" flex flex-col items-center max-w-2xl w-[80%] ">
            <div className="">
              <img src="goolol-logo.png" />
            </div>
            <div className=" mt-4 w-[90%] border rounded-full overflow-hidden">
              <div className='border-[#3C76C9] border-[6px] rounded-full h-[4.2vw] min-h-12 flex'>
                <input type="text" className=" focus:outline-none w-full border-none m-2" />
                <button onClick={() => seachFn()} className=" bg-[#3C76C9] border-none px-6 h-[100%] "><Search className='text-white w-[3vw] h-[3vw] min-h-6 min-w-6' /></button>
              </div>
            </div>
            <div>
              <p className="font-bold text-center text-[1vw] sm:text-[8px]"><span className=' text-red-600'>QAUTION:</span>We don’t give you the result you want, but the result you need.</p>
            </div>
          </div>
        </main>
      </div>
      {/* FOOTER */}
      <footer className=' absolute bottom-4'>
        <div className="p-1 bg-[#d9d9d9] w-screen mb-5">
          <div className=" flex justify-center">
            <div>
              <img onClick={() => window.open('https://x.com/googleLayer2', '_ blank')} className=" cursor-pointer w-12 mx-2" src="/x-logo.svg" alt="" />
            </div>
            <div>
              <img onClick={() => window.open('https://discord.gg/zvaVZJmz53', '_ blank')} className=" cursor-pointer w-12 mx-2" src="/discord-logo.svg" alt="" />
            </div>
            <div>
              <img onClick={() => window.open('https://t.me/+46DhWjOrw-5jZThl', '_ blank')} className=" cursor-pointer w-12 mx-2" src="/telegram-logo.svg" alt="" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
