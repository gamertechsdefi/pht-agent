"use client";
import {useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const logoImage = "/images/logo_blank.png";

const navVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: "300",
      delay: -0.2,
      duration: 2,
    },
  },
};

const popupButtonVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: "-100vh",
    transition: {
      duration: 2,
    },
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#250000] bg-opacity-50 text-white sticky top-0 z-100 items-center">
      <motion.div
        // variants={navVariants}
        // initial="hidden"
        // animate="visible"
        className="flex mx-4 items-center md:mx-8"
      >
        <div className="my-2 flex items-center">
          <Image src={logoImage} width={50} height={50} className="mr-2" />
          <span className="font-bold">Phoenix</span>
        </div>
        <div className="justify-end flex flex-grow">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className=" font-bold hover:text-[white] relative flex"
          >
            <span className="">Menu</span>
          </motion.button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={popupButtonVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-8 flex flex-col absolute p-4 px-8 rounded-sm "
              >
                <motion.ul
                  onClick={() => setIsOpen(false)}
                  className="flex flex-col cursor-pointer"
                >
                  <a
                    target="blank"
                    href="#aboutSection"
                    className="hover:text-gray-500 mb-1"
                  >
                    About
                  </a>
                  <a
                  target="blank"
                    href="#partners"
                    className="hover:text-gray-500 mb-1"
                  >
                    Partners
                  </a>
                  <a
                  target="blank"
                    href="#utilities"
                    className="hover:text-gray-500 mb-1"
                  >
                    Products
                  </a>
                  <a
                  target="blank"
                    href="#tokenomics"
                    className="hover:text-gray-500 mb-1"
                  >
                    Tokenomics
                  </a>
                  <a
                  target="blank"
                    href="#roadmap"
                    className="hover:text-gray-500 mb-1"
                  >
                    Roadmap
                  </a>
                  <a target="blank" href="https://waitlist.phoenixtoken.community">
                    <button className="bg-orange-600 text-white rounded-[5px] p-2 hover:bg-gray-100 hover:text-[red]">
                      Join Waitlist
                    </button>{" "}
                  </a>
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
}
