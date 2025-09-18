'use client'
import React from 'react'
import { Button } from '@mui/material'
import { Github, Search } from 'lucide-react'

const Header = () => {
    return (
        <div className='p-4 shadow-sm flex justify-between'>
            <div className='flex items-center gap-8'>
                <div className='flex items-center gap-2'>
                    <Github className='h-7 w-7' />
                    <h1 className='text-2xl font-bold'>RepoFinder</h1>
                </div>
                <div className='md:flex items-center gap-6 hidden'>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Categories</h2>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Trending</h2>
                    <h2 className='hover:scale-105 hover:text-primary cursor-pointer'>Submit</h2>
                </div>
            </div>
            <div className='flex gap-4 items-center'>
                <div className='md:flex gap-2 items-center border rounded-full p-2 px-4 hidden'>
                    <Search className='h-5 w-5' />
                    <input type='text' placeholder='Search...' className='outline-none' />
                </div>
                <div className='flex gap-4 items-center'>
                    <Button variant='outlined' color='primary'>sign in</Button>
                </div>
            </div>
        </div>
    )
}

export default Header
