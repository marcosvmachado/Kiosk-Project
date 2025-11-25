"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

type Props = {
    children?: ReactNode
    activePage?: string
}

export const Layout1 = ({ activePage, children }: Props) => {

    const pathname = usePathname()
   
    const menuItemStyle = "px-[10px] py-[5px] font-bold hover:bg-[#ffb200] cursor-pointer"
    {/* const pages = ["Página Inicial", "Acomp. de Chamados", "Acomp. de Lentes", "Pós venda"]*/}
    const pages = [
        {pageName: 'Página Inicial', route: '/pages/home'},
        {pageName: 'Acomp. de Chamados', route: '/pages/called'},
        {pageName: 'Acomp. de Lentes', route: '/pages/lens'},
        {pageName: 'Pós venda', route: '/pages/afterSale'},
    ]

    return (
        <div className="w-screen h-screen flex flex-col">
            <div className="flex-2 flex bg-[#1e3a5f]">
                <div className="flex justify-center w-full h-full">
                   <div className="container flex">
                     <ul className="flex items-center">
                        {/*    
                        <li className={`${menuItemStyle} ${activePage === item ? 'bg-[#ffb200]' : ''}`}>Página Inicial</li>
                        <li className={`${menuItemStyle} ${activePage === item ? 'bg-[#ffb200]' : ''}`}>Acomp. de Chamados</li>      
                        <li className={`${menuItemStyle} ${activePage === item ? 'bg-[#ffb200]' : ''}`}>Acomp. de Lentes</li>
                        <li className={`${menuItemStyle} ${activePage === item ? 'bg-[#ffb200]' : ''}`}>Pós venda</li>
                        */} 
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
            <div className="flex-18">
                {children}
            </div>
            <div className="w-full h-[4px] bg-black"></div>
            <div className="h-[5%] w-full bg-[#1e3a5f] flex justify-center items-center">
                <span className="">Develop by Marquito do Rolimã</span>
            </div>
        </div>
    )
}
export default Layout1
