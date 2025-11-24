'use client'

import { lensOptions } from "@/data/lenses"
import { AddItem } from "../../../components/addItem"
import { FilterBar } from "../../../components/filterBar"
import { ItemHeader } from "../../../components/itemHeader"
import { divFlexStyle, divInputStyle, inputStyle, divTableBodyStyle } from "@/data/styles/style"
import { LayoutPage } from "../../../components/layoutPage"
import { useState } from "react"

export const Called = () => {

    const [called, setCalled] = useState([{
    date: "24/08/2025",
    name: "Jõao",
    phone: "(67)99317-8257",
    protocol: "45678",
    reason: "Chillivision Prime Blue 1.59",
    category: 'Grau'
    }])
    
    const [dateValue, setDateValue] = useState("")
    const [nameValue, setNameValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [protocolValue, setProtocolValue] = useState("")
    const [reasonValue, setReasonValue] = useState("")
    
    const handleFilterButton = () => {

    }
    const handleAddButton = () => {
       
        if (dateValue.trim() || nameValue.trim() || phoneValue.trim() || protocolValue.trim() || reasonValue.trim() === ''){
            alert("PREENCHA TODOS OS CAMPOS!")
        } else {
            setCalled(prev => [...prev, {
                date: dateValue,
                name: nameValue,
                phone: phoneValue,
                protocol: protocolValue,
                reason: reasonValue,
                category: ''
            }])
       } 
    
       setDateValue('')
       setNameValue('')
       setPhoneValue('')
       setProtocolValue('')
       setReasonValue('')
    
    }

    return (

        <>
            <LayoutPage

                titlePage={"PÓS VENDA"}

                filterBar={<FilterBar
                    selectedOptions={lensOptions}
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
                                    value={dateValue}
                                    onChange={e => setDateValue(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <input 
                                    type="text" 
                                    className={inputStyle} 
                                    placeholder="NOME DO CLIENTE..." 
                                    value={nameValue}
                                    onChange={e => setNameValue(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <input 
                                    type="text" className={inputStyle} 
                                    placeholder="TELEFONE..." 
                                    value={phoneValue}
                                    onChange={e => setPhoneValue(e.target.value)}
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
                                    value={reasonValue}
                                    onChange={e => setReasonValue(e.target.value)}
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

                itemHeader={<ItemHeader
                    titles={['DATA', 'NOME DO CLIENTE', 'TELEFONE', 'O QUE COMPROU ?', 'COMPLEMENTO ?', "FREQUÊNCIA", 'CONCLUÍDO?']}
                />}

                itemRender={
                    called.map(item => (
                        <div className="w-full h-[30px] flex">
                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.date}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.name}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.phone}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.protocol}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div title={item.reason} className={divTableBodyStyle}>{item.reason}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.category}</div>
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
export default Called
