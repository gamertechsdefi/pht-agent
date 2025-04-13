"use client";
import { motion, useScroll } from "framer-motion";

import "next/image";
const newsImage = "/images/news_art_bot.svg";
const contractcheckImage = "/images/contractcheck_art_bot.svg";
const evolutionImage = "/images/evolution_art_bot.svg";
const friendlyImage = "/images/friendlyui_art_bot.svg";
const alertImage = "/images/alert_art_bot.svg";

const HeaderVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2.5,
      when: 'beforeChildren',
      damping: 8,
      mass: 0.4,
      staggerChildren: 1
    }
  },
};

const ChildrenVariant = {
  hidden: {
    opacity: 0,
    x: '-100vw'

  },
  visible: {
    opacity: 1,
    x: 0

  }
}

const SecondChildrenVariant = {
  hidden: {
    opacity: 0,
    x: '100vw'

  },
  visible: {
    opacity: 1,
    x: 0

  }

}

export default function Intro() {
  return (
    <motion.div variants={HeaderVariants} initial="hidden" animate="visible" className="text-white">
      <motion.div variants={ChildrenVariant} className="flex flex-col text-left md:flex-row-reverse items-center">
        <div className="flex-1">
          <img
            src={contractcheckImage}
            alt="Descriptive Alt Text"
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col mx-8  md:mx-16">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500">
              Smart Contract Check
            </h1>
            <p className="">
              PhoenixBot employs cutting-edge technology to conduct thorough
              smart contract audits. By meticulously scrutinizing every line of
              code, it ensures that the contracts you engage with are secure and
              free from vulnerabilities. This proactive approach mitigates the
              risks associated with smart contract exploits, offering you peace
              of mind as you navigate the decentralized landscape.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div variants={SecondChildrenVariant} className="flex flex-col text-left md:flex-row items-center">
        <div className="flex-1">
          <img
            src={newsImage}
            alt="Descriptive Alt Text"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col mx-8  md:mx-16">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-500">
              News Verification
            </h1>
            <p className="">
              Staying informed is crucial in the crypto space, but
              misinformation can pose significant threats. PhoenixBot goes
              beyond conventional news aggregators by employing advanced
              algorithms to verify the authenticity of news sources. It filters
              out unreliable information, allowing you to make well-informed
              decisions based on accurate and verified news, reducing the
              likelihood of falling victim to scams or market manipulation.
            </p>
          </div>
        </div>
      </motion.div>

      {/*News verification div ends here */}

      {/*Wallet & DApps Alerts div starts here */}
      <motion.div
        variants={ChildrenVariant}
        className="flex flex-col text-left md:flex-row-reverse items-center">
        <div className="flex-1">
          <img
            src={alertImage}
            alt="Descriptive Alt Text"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col mx-8  md:mx-16">
            <h1 className="text-2xl md:text-3xl font-bold">
              Wallet & DApps Alerts
            </h1>
            <p className="">
              Your crypto assets deserve the utmost protection, and PhoenixBot
              takes this responsibility seriously. With real-time monitoring
              capabilities, it actively scans the blockchain for any suspicious
              activities related to your wallet. Whether it&apos;s an unauthorized
              access attempt or an unusual transaction pattern, PhoenixBot
              promptly alerts you, empowering you to take immediate action and
              safeguard your funds.
            </p>
          </div>
        </div>
      </motion.div>
      {/*Wallet & DApps Alert div ends here */}

      {/*Friendly User Interface starts here */}

      <motion.div
        variants={SecondChildrenVariant}
        className="flex flex-col text-left md:flex-row items-center">
        <div className="flex-1">
          <img
            src={friendlyImage}
            alt="Descriptive Alt Text"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1">
          <div className="flex flex-col mx-8  md:mx-16">
            <h1 className="text-2xl md:text-3xl font-bold">
              Friendly User Interface
            </h1>
            <p className="">
              Navigating the complexities of the crypto world is made simple
              with PhoenixBot&apos;s user-friendly interface. Accessible on various
              devices, this intuitive platform provides a seamless experience,
              allowing users to customize security preferences, set alerts, and
              receive notifications effortlessly.
            </p>
          </div>
        </div>
      </motion.div>
      {/*Friendly User Interface div ends here */}

      {/*Smart Contract Check div start */}

      <motion.div
        variants={ChildrenVariant}
        className="flex flex-col text-left md:flex-row-reverse items-center">
        <div className="flex-1">
          <img
            src={evolutionImage}
            alt="Descriptive Alt Text"
            className="w-full h-auto"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col mx-8  md:mx-16">
            <h1 className="text-2xl md:text-3xl font-bold">
              Continious Evolution
            </h1>
            <p className="">
              Security threats are ever-evolving, and so is PhoenixBot. Our
              dedicated team of experts consistently updates the platform to
              stay ahead of emerging risks and vulnerabilities. By choosing
              PhoenixBot, you align yourself with a proactive and adaptive
              solution that evolves with the rapidly changing crypto landscape.
            </p>
          </div>
        </div>
      </motion.div>
      {/*Smart Contract Check div ends here */}

    </motion.div>
  );
}
