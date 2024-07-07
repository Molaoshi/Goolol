"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Home = () => {
  const [value, setValue] = useState<string>("");
  const navigate = useRouter();
  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };
  return (
    <main className="relative flex h-[100svh] flex-col p-4 pb-[8rem] md:pb-4 items-center justify-center bg-center bg-[url(/assets/images/paper-bg.png)] bg-cover bg-no-repeat ">
      <Image
        className="hidden md:block absolute top-0 left-0 w-full h-full z-[0]"
        height={1000}
        width={1000}
        src={"/assets/images/bg.png"}
        alt="paper bg"
      />
      <Image
        className="block md:hidden absolute object-contain top-0 left-0 w-full h-auto z-[0]"
        height={1000}
        width={1000}
        src={"/assets/images/mobile-bg-top.png"}
        alt="paper bg"
      />
      <Image
        className="block md:hidden absolute object-contain bottom-0 left-0 w-full h-auto z-[0]"
        height={1000}
        width={1000}
        src={"/assets/images/mobile-bg-bottom.png"}
        alt="paper bg"
      />
      <Image
        src={"/assets/images/logo.png"}
        alt="logo"
        className="w-[176px] md:w-[326px] h-auto"
        width={1000}
        height={1000}
      />

      <div className="relative z-1 mt-8 w-full max-w-[46rem] h-[44px] md:h-[4.0625rem] flex items-center gap-1 border border-[#D9D9D9] rounded-full bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate.push("/about");
          }}
          className="relative w-full"
        >
          <input
            className="py-2 ps-5 w-full h-full rounded-full outline-none "
            value={value}
            onChange={handleInputChange}
            placeholder=" "
          />
          {!value && (
            <div className="absolute top-1/2 left-5 transform -translate-y-1/2 flex pointer-events-none text-gray-400">
              <span className="mr-1">Search at</span>
              <span className="font-bold text-blue-500">G</span>
              <span className="font-bold text-red-500">o</span>
              <span className="font-bold text-yellow-500">o</span>
              <span className="font-bold text-blue-500">l</span>
              <span className="font-bold text-green-500">o</span>
              <span className="font-bold text-red-500">l</span>
            </div>
          )}
        </form>

        <Link href={"/about"} className="py-2 pe-5">
          <Image
            src={"/assets/images/bot-icon.svg"}
            alt="bot icon"
            width={100}
            height={100}
            className="w-auto h-[26.99px] md:h-[55px]"
          />
        </Link>
      </div>

      <p className="mt-3.5 text-center px-[0.1rem]">
        <span className="text-[#EA4133] font-bold">QAUTION:</span> We don’t give
        you the result you want, but the result you need.
      </p>
    </main>
  );
};

export default Home;
