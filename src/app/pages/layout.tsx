"use client"

import { menuItemStyle } from "@/styles/style"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

const Layout = ({ children }: Props) => {

    const pathname = usePathname()
   
    const pages = [
        {pageName: 'Página Inicial', route: '/pages/home'},
        {pageName: 'Acomp. de Chamados', route: '/pages/calls'},
        {pageName: 'Acomp. de Lentes', route: '/pages/lenses'},
        {pageName: 'Pós venda', route: '/pages/after-sale'},
    ]

    return (
        <div className="w-screen h-screen flex flex-col text-white">
            <div className="flex-2 flex bg-[#1e3a5f]">
                <div className="flex justify-center w-full h-full">
                   <div className="container flex">
                     <ul className="flex items-center">
                                {pages.map((item) => {
                                    const isActive = pathname === item.route
                                    return (
                                        <li key={item.pageName} className={`${menuItemStyle} ${isActive ? 'bg-[#ffb200]' : ''}`}><Link href={item.route}>{item.pageName}</Link></li>
                                    )
                                })}                      
                    </ul>
                   </div>
                </div>         
            </div>
            <div className="w-full h-[4px] bg-black"></div>
            <div className="flex-18 min-h-0">
                {children}
            </div>
            <div className="w-full h-[4px] bg-black"></div>
            <div className="h-[5%] w-full bg-[#1e3a5f] flex justify-center items-center">
                <span className="">Develop by Marquito do Rolimã</span>
            </div>
        </div>
    )
}
export default Layout
