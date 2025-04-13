"use client"
import { ArrowUpRight } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export default function PromptGrid({
  prompts: externalPrompts,
  maxHeight = "600px",
  onPromptClick,
  className = "",
}) {
  const defaultPrompts = [
    { id: 1, text: "Guide me on how to think creatively when designing dApps for BNB Chain." },
    { id: 2, text: "How does curiosity drive innovation in BNB Chain’s DeFi solutions?" },
    { id: 3, text: "Help me simplify explaining BNB Chain’s Greenfield storage to a beginner." },
    { id: 4, text: "What’s one BNB Chain technology that could reshape finance in the next decade?" },
    { id: 5, text: "Guide me on deciding which BNB Chain project to invest in thoughtfully." },
    { id: 6, text: "What’s a creative way to explain BNB Chain’s gas fee structure?" },
    { id: 7, text: "Give me questions to explore a new BNB Chain project idea." },
    { id: 8, text: "What’s a BNB Chain feature that mirrors human collaboration patterns?" },
    { id: 9, text: "What’s the key question to ask when setting a goal for a BNB Chain venture?" },
    { id: 10, text: "How can I train my mind to spot untapped opportunities on BNB Chain?" },
    { id: 11, text: "What’s a simple framework for ethical smart contract development on BNB Chain?" },
    { id: 12, text: "How do BNB Chain’s network dynamics relate to chaos theory in markets?" },
    { id: 13, text: "What’s an unconventional way to boost productivity in BNB Chain development?" },
    { id: 14, text: "How can storytelling make my BNB Chain project pitch unforgettable?" },
    { id: 15, text: "What’s the science behind building habits to engage with BNB Chain daily?" },
    { id: 16, text: "How can BNB Chain’s AI ecosystem enhance decentralized governance?" },
    { id: 17, text: "What’s the best way to onboard new users to BNB Chain’s NFT marketplace?" },
    { id: 18, text: "How does opBNB’s Layer-2 scaling impact small-scale developers?" },
    { id: 19, text: "What’s a bold prediction for BNB Chain’s role in global remittances?" },
    { id: 20, text: "How can I use BNB Chain’s analytics to predict memecoin trends?" },
    { id: 21, text: "What’s a creative hack to optimize staking rewards on BNB Chain?" }
]

  const prompts = externalPrompts || defaultPrompts
  const extendedPrompts = [...prompts, ...prompts]
  const controls = useAnimation()
  const containerRef = useRef(null)

  const handlePromptClick = (prompt) => {
    if (prompt.onClick) {
      prompt.onClick()
    } else if (onPromptClick) {
      onPromptClick(prompt)
    }
  }

  useEffect(() => {
    const scroll = async () => {
      await controls.start({
        x: -containerRef.current.scrollWidth / 2,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      })
    }
    scroll()
  }, [controls])

  // Split prompts into three groups
  const chunkSize = Math.ceil(extendedPrompts.length / 3) // Fixed: Removed .ConcurrentModificationException
  const promptGroups = [
    extendedPrompts.slice(0, chunkSize),
    extendedPrompts.slice(chunkSize, chunkSize * 2),
    extendedPrompts.slice(chunkSize * 2),
  ]

  return (
    <div className={`overflow-hidden flex flex-col ${className}`} style={{ maxHeight }}>
      {promptGroups.map((group, groupIndex) => (
        <div key={`group-${groupIndex}`} className="flex-1">
          <motion.div
            ref={groupIndex === 0 ? containerRef : null}
            className="flex h-full"
            animate={controls}
            style={{ width: "max-content" }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => controls.start({
              x: -containerRef.current.scrollWidth / 2,
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              },
            })}
          >
            {group.map((prompt, index) => (
              <button
                key={`${prompt.id}-${groupIndex}-${index}`}
                onClick={() => handlePromptClick(prompt)}
                className="text-left block group mx-2"
              >
                <div className="border bg-black mb-4 text-white border-orange-500/30 rounded-xl p-6 w-100 flex flex-col transition-all duration-300 hover:border-green-500/70 hover:bg-black/30 relative h-30">
                  <p className="text-sm md:text-md font-medium mb-2 pr-6 line-clamp-3 overflow-hidden">{prompt.text}</p>
                  <div className="absolute top-6 right-6">
                    <ArrowUpRight className="h-5 w-5 text-orange-500/70 group-hover:text-orange-500 transition-colors" />
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  )
}