import React from 'react'

const HomeBgText = () => {
    return (
        <div> <div className="absolute top-[12vh] left-1/2 -translate-x-1/2 flex justify-center items-center z-15">
            <h1
                className="font-extrabold text-white tracking-wide select-none text-center
               text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem]
               transform scale-y-125 sm:scale-y-230 lg:scale-y-175
               scale-x-105 sm:scale-x-120 lg:scale-x-140
               drop-shadow-[0_-4px_6px_rgba(200,200,200,0.25)]
               sm:drop-shadow-[0_-6px_8px_rgba(200,200,200,0.25)]
               lg:drop-shadow-[0_-8px_10px_rgba(200,200,200,0.25)]">
                Explore
            </h1>
        </div>

            {/* Discover */}
            <div className="absolute top-[32vh] lg:top-[36vh] left-1/2 -translate-x-1/2 flex justify-center items-center z-15">
                <h1
                    className="font-extrabold text-white tracking-wide select-none text-center
               text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[9rem]
               transform scale-y-130 sm:scale-y-220 lg:scale-y-180
               scale-x-100 sm:scale-x-110 lg:scale-x-120
               drop-shadow-[0_-4px_6px_rgba(200,200,200,0.25)]
               sm:drop-shadow-[0_-6px_8px_rgba(50,50,50,0.25)]
               lg:drop-shadow-[0_-8px_10px_rgba(50,50,50,0.25)]">
                    Discover
                </h1>
            </div>

            {/* Share */}
            <div className="absolute top-[52vh] lg:top-[61vh] left-1/2 -translate-x-1/2 flex justify-center items-center z-15">
                <h1
                    className="font-extrabold text-white tracking-wide select-none text-center
               text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[9rem]
               transform scale-y-130 sm:scale-y-220 lg:scale-y-180
               scale-x-110 sm:scale-x-130 lg:scale-x-150
               drop-shadow-[0_-4px_6px_rgba(200,200,200,0.25)]
               sm:drop-shadow-[0_-6px_8px_rgba(0,0,0,0.25)]
               lg:drop-shadow-[0_-8px_10px_rgba(0,0,0,0.25)]">
                    Share
                </h1>
            </div>
        </div>
    )
}

export default HomeBgText
