'use client'

import { AddItem } from "../../../components/AddItem"
import { FilterBar } from "../../../components/FilterBar"
import { TableHeaderRow } from "../../../components/TableHeaderRow"
import { LayoutPage } from "../../../components/LayoutPage"
import { divFlexStyle, divInputStyle, inputStyle, divTableBodyStyle, divTableBodyStyleCompleted } from "@/styles/style"
import { useEffect, useState } from "react"
import { CallsType } from "@/types/calls"
import { callOptions } from "@/data/calls"

const Calls = () => {

    const [filter, setFilter] = useState<boolean>(false)
    
    const [loaded, setLoaded] = useState(false)

    const [calls, setCalls] = useState<CallsType[]>([])
 
    const [dateValue, setDateValue] = useState("")
    const [nameValue, setNameValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [protocolValue, setProtocolValue] = useState("")
    const [reasonValue, setReasonValue] = useState("")
    const [categoryValue, setCategoryValue] = useState("")
    
    const [optionValue, setOptionValue] = useState("")
    const [fromDateValue, setFromDateValue] = useState("")
    const [toDateValue, setToDateValue] = useState("")

    const [callsFiltered, setCallsFiltered] = useState<CallsType[]>([])
 
    const handleFilterButton = () => {
        
        setCallsFiltered(calls)
        if(optionValue !== ''){
            setCallsFiltered(prev => prev.filter(item => item.category === optionValue))
        }
            
        setFilter(true)
        
        if(fromDateValue && toDateValue !== ''){
            setCallsFiltered(prev => prev.filter(item => 
            item.date >= fromDateValue 
            &&
            item.date <= toDateValue
        ))}
    }
    const handleAddButton = () => {
       
        if ([dateValue, nameValue, phoneValue, protocolValue, reasonValue, categoryValue].some(e => e.trim() === '')){
            alert("PREENCHA TODOS OS CAMPOS!")
        } else {
            setCalls(prev => [...prev, {
                date: dateValue,
                name: nameValue,
                phone: phoneValue,
                protocol: protocolValue,
                reason: reasonValue,
                completed: false,
                id: crypto.randomUUID(),
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

        const handleCompletedButton = (id: string) => {
        setCalls(prev => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: true }
                }
                return item
            })
        })
        setCallsFiltered(prev => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: true }
                }
                return item
            })
        })
    }

    const handleDeleteButton = (id: string) => {
        setCalls(prev => prev.filter(item => item.id !== id))
        setCallsFiltered(prev => prev.filter(item => item.id !== id))    
    }
    
    const renderTableBodyRow = (state: any) => {
        return state.map((item: any, index: any) => (
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
                                    ? <button className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold" onClick={() => { handleDeleteButton(item.id) }}>EXCLUIR</button>
                                    : <button className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold" onClick={() => { handleCompletedButton(item.id) }}>CONCLUIR</button>
                                }
                            </div>
                        </div>
                    ))
                }
    
    useEffect(() => {

    const saved = localStorage.getItem("CallsStorage")

    if (saved) { 
    setCalls(JSON.parse(saved)) 
    }
    setLoaded(true)
    },[])
    
    useEffect(() => {

    if (!loaded) return
    localStorage.setItem("CallsStorage", JSON.stringify(calls))
    },[calls, loaded])
   
    return (

        <>
            <LayoutPage

                titlePage={"ACOMPANHAMEN. DE CHAMADOS"}

                filterBar={<FilterBar
                    fromDateValue={fromDateValue}
                    setFromDateValue={setFromDateValue}
                    toDateValue={toDateValue}
                    setToDateValue={setToDateValue}
                    optionValue={optionValue}
                    setOptionValue={setOptionValue}
                    selectedOptions={callOptions}
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

                tableHeaderRow={<TableHeaderRow
                    titles={['DATA', 'NOME DO CLIENTE', 'TELEFONE', 'PROTOCOLO', 'MOTIVO', "CATEGORIA", 'CONCLUÍDO?']}
                />}

                tableBodyRow={
                    
                    filter 
                            ? renderTableBodyRow(callsFiltered) 
                            : renderTableBodyRow(calls) 
                }
            />
        </>
    )
}
export default Calls