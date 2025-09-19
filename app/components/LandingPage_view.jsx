'use client'
import Image from 'next/image'
import React from 'react'
import HomeBgText from './HomeBgText'

const LandingPage_view = () => {
    return (
        <div className="relative h-screen overflow-x-hidden">

            <div className="absolute z-20 flex justify-center left-1/2 transform -translate-x-1/2 top-[70%] h-[70vh] w-[70vw] md:w-[55vw] lg:w-[70vw]">
                <Image
                    src="/mona-hubot-ce77f3cb7f46.webp"
                    alt="Description"
                    width={500}
                    height={500}
                />
            </div>

            <HomeBgText />

            {/* Background Glow */}
            <div className="absolute z-10 top-[57rem] w-screen h-[50vh] overflow-visible">
                <div
                    className="relative top-0 left-1/2 -translate-x-1/2 w-[130vw] h-[200vw] bg-black rounded-t-full"
                    style={{
                        maxWidth: '2000px',
                        maxHeight: '2000px',
                        overflow: 'hidden',
                        boxShadow: `
                          0 0 18vw rgba(0,80,250,0.5),
                          0 0 30vw rgba(255,255,255,0.3),
                          inset 0 0 2vw rgba(220,220,220,0.5),
                          inset 0 0 3vw rgba(0,100,255,0.3),
                          inset 0 0 3vw rgba(0,150,255,0.2)
                        `,
                    }}
                >
                    {/* Blue Lighting Effect Large */}
                    <div
                        className="absolute -top-[2vh] left-1/2 -translate-x-1/2 rounded-full opacity-80"
                        style={{
                            width: 'clamp(160px, 25vw, 380px)',
                            height: 'clamp(30px, 4vw, 120px)',
                            background:
                                'radial-gradient(circle, rgba(50,100,255,0.9) 40%, rgba(0,0,255,0.6) 70%, rgba(0,0,255,0.2) 100%)',
                            filter: 'blur(clamp(20px, 3vw, 40px))',
                        }}
                    ></div>

                    {/* White Lighting Effect Small */}
                    <div
                        className="absolute -top-[2vh] left-1/2 -translate-x-1/2 rounded-full opacity-70 
                          blur-[3vw] w-[80px] h-[50px] 
                          sm:w-[120px] sm:h-[70px] 
                          md:w-[180px] md:h-[120px] 
                          lg:w-[220px] lg:h-[100px]"
                        style={{
                            background:
                                'radial-gradient(circle, rgba(0,180,255,0.7) 80%, rgba(160,150,255,1) 90%)',
                        }}
                    ></div>

                    {/* Top Soft Gradient */}
                    <div
                        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[6%] blur-[4vw] opacity-80"
                        style={{
                            background:
                                'radial-gradient(ellipse at bottom, rgba(100,80,250,1) 70%, rgba(120,110,255,0.6) 85%, rgba(180,200,255,0.2) 100%)',
                        }}
                    ></div>

                    {/* Example Clouds */}
                    <div className="absolute top-[20%] left-[50%] w-[12vw] h-[3vw] bg-white rounded-t-full opacity-50 blur-sm animate-pulse"></div>
                    <div className="absolute top-[40%] left-[30%] w-[16vw] h-[3.5vw] bg-white rounded-t-full opacity-40 blur-sm animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage_view
