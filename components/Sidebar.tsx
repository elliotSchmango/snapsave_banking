import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Sidebar = ({user}: SidebarProps) => {
  return (
    <section className="sidebar">
        <nav className = "flex flex-col gap-4">
            <Link href="/" className = "mb-10 cursor-pointer items-center gap-2">
                <Image 
                    src="/icons/logo.svg"
                    width={32}
                    height={32}
                    alt="Logo"
                    className = "size-[24px] max-xl:size-14"
                >
                        <h1 className="sidebar-logo">
                            Horizon
                        </h1>
                </Image>
            </Link>
        </nav>
    </section>
  )
}

export default Sidebar