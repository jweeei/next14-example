"use client"
import { signOut } from 'next-auth/react'

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
}

export default function LogoutBtn() {
  return (
    <>
      <button
        onClick={() => signOut()}
        className="w-20 g-slate-900 rounded-md"
      >登出</button>
    </>
  )
}
