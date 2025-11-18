"use client"
import React from 'react'

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import { Button } from '@repo/ui/components/ui/button'
import { ModeToggle } from '@repo/ui/components/themes/toogle'

type Props = {}

const Header = (props: Props) => {
    const router = useRouter();
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16 absolute w-full top-0 left-0 z-20 fixed">
                    <SignedOut>
                      <SignInButton />
                      <SignUpButton>
                        <button className="dark:bg-zinc-800 text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                          Sign Up
                        </button>
                      </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <Button  onClick={() => router.push("/dashboard")}>dashboard</Button>
                      <UserButton />
                    </SignedIn>
                    <ModeToggle/>
        
                  </header>
  )
}

export default Header