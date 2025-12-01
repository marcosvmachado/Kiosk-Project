'use client'

import { TableHeaderRow } from "../../../components/TableHeaderRow"
import { divFlexStyle, divInputStyle, inputStyle, divTableBodyStyle } from "@/styles/style"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { LensOptions } from "@/data/lenses"
import { FilterBar } from "@/components/FilterBar"
import { LayoutPage } from "@/components/LayoutPage"
import { AddItem } from "@/components/AddItem"

const AfterSale = () => {

   const [afterSale, setAfterSale] = useState<string[]>([])
      
    const handleFilterButton = () => {

    }
    const handleAddButton = () => {
       
    }

    const router = useRouter()

    return (
        
        <>
           { 
                
                useEffect(() => {
                alert("Página ainda não disponível");
                router.push("/pages/home");
                }, [])

            }
            
            <LayoutPage

                titlePage={"PÓS VENDA"}

                filterBar={<FilterBar
                    selectedOptions={LensOptions}
                    onFilter={handleFilterButton}
                />}

                addItem={<AddItem
                    onAdd={handleAddButton}
                    inputs={
                        <>
                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <input 
                                    type="date" className={inputStyle} 
                                    placeholder="DATA..." 
                                    
                                    />
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <input 
                                    type="text" 
                                    className={inputStyle} 
                                    placeholder="NOME DO CLIENTE..." 
                                   
                                    />
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <input 
                                    type="text" className={inputStyle} 
                                    placeholder="TELEFONE..." 
                                    
                                    />
                                </div>
                            </div>

                           <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <select name="" id="" className="text-gray-500 w-full h-full">
                                        <option value="">O QUE COMPROU ?</option>
                                        <option value="">GRAU</option>
                                        <option value="">SOLAR</option>
                                    </select>
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <input 
                                    type="text" className={inputStyle} 
                                    placeholder="COMPLEMENTO..." 
                                   
                                    />
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <select name="" id="" className="text-gray-500 w-full h-full">
                                        <option value="">CONTATO FEITO HÁ?</option>
                                        <option value="">15 DIAS</option>
                                        <option value="">3 MESES</option>
                                        <option value="">12 MESES</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    }
                />

                }

                tableHeaderRow={<TableHeaderRow
                
                    titles={['DATA', 'NOME DO CLIENTE', 'TELEFONE', 'O QUE COMPROU ?', 'COMPLEMENTO ?', "FREQUÊNCIA", 'CONCLUÍDO?']}
                />}

                tableBodyRow={
                    afterSale.map(item => (
                        <div className="w-full h-[30px] flex">
                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}></div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}></div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}></div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}></div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}></div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}></div>
                            </div>

                            <div className={divFlexStyle}>
                                <button className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold">CONCLUIR</button>
                            </div>
                        </div>
                    ))
                }
            />
        </>
    )
}
export default AfterSale
