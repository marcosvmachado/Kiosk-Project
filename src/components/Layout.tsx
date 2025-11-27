import Link from "next/link"
import { ReactNode } from "react"

type Props = {
    children?: ReactNode
    activePage?: string
}

export const Layout = ({ activePage, children }: Props) => {

    const menuItemStyle = "px-[10px] py-[5px] font-bold hover:bg-[#ffb200] cursor-pointer"
    {/* const pages = ["Página Inicial", "Acomp. de Chamados", "Acomp. de Lentes", "Pós venda"]*/}
    const pages = [
        {pageName: 'Página Inicial', route: ''},
        {pageName: 'Acomp. de Chamados', route: 'Pages/called'},
        {pageName: 'Acomp. de Lentes', route: 'Pages/lens'},
        {pageName: 'Pós venda', route: 'Pages/afterSale'},
    ]

    return (
        
        <div className="w-screen h-screen bg-white flex flex-col">
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
                                {pages.map(item => (
                                    <li key={item.pageName} className={`${menuItemStyle} ${activePage === item.pageName ? 'bg-[#ffb200]' : ''}`}><Link href={item.route}>{item.pageName}</Link></li>
                                ))}
                                    
                    </ul>
                   </div>
                </div>         
            </div>
            <div className="w-full h-[4px] bg-black"></div>
            <div className="flex-18 mt-5">
                {children}
            </div>
        </div>
    )
}
