'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Mail, Lock, User, ArrowLeft } from 'lucide-react'

const HomeBgText = () => {
    return (
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
            <motion.div
                initial={{ opacity: 0.1, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="text-[18vw] font-bold text-gray-200 select-none pointer-events-none"
            >
                WELCOME
            </motion.div>
        </div>
    )
}

const LoginPage = ({ onBack }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotateY: -180 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        animate={{
                            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
                            y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%'
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-8 w-full max-w-md mx-4 border border-white/20"
            >
                <button
                    onClick={onBack}
                    className="absolute top-4 left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 text-white" />
                </button>

                <div className="text-center mb-8">
                    <motion.h2
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-3xl font-bold text-white mb-2"
                    >
                        Welcome Back
                    </motion.h2>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="text-gray-300"
                    >
                        Sign in to continue your journey
                    </motion.p>
                </div>

                <div className="space-y-6">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                            <Lock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        className="flex items-center justify-between text-sm"
                    >
                        <div className="flex items-center text-gray-300">
                            <input type="checkbox" className="mr-2 rounded" />
                            Remember me
                        </div>
                        <button className="text-blue-400 hover:text-blue-300 transition-colors">
                            Forgot password?
                        </button>
                    </motion.div>

                    <motion.button
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.preventDefault()}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                        <span>Sign In</span>
                        <ChevronRight className="w-5 h-5" />
                    </motion.button>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.7, duration: 0.5 }}
                    className="mt-6 text-center text-gray-300"
                >
                    Don't have an account?{' '}
                    <button className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                        Sign up
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

const LandingPage_view = () => {
    const [showLogin, setShowLogin] = useState(false)
    const [timeRemaining, setTimeRemaining] = useState(8)
    const [isTransitioning, setIsTransitioning] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prev) => {
                if (prev <= 1) {
                    setIsTransitioning(true)
                    setTimeout(() => setShowLogin(true), 1000)
                    clearInterval(timer)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const handleBackToLanding = () => {
        setShowLogin(false)
        setTimeRemaining(8)
        setIsTransitioning(false)
    }

    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                {!showLogin ? (
                    <motion.div
                        key="landing"
                        initial={{ opacity: 1 }}
                        animate={{
                            opacity: isTransitioning ? 0 : 1,
                            scale: isTransitioning ? 1.1 : 1,
                            filter: isTransitioning ? "blur(10px)" : "blur(0px)"
                        }}
                        exit={{ opacity: 0, scale: 1.1, rotateY: 90 }}
                        transition={{ duration: 1 }}
                        className="relative h-screen overflow-x-hidden"
                    >
                        {/* Auto-transition indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.8 }}
                            className="fixed top-20 right-8 z-50 bg-black/50 backdrop-blur-md rounded-full px-4 py-2 text-white border border-white/20"
                        >
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                                <span className="text-sm">Auto-redirect in {timeRemaining}s</span>
                            </div>
                        </motion.div>

                        {/* Interactive content overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="absolute top-20 left-8 z-30 text-white"
                        >
                            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Welcome to the Future
                            </h1>
                            <p className="text-gray-300 max-w-md">
                                Experience the next generation of digital interaction. Click anywhere to explore or wait for the automatic transition.
                            </p>
                        </motion.div>

                        <motion.div
                            className="absolute z-20 flex justify-center left-1/2 transform -translate-x-1/2  top-[70%]          /* default (mobile) */
  sm:top-[70%]      
  md:top-[70%]       
  lg:top-[60%]       
  xl:top-[55%] h-[70vh] w-[70vw] md:w-[55vw] lg:w-[70vw] sm:w-[60vw]"
                            animate={{
                                y: [0, -20, 0],
                                rotateZ: [0, 2, -2, 0]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <img
                                src="/mona-hubot-ce77f3cb7f46.webp"
                                alt="Description"
                                className="drop-shadow-2xl w-400 sm:w-600 md:w-80 lg:w-[400px] xl:w-[600px] xl:h-[600px] h-auto"
                            />

                        </motion.div>

                        <HomeBgText />

                        {/* Enhanced Background Glow with animations */}
                        <div className="absolute z-10 top-[57rem] w-screen h-[50vh] overflow-visible">
                            <motion.div
                                className="relative top-0 left-1/2 -translate-x-1/2 w-[130vw] h-[200vw] bg-black rounded-t-full"
                                animate={{
                                    boxShadow: [
                                        "0 0 18vw rgba(0,80,250,0.5), 0 0 30vw rgba(255,255,255,0.3), inset 0 0 2vw rgba(220,220,220,0.5), inset 0 0 3vw rgba(0,100,255,0.3), inset 0 0 3vw rgba(0,150,255,0.2)",
                                        "0 0 25vw rgba(0,80,250,0.7), 0 0 40vw rgba(255,255,255,0.4), inset 0 0 3vw rgba(220,220,220,0.7), inset 0 0 4vw rgba(0,100,255,0.4), inset 0 0 4vw rgba(0,150,255,0.3)",
                                        "0 0 18vw rgba(0,80,250,0.5), 0 0 30vw rgba(255,255,255,0.3), inset 0 0 2vw rgba(220,220,220,0.5), inset 0 0 3vw rgba(0,100,255,0.3), inset 0 0 3vw rgba(0,150,255,0.2)"
                                    ]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    maxWidth: '2000px',
                                    maxHeight: '2000px',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Animated Blue Lighting Effect */}
                                <motion.div
                                    className="absolute -top-[2vh] left-1/2 -translate-x-1/2 rounded-full opacity-80"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.8, 1, 0.8]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        width: 'clamp(160px, 25vw, 380px)',
                                        height: 'clamp(30px, 4vw, 120px)',
                                        background: 'radial-gradient(circle, rgba(50,100,255,0.9) 40%, rgba(0,0,255,0.6) 70%, rgba(0,0,255,0.2) 100%)',
                                        filter: 'blur(clamp(20px, 3vw, 40px))',
                                    }}
                                />

                                {/* Animated White Lighting Effect */}
                                <motion.div
                                    className="absolute -top-[2vh] left-1/2 -translate-x-1/2 rounded-full opacity-70"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        x: [-10, 10, -10]
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        width: 'clamp(80px, 12vw, 220px)',
                                        height: 'clamp(50px, 8vw, 100px)',
                                        background: 'radial-gradient(circle, rgba(0,180,255,0.7) 80%, rgba(160,150,255,1) 90%)',
                                        filter: 'blur(3vw)'
                                    }}
                                />
                                <motion.div
                                    className="absolute -top-[2vh] left-1/2 -translate-x-1/2 rounded-full opacity-80"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.8, 1, 0.8]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        width: 'clamp(160px, 100vw, 5000px)',
                                        height: 'clamp(30px, 10vw, 500px)',
                                        background: 'radial-gradient(circle, rgba(50,100,255,0.8) 40%, rgba(0,0,255,0.6) 70%, rgba(0,0,255,0.2) 100%)',
                                        filter: 'blur(clamp(20px, 3vw, 40px))',
                                    }}
                                />
                                {/* Animated Clouds */}
                                <motion.div
                                    className="absolute top-[20%] left-[50%] w-[12vw] h-[3vw] bg-white rounded-t-full opacity-50 blur-sm"
                                    animate={{
                                        x: [-50, 50, -50],
                                        opacity: [0.3, 0.7, 0.3]
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                                <motion.div
                                    className="absolute top-[40%] left-[30%] w-[16vw] h-[3.5vw] bg-white rounded-t-full opacity-40 blur-sm"
                                    animate={{
                                        x: [30, -30, 30],
                                        opacity: [0.2, 0.6, 0.2]
                                    }}
                                    transition={{
                                        duration: 10,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 2
                                    }}
                                />
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (
                    <LoginPage key="login" onBack={handleBackToLanding} />
                )}
            </AnimatePresence>
        </div>
    )
}

export default LandingPage_view