"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const AboutPage = () => {
  const [value, setValue] = useState<string>("");

  const questionRefs = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    questionRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
  };

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !questionRefs.current.includes(el)) {
      questionRefs.current.push(el);
    }
  };
  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <main>
        <div className="container p-4 mx-auto">
          <div className="flex flex-col justify-center md:justify-start  md:flex-row gap-4 items-center">
            <Link href="/">
              <Image
                src={"/assets/images/logo.png"}
                alt="logo"
                className="w-[100px] h-auto"
                width={1000}
                height={1000}
              />
            </Link>
            <div className=" w-full max-w-[46rem] h-[44px] md:h-[4.0625rem] flex items-center gap-1 border border-[#D9D9D9] rounded-full bg-white">
              <div className="relative w-full">
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
              </div>

              <button className="py-2 pe-5">
                <Image
                  src={"/assets/images/bot-icon.svg"}
                  alt="bot icon"
                  width={100}
                  height={100}
                  className="w-auto h-[26.99px] md:h-[55px]"
                />
              </button>
            </div>
          </div>
          <div className="mt-4 flex space-x-4">
            <Link
              href={"#golo"}
              className="bg-white border border-[#ddd] py-1 px-4 rounded-full"
            >
              How to buy $GLOL
            </Link>
            <Link
              href={"#follow"}
              className="bg-white border border-[#ddd] py-1 px-4 rounded-full"
            >
              Follow Us
            </Link>
          </div>
          <div className="question" ref={addToRefs}>
            <h1 className="text-3xl text-link text-center md:text-start font-bold mt-10">
              Welcome to the world’s first Google Layer 2
            </h1>
            <p className=" mt-4  text-center md:text-start">
              Thanks to the groundbreaking concept of Layer 2s, anyone can
              create their own Layer 2 by simply rolling up transactions, and
              sending them to another chain. Inspired by this, we proudly
              present our SUPERIOR consensus mechanism.
            </p>
          </div>
          <div className="question" ref={addToRefs}>
            <h2 className="text-2xl font-bold mt-10 text-activeLink text-center md:text-start">
              Proof of{" "}
              <span style={{ textDecoration: "line-through" }}>Shit</span> Sheet
              (PoSh)
            </h2>
            <p className=" mt-4 text-center md:text-start">
              We achieve this by rolling up all the transactions of $GLOL into a
              public Google {"'"}Sheet{"'"} that is accessible to all, thus
              becoming the FIRST TRUE Google Layer 2.
            </p>
          </div>
          <div className="question" ref={addToRefs}>
            <h2 className="text-2xl font-bold mt-10 text-link text-center md:text-start">
              Aim
            </h2>
            <p className=" mt-4 text-center md:text-start">
              We hope that through our work, all L2s will admit and adopt the
              usage of Proof of Sheet (PoSh), since it’s obviously the more
              honest superior approach.
            </p>
          </div>
          <div className="question" ref={addToRefs}>
            <div className=" mt-10 text-center  md:text-start">
              <h2 className="text-2xl font-bold text-activeLink">
                Inspired by
              </h2>
              <div className="flex space-x-4 mt-2 justify-center md:justify-start">
                <Image
                  src="/assets/icons/curr0.png"
                  alt="Icon 1"
                  width={50}
                  height={50}
                  className="w-10 h-10"
                />
                <Image
                  src="/assets/icons/curr1.png"
                  alt="Icon 2"
                  width={50}
                  height={50}
                  className="w-10 h-10"
                />
                <Image
                  src="/assets/icons/curr2.png"
                  alt="Icon 3"
                  width={50}
                  height={50}
                  className="w-10 h-10"
                />
              </div>
            </div>
            <p className="mt-2 text-center md:text-start">And Many More...</p>
          </div>
          <div className="question" ref={addToRefs}>
            <h2 className="text-2xl font-bold mt-10 text-link text-center md:text-start">
              Tokenomics
            </h2>
            <ul className="list-decimal list-inside mt-4 space-y-2 text-left">
              <li>
                100% of $GLOL tokens will be LOCKED in the liquidity pool.
              </li>
              <li>No Team Allocation.</li>
              <li>No VC Allocation.</li>
              <li>100% community owned.</li>
              <li>Initial Liquidity $20,000 (ultra micro cap).</li>
              <li>Liquidity Locked for 1 Year (renewable).</li>
            </ul>
          </div>
          <div className="question" ref={addToRefs} id="golo">
            <h2 className="text-2xl font-bold mt-10 text-activeLink text-center md:text-start">
              How to buy $GLOL
            </h2>
            <p className="mt-4 text-center md:text-start">
              Liquidity Locked for 1 Year (renewable).
            </p>
          </div>
          <div className="question" ref={addToRefs}>
            <h2 className="text-2xl font-bold mt-10 text-link text-center md:text-start">
              Mid August
            </h2>
            <p className="mt-4 text-center md:text-start">
              Launch will be on Solana (a Layer 1) because we couldn’t decide if
              we (a Layer 2) launch on another Layer 2, would that make us a
              Layer 3 or a Layer 4 (2^2).
            </p>
          </div>
          <div className="question" ref={addToRefs} id="follow">
            <h2 className="text-2xl font-bold mt-10 text-center text-activeLink">
              Follow Us for Latest Updates
            </h2>
            <div className="flex space-x-4 mt-4 justify-center">
              <a href="https://t.me/+46DhWjOrw-5jZThl">
                <Image
                  src="/assets/icons/telegram.png"
                  width={60}
                  height={60}
                  alt="Telegram"
                  className="w-10 h-10"
                />
              </a>
              <a href="https://x.com/@GoogleLayer2">
                <Image
                  src="/assets/icons/twitter.png"
                  width={60}
                  height={60}
                  alt="Twitter"
                  className="w-10 h-10"
                />
              </a>
              <a href="https://discord.gg/zvaVZJmz53">
                <Image
                  src="/assets/icons/discord.png"
                  width={60}
                  height={60}
                  alt="Discord"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>
        </div>
        <footer>
          <Image
            className="w-full h-auto"
            width={1000}
            height={1000}
            src={"/assets/images/footer.png"}
            alt="footer image"
          />
        </footer>
      </main>
    </div>
  );
};

export default AboutPage;
