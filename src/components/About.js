import React from 'react';
import '../app/globals.css'
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function About() {
    const router = useRouter();

    return (
        <div className="bg-[#1f1f1f] h-auto pt-16 m-auto  max-w-[76rem] sm:w-80">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className='my-10 sm:mt-0'>
                <p className="text-[#9ac3ff] text-[4vw] text-center pb-10 sm:text-[6.5vw]">Welcome to the world’s first <br /><span className=' font-bold'>Google Layer 2</span></p>
                <p className="text-white text-[2.1vw] text-left font-bold sm:text-[3.5vw] sm:text-center">Thanks to the groundbreaking concept of Layer 2s, anyone can create their own Layer 2 by simply rolling up transactions, and sending them to another chain.</p>
                <p className="text-white text-[2.1vw] text-center font-bold mt-5 sm:text-[3.5vw]">Inspired by this, we proudly present our SUPERIOR consensus mechanism.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className='my-16'>
                <p className="text-[#c589f9] text-[4vw] font-bold text-center py-10 sm:text-[6.5vw]">Proof of <span className='line-through'>Shit</span> Sheet (PoSh)</p>
                <p className="text-white text-[2.1vw] text-left font-bold sm:text-[3.5vw] text-center">We achieve this by rolling up all the transactions of $GLOL into a public Google “Sheet” that is accessible to all, thus becoming the FIRST TRUE Google Layer 2.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className='my-20'>
                <p className="text-[#9ac3ff] text-[4vw] text-center pb-10 font-bold sm:text-[6.5vw]">Aim</p>
                <p className="text-white text-[2.2vw] text-center font-bold sm:text-[3.5vw]">We hope that through our work, all L2s will admit adopt the usage of Proof of Sheet (PoSh), since it’s obviously the more honest superior approach.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className='my-20'>
                <p className="text-[#c589f9] text-[4vw] text-center pb-10 font-bold sm:text-[6.5vw]">Inspired by</p>
                <div className='flex flex-wrap justify-evenly'>
                    <img className=' max-h-40' src="\aim-logo-1.webp" alt="" />
                    <img className=' max-h-40' src="\aim-logo-2.webp" alt="" />
                    <img className=' max-h-40' src="\aim-logo-3.webp" alt="" />
                </div>
                <p className="text-white text-[2.2vw] text-center font-bold ml-6 mt-4 mb-8 sm:text-[3.5vw]">And Many More...</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className='my-20'>
                <p className="text-[#9ac3ff] text-[4vw] text-center pb-10 sm:pb-2 font-bold sm:text-[6.5vw]">Tokenomics</p>
                <p className="text-white text-[2.2vw] py-4 text-center font-bold sm:text-[3.5vw]">100% of $GLOL tokens will be LOCKED in the liquidity pool.</p>
                <p className="text-white text-[2.2vw] py-4 text-center font-bold sm:text-[3.5vw]">No Team Allocation.</p>
                <p className="text-white text-[2.2vw] py-4 text-center font-bold sm:text-[3.5vw]">No VC Allocation.</p>
                <p className="text-white text-[2.2vw] py-4 text-center font-bold sm:text-[3.5vw]">100% community owned.</p>
                <p className="text-white text-[2.2vw] py-4 text-center font-bold sm:text-[3.5vw]">Initial Liquidity $20,000 (ultra micro cap).</p>
                <p className="text-white text-[2.2vw] py-4 text-center font-bold sm:text-[3.5vw]">Liquidity Locked for 1 Year (renewable).</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className='my-20 sm:my-10'>
                <p className="text-[#9ac3ff] text-[4vw] text-center pb-10 sm:pb-2 font-bold mt-20 sm:text-[6.5vw]">How to buy $GLOL</p>
                <p className="text-white text-[2.2vw] py-4 text-center font-bold sm:text-[3.5vw]">Liquidity Locked for 1 Year (renewable).</p>
                <p className=' text-[#c589f9] text-[2.2vw] py-4 text-center font-bold underline sm:text-[3.5vw]'>Mid July</p>
                <p className="text-white text-[2.2vw] py-4 text-center sm:text-[3.5vw]">And announced on our Socials.</p>
                <p className="text-white text-[2.2vw] py-4 text-center font-bold sm:text-[3.5vw]">Launch will be on Solana (a Layer 1) because we couldn‘t decide if we (a Layer 2) launch on another Layer 2, would that make us a Layer 3 or a Layer 4 (2*2).</p>
                <p className="text-[#9ac3ff] text-[2.2vw] text-center pb-10 sm:pb-0 font-bold mt-20 sm:text-[6vw]">Follow Us for Latest Updates</p>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className='flex flex-wrap justify-center h-28 mb-36 my-20 sm:mt-2'>
                <img className=' h-[100%] sm:h-20 mx-10 cursor-pointer' onClick={() => window.open('https://t.me/+46DhWjOrw-5jZThl', '_ blank')} src="\telegram-logo-2.svg" alt="" />
                <img className=' h-[100%] sm:h-20 mx-10 cursor-pointer' onClick={() => window.open('https://x.com/googleLayer2', '_ blank')} src="\x-logo-2.svg" alt="" />
                <img className=' h-[100%] sm:h-20 mx-10 cursor-pointer' onClick={() => window.open('https://discord.gg/zvaVZJmz53', '_ blank')} src="\discord-logo-2.svg" alt="" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2 }} className='pb-28'>
                <p className="text-white text-[4vw] py-4 text-center font-bold sm:text-[6.5vw]">This is going to be huge...</p>
                <p className="text-white text-[4vw] py-4 text-center font-bold sm:text-[6.5vw]">OH SHEEEEEEEEEEET!</p>
            </motion.div>
        </div>
    );
}
