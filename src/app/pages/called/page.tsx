'use client'

import { calledOptions, lensOptions } from "@/data/lenses"
import { AddItem } from "../../../components/addItem"
import { FilterBar } from "../../../components/filterBar"
import { ItemHeader } from "../../../components/itemHeader"
import { divFlexStyle, divInputStyle, inputStyle, divTableBodyStyle, divTableBodyStyleCompleted } from "@/data/styles/style"
import { LayoutPage } from "../../../components/layoutPage"
import { useEffect, useState } from "react"
import { CalledType } from "@/type/called"

const Called = () => {

    const [called, setCalled] = useState<CalledType[]>([])
 
    const [dateValue, setDateValue] = useState("")
    const [nameValue, setNameValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [protocolValue, setProtocolValue] = useState("")
    const [reasonValue, setReasonValue] = useState("")
    const [categoryValue, setCategoryValue] = useState("")
    
    const handleFilterButton = () => {
        alert("Funcionalidade ainda não disponível!")
    }
    const handleAddButton = () => {
       
        if ([dateValue, nameValue, phoneValue, reasonValue, categoryValue].some(e => e.trim() === '')){
            alert("PREENCHA TODOS OS CAMPOS!")
        } else {
            setCalled(prev => [...prev, {
                date: dateValue,
                name: nameValue,
                phone: phoneValue,
                protocol: protocolValue,
                reason: reasonValue,
                completed: false,
                id: called.length,
                category: categoryValue
            }])
       } 
    
       setDateValue('')
       setNameValue('')
       setPhoneValue('')
       setProtocolValue('')
       setReasonValue('')
       setCategoryValue('')
    
    }

        const handleCompletedButton = (name: string, id: number) => {
        setCalled(prev => {
            return prev.map((item, index) => {
                if (index === id) {
                    return { ...item, completed: true }
                }
                return item
            })
        })
    }

    const handleDeleteButton = (id: number) => {
        setCalled(prev => prev.filter(item => item.id !== id))
    }
    
    useEffect(() => {

    const saved = localStorage.getItem("CalledStorage")

    if (saved) { 
    setCalled(JSON.parse(saved)) 
    }

    },[])
    
    useEffect(() => {

    localStorage.setItem("CalledStorage", JSON.stringify(called))

    },[called])
   
    return (

        <>
            <LayoutPage

                titlePage={"ACOMPANHAMEN. DE CHAMADOS"}

                filterBar={<FilterBar
                    selectedOptions={calledOptions}
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
                                    <input 
                                    type="text" className={inputStyle} 
                                    placeholder="PROTOCOLO..." 
                                    value={protocolValue}
                                    onChange={e => setProtocolValue(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <input 
                                    type="text" className={inputStyle} 
                                    placeholder="MOTIVO..." 
                                    value={reasonValue}
                                    onChange={e => setReasonValue(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <select name="" id="" className="text-gray-500 w-full h-full" value={categoryValue} onChange={e => setCategoryValue(e.target.value) } >
                                        <option value="">CATEGORIA...</option>
                                        <option value="GRAU">GRAU</option>
                                        <option value="SOLAR">SOLAR</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    }
                />

                }

                itemHeader={<ItemHeader
                    titles={['DATA', 'NOME DO CLIENTE', 'TELEFONE', 'PROTOCOLO', 'MOTIVO', "CATEGORIA", 'CONCLUÍDO?']}
                />}

                itemRender={
                    called.map((item, index) => (
                       <div className="w-full h-[30px] flex">
                            <div className={divFlexStyle}>
                                <div className={`${item.completed ? `${divTableBodyStyleCompleted}` : `${divTableBodyStyle}`}`}>{item.date}</div>
                            </div>
                       
                             <div className={divFlexStyle}>
                                 <div className={`${item.completed ? `${divTableBodyStyleCompleted}` : `${divTableBodyStyle}`}`}>{item.name}</div>
                            </div>
                       
                            <div className={divFlexStyle}>
                                 <div className={`${item.completed ? `${divTableBodyStyleCompleted}` : `${divTableBodyStyle}`}`}>{item.phone}</div>
                             </div>
                   
                            <div className={divFlexStyle}>
                                 <div title={item.protocol} className={`${item.completed ? `${divTableBodyStyleCompleted}` : `${divTableBodyStyle}`}`}>{item.protocol}</div>
                             </div>
                       
                            <div className={divFlexStyle}>
                                 <div title={item.reason} className={`${item.completed ? `${divTableBodyStyleCompleted}` : `${divTableBodyStyle}`}`}>{item.reason}</div>
                            </div>
                       
                             <div className={divFlexStyle}>
                                 <div className={`${item.completed ? `${divTableBodyStyleCompleted}` : `${divTableBodyStyle}`}`}>{item.category}</div>
                             </div>

                            <div className={divFlexStyle}>
                                 {item.completed
                                    ? <button className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold" onClick={() => { handleDeleteButton(index) }}>EXCLUIR</button>
                                    : <button className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold" onClick={() => { handleCompletedButton(item.name, index) }}>CONCLUIR</button>
                                }
                            </div>
                        </div>
                    ))
                }
            />


        </>
    )
}
export default Called
