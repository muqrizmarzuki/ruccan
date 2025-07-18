"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center space-y-6"
        >
            <div className="relative w-32 h-32">
                {/* Spinning Logo */}
                <motion.div
                    className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "linear",
                    }}
                >
                    <Image
                        src="/ruccan_logo2.png"
                        alt="Ruccan Logo"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </div>

            {/* Loading Text */}
            <p className="text-gray-600 text-sm tracking-wide animate-pulse">
                Loading, please wait...
            </p>
        </motion.div>
    );
};

export default LoadingScreen;
