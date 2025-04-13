import { motion } from 'framer-motion';

export default function TypingIndicator() {
  return (
    <div className="flex items-center space-x-1 px-4 py-2 bg-gray-200 rounded-lg w-fit text-black">
      <motion.span
        className="block w-2 h-2 bg-gray-600 rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0,
        }}
      />
      <motion.span
        className="block w-2 h-2 bg-gray-600 rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0.2,
        }}
      />
      <motion.span
        className="block w-2 h-2 bg-gray-600 rounded-full"
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          delay: 0.4,
        }}
      />
    </div>
  );
}
