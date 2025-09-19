'use client'
import React, { useState } from 'react'
import { Button } from '@mui/material'
import { Github, Search, X } from 'lucide-react'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm pr-6">
            {/* Left Section */}
            <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                    <Github className="h-7 w-7" />
                    <h1 className="text-2xl font-bold">RepoFinder</h1>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6">
                    <h2 className="hover:scale-105 hover:text-primary cursor-pointer transition">Categories</h2>
                    <h2 className="hover:scale-105 hover:text-primary cursor-pointer transition">Trending</h2>
                    <h2 className="hover:scale-105 hover:text-primary cursor-pointer transition">Submit</h2>
                </nav>
            </div>

            {/* Right Section */}
            <div className="flex gap-4 items-center">
                {/* Desktop Search */}
                <div className="hidden md:flex gap-2 items-center border rounded-full p-2 px-4 bg-white/10 backdrop-blur-md">
                    <Search className="h-5 w-5" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="outline-none bg-transparent text-white placeholder-gray-300"
                    />
                </div>

                {/* Buttons */}
                <div className="flex gap-4 items-center">
                    <Button variant="outlined" color="primary">
                        Sign In
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 rounded hover:bg-white/10 transition"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X className="h-6 w-6" /> : '☰'}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="absolute top-full left-0 right-6 bg-white/10 backdrop-blur-lg shadow-lg flex flex-col gap-4 p-6 md:hidden rounded-b-2xl animate-[slideDown_0.3s_ease-out]">
                    <h2 className="hover:scale-105 hover:text-primary cursor-pointer transition">Categories</h2>
                    <h2 className="hover:scale-105 hover:text-primary cursor-pointer transition">Trending</h2>
                    <h2 className="hover:scale-105 hover:text-primary cursor-pointer transition">Submit</h2>

                    {/* Search inside dropdown */}
                    <div className="flex gap-2 items-center border rounded-full p-2 px-4 bg-white/20">
                        <Search className="h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none bg-transparent text-white placeholder-gray-200 flex-1"
                        />
                    </div>

                    {/* Sign in Button */}
                    <Button variant="contained" color="primary">
                        Sign In
                    </Button>
                </div>
            )}
        </header>
    )
}

export default Header