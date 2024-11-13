import React from 'react'
import Link from "next/link"

function Nav() {
  return (
    <nav className="flex-between flex w-full mb-16 relative border-b-2 border-slate-300">
        <Link href='/' className="p-2 ">
            <h1 className="logo_text pl-3 text-lg block font-medium text-slate-900"> EasyFarm.COM</h1> 
        </Link>
    </nav>
  )
}

export default Nav