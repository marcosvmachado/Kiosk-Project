'use client'

import { lensOptions } from "@/data/lenses"
import { AddItem } from "../../../components/addItem"
import { FilterBar } from "../../../components/filterBar"
import { ItemHeader } from "../../../components/itemHeader"
import { divFlexStyle, divInputStyle, inputStyle, divTableBodyStyle, divTableBodyStyleCompleted } from "@/data/styles/style"
import { LayoutPage } from "../../../components/layoutPage"
import { useState } from "react"
import { Lens } from "@/type/lens"
import { useLensContext } from "@/Contexts/lensContext"

export const Lenses = () => {

    const lensCtx = useLensContext()

    const [lenses, setLenses] = useState<Lens[]>([])

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

    const handleCompletedButton = (name: string, id: number) => {
        setLenses(prev => {
            return prev.map((item, index) => {
                if (index === id) {
                    return { ...item, completed: true }
                }
                return item
            })
        })
    }

    const handleDeleteButton = (id: number) => {
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
                id: lenses.length 
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

    return (

        <>
            <LayoutPage

                titlePage={"ACOMPANHAMENTO DE LENTES"}

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

                itemHeader={<ItemHeader
                    titles={['DATA', 'NOME DO CLIENTE', 'TELEFONE', 'OS', 'LENTE', "DIOPTRIA", "CATEGORIA", 'CONCLUÍDO?']}
                />}

                itemRender={
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

export default Lenses