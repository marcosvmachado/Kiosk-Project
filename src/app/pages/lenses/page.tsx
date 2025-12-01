'use client'

import { AddItem } from "../../../components/AddItem"
import { FilterBar } from "../../../components/FilterBar"
import { TableHeaderRow } from "../../../components/TableHeaderRow"
import { divFlexStyle, divInputStyle, inputStyle, divTableBodyStyle, divTableBodyStyleCompleted } from "@/styles/style"
import { useEffect, useState } from "react"
import { LensType } from "@/types/lens"
import { LayoutPage } from "@/components/LayoutPage"
import { LensOptions } from "@/data/lenses"

const Lenses = () => {

    const [lenses, setLenses] = useState<LensType[]>([])

    const [dateValue, setDateValue] = useState("")
    const [nameValue, setNameValue] = useState("")
    const [phoneValue, setPhoneValue] = useState("")
    const [orderValue, setOrderValue] = useState("")
    const [lensValue, setLensValue] = useState("")
    const [categoryValue, setCategoryValue] = useState("")
    const [diopterValue, setDiopterValue] = useState("")

    const handleFilterButton = () => { 
        
    alert("Funcionalidade ainda não disponível!")

    }

    const handleCompletedButton = (id: string) => {
        setLenses(prev => {
            return prev.map((item, index) => {
                if (item.id === id) {
                    return { ...item, completed: true }
                }
                return item
            })
        })
    }

    const handleDeleteButton = (id: string) => {
        setLenses(prev => prev.filter(item => item.id !== id))
    }

    const handleAddButton = () => {

        if ([dateValue, nameValue, phoneValue, orderValue, lensValue, categoryValue].some(e => e.trim() === '')) {
            alert("PREENCHA TODOS OS CAMPOS!")
        } else {
            setLenses(prev => [...prev, {
                date: dateValue,
                name: nameValue,
                phone: phoneValue,
                order: orderValue,
                lens: lensValue,
                category: categoryValue,
                completed: false,
                diopter: diopterValue,
                id: crypto.randomUUID() 
            }])
            setDateValue('')
            setNameValue('')
            setPhoneValue('')
            setOrderValue('')
            setLensValue('')
            setDiopterValue('')
            setCategoryValue('')

        }

    }
    
    useEffect(() => {

        const saved = localStorage.getItem('lentes')

        if(saved) {
            setLenses(JSON.parse(saved))
        }

    },[])
    
    useEffect(() => {

        localStorage.setItem('lentes', JSON.stringify(lenses))

    },[lenses])
    

    return (

        <>
            <LayoutPage

                titlePage={"ACOMPANHAMEN. DE LENTES"}

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
                                        placeholder="ORDEM DE SERVIÇO..."
                                        value={orderValue}
                                        onChange={e => setOrderValue(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <input
                                        type="text" className={inputStyle}
                                        placeholder="LENTE..."
                                        value={lensValue}
                                        onChange={e => setLensValue(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <input
                                        type="text" className={inputStyle}
                                        placeholder="DIOPTRIA"
                                        value={diopterValue}
                                        onChange={e => setDiopterValue(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <select name="" id="" className="text-gray-500 w-full h-full" value={categoryValue} onChange={e => setCategoryValue(e.target.value)}>
                                        <option value="">CATEGORIA...</option>
                                        <option value="Visão Simples">Visão Simples</option>
                                        <option value="Multifocal">Multifocal</option>
                                    </select>
                                </div>
                            </div>
                        </>
                    }
                />

                }

                tableHeaderRow={<TableHeaderRow
                    titles={['DATA', 'NOME DO CLIENTE', 'TELEFONE', 'OS', 'LENTE', "DIOPTRIA", "CATEGORIA", 'CONCLUÍDO?']}
                />}

                tableBodyRow={
                    lenses.map((item, index) => (
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
                                <div className={`${item.completed ? `${divTableBodyStyleCompleted}` : `${divTableBodyStyle}`}`}>{item.order}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div title={item.lens} className={`${item.completed ? `${divTableBodyStyleCompleted}` : `${divTableBodyStyle}`}`}>{item.lens}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div title={item.diopter} className={`${item.completed ? `${divTableBodyStyleCompleted}` : `${divTableBodyStyle}`}`}>DIOPTRIA</div>
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
            />
        </>
    )
}

export default Lenses