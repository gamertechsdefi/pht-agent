'use client';

import React, { useState, useRef, useEffect } from 'react';
import ChatMessage from '@/components/ChatMessage';
import TypingIndicator from '@/components/TypingIndicator';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isTyping]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, isUser: true };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        try {
            const res = await fetch('/api/agent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input }),
            });

            const data = await res.json();
            setMessages((prev) => [...prev, { text: data.reply, isUser: false }]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { text: 'Error getting response from AI.', isUser: false },
            ]);
        }

        setIsTyping(false);
    };

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
        <div className="h-screen flex flex-col bg-gradient-to-br from-black via-orange-950 to-black">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-[#20373d] via-transparent to-transparent opacity-40"></div>

            {/* Green tint overlay */}
            <div className="absolute inset-0 bg-orange-700 opacity-5 pointer-events-none z-0"></div>

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
            <div className="relative z-10 flex-1 overflow-y-auto p-4">
                {messages.map((msg, idx) => (
                    <ChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
                ))}
                {isTyping && <TypingIndicator />}
                <div ref={messagesEndRef} />
            </div>
            <div className="relative z-10 p-4 border-t border-white flex">
                <input
                    type="text"
                    className="flex-1 p-2 border border-white text-neutral-300 rounded mr-2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Ask me anything..."
                />
                <button
                    className="bg-orange-500 text-white px-4 py-2 rounded"
                    onClick={sendMessage}
                >
                    <Send size={20} />
                </button>
            </div>

        </div >
    );

};

