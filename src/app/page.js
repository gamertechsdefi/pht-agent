"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import PromptGrid from '@/components/PromptFlow';
import QuickLinks from '@/components/QuickLinks';
import Image from 'next/image';
import Intro from '@/components/Features';
import Link from 'next/link';
import Header from '@/components/Header';

const Homepage = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setStars(newStars);
    };

    generateStars();
  }, []);

  return (
    <div className="bg-gradient-to-br from-black via-orange-950 to-black">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-[#20373d] via-transparent to-transparent opacity-40"></div>

      {/* Green tint overlay */}
      <div className="absolute inset-0 bg-orange-700 opacity-5"></div>

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
          }}
          animate={{
            opacity: [star.opacity, star.opacity + 0.3, star.opacity],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Your content goes here */}
      <div className="relative z-10 container">
        <Header />
        <div className='min-h-screen flex flex-col md:flex-row justify-center items-center px-8'>
          <div className='md:w-[50%]'>
            <h1 className="text-5xl md:text-7xl font-bold text-orange-500 pb-4">
              Your AI Powered BNBChain GPT
            </h1>
            <p className="text-gray-300 pb-12">
            Unlock the full potential of BNB Chain with advanced insights, 
            real-time analytics, and personalized strategies. Empower your journey with cutting-edge AI tailored for BNB Chain success.
            </p>
            <Link href="/chat" className='font-bold text-sm bg-gradient-to-b from-orange-500 to-orange-700 text-white px-8 py-4 rounded-md'>
              Chat with the Agent</Link>
          </div>
          {/* <div className="relative flex-1 w-128 h-128 mt-[-50px]">
            <Image
              src="/images/contractcheck_art_bot.svg"
              alt="phoenix agent"
              fill
              className="object-cover"
            />
          </div> */}
        </div>

        <section className='grid grid-cols-1 md:grid-cols-3 gap-8 md:mx-16 my-32 text-white px-8'>
          <div className='bg-black/50  border-orange-600 border-2 rounded-md px-8 py-4'>
            <div>
              <h1 className='font-semibold text-2xl pb-4'>Stay Ahead with Real-Time Analytics</h1>
            </div>
            <p> Gain a competitive edge with instant BNB Chain analytics. From market trends to wallet tracking, our 
              GPT delivers actionable insights on price movements, NFT drops, and dApp performance. Make informed 
              decisions with precise, AI-curated data tailored to your blockchain goals.</p>
          </div>

          <div className='bg-black/50 border-orange-600 border-2 rounded-md px-8 py-4'>
            <div>
              <h1 className='font-semibold text-2xl pb-4'>Choose Your Model</h1>
            </div>
            <p>Dive into decentralized finance with confidence. Your AI-powered GPT identifies high-yield staking, 
              liquidity pools, and emerging protocols on BNB Chain. Get concise, data-backed recommendations to 
              diversify your portfolio, minimize risks, and capitalize on trends, all while navigating the DeFi 
              landscape effortlessly.</p>
          </div>

          <div className='bg-black/50 border-orange-600 border-2 rounded-md px-8 py-4'>
            <div>
              <h1 className='font-semibold text-2xl pb-4'>Smart Contract Verification Made Simple</h1>
            </div>
            <p>Ensure security and trust with AI-powered smart contract verification on BNB Chain. 
              Our GPT audits code for vulnerabilities, analyzes logic, and confirms compliance in real-time. 
              Get clear, concise reports to deploy with confidence, minimizing risks and safeguarding your 
              projects effortlessly.</p>
          </div>

          
          <div className='bg-black/50 border-orange-600 border-2 rounded-md px-8 py-4'>
            <div>
              <h1 className='font-semibold text-2xl pb-4'>BNB Chain Latest News & Verification</h1>
            </div>
            <p>Stay updated with BNB Chain&epos;s latest developments, from Lorentz and Maxwell upgrades slashing 
              block times to AI-driven smart contract automation. Our GPT verifies news authenticity, cross-checking 
              on-chain data and official announcements, ensuring you get accurate, real-time insights into BNB Chain&epos;s 
              ecosystem advancements</p>
          </div>

          <div className='bg-black/50 border-orange-600 border-2 rounded-md px-8 py-4'>
            <div>
              <h1 className='font-semibold text-2xl pb-4'>BNB Chain AI Ecosystem Insights & Trends</h1>
            </div>
            <p>Dive into BNB Chain’s thriving AI ecosystem, powered by BSC, opBNB, and Greenfield. Our GPT 
              delivers real-time market analysis, tracking AI-driven DeFi, NFT, and memecoin trends. Stay 
              updated on projects like MyShell and ChainGPT, with verified insights into TVL growth, transaction 
              speeds, and innovations like Lorentz upgrades.</p>
          </div>
        </section>

        {/* <section>
          <h1>Start chatting with the Phoenix Agent</h1>
        </section> */}

        <section>
          <PromptGrid />
        </section>

        <section className='px-8 my-16'>
          <div className='aspect-video bg-black border border-orange-600 flex items-center justify-center'>
            <div className='w-20 h-20 bg-orange-500 rounded-md'>
            </div>

          </div>
        </section>

        <section className='my-24 px-8 text-white text-center'>
          <h1 className='text-xl'>POWERED BY</h1>
          <div className=''>
            <h1 className='text-3xl font-bold text-orange-500'>PHOENIX TOKEN</h1>
          </div>
        </section>

        <section>
          <QuickLinks />
        </section>

      </div>

    </div >
  );
};

export default Homepage;