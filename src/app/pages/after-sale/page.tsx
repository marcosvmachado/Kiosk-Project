'use client'

import { TableHeaderRow } from "../../../components/TableHeaderRow"
import { divFlexStyle, divInputStyle, inputStyle, divTableBodyStyle, fifteenDaysStyle, threeMonthsStyle, sixMonthsStyle, nineMonthsStyle, oneYearStyle, divTableBodyStyleCompleted } from "@/styles/style"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { FilterBar } from "@/components/FilterBar"
import { LayoutPage } from "@/components/LayoutPage"
import { AddItem } from "@/components/AddItem"
import { afterSale } from "@/types/after-sale"
import { afterSaleOptions } from "@/data/after-sale"

const AfterSale = () => {

   const [afterSale, setAfterSale] = useState<afterSale[]>([])

   const [afterSaleFiltered, setAfterSaleFiltered] = useState<afterSale[]>([])
       
   const [dateValue, setDateValue] = useState('')
   const [nameValue, setNameValue] = useState('')
   const [phoneValue, setPhoneValue] = useState('')
   const [productValue, setProductValue] = useState('')
   const [complementValue, setComplementValue] = useState('')

   const [filtered, setFiltered] = useState(false)
   
   const [loaded, setLoaded] = useState(false)

   const [optionValue, setOptionValue] = useState("")

   const [fromDateValue, setFromDateValue] = useState("")

   const [toDateValue, setToDateValue] = useState("")
  
    const renderTableBodyRow = (state: any) => {
        return state.map((item : any) => (
                        <div className="w-full h-[30px] flex">
                            <div className={divFlexStyle}>
                                <div className={`${divTableBodyStyle}
                                ${item.fifteenDays && `${fifteenDaysStyle}`}
                                ${item.threeMonths && `${threeMonthsStyle}`}
                                ${item.sixMonths && `${sixMonthsStyle}`}
                                ${item.nineMonths && `${nineMonthsStyle}`}
                                ${item.oneYear && `${oneYearStyle}`}                              
                                `}>{item.date}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={`${divTableBodyStyle}
                                ${item.fifteenDays && `${fifteenDaysStyle}`}
                                ${item.threeMonths && `${threeMonthsStyle}`}
                                ${item.sixMonths && `${sixMonthsStyle}`}
                                ${item.nineMonths && `${nineMonthsStyle}`}
                                ${item.oneYear && `${oneYearStyle}`}                              
                                `}>{item.name}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={`${divTableBodyStyle}
                                ${item.fifteenDays && `${fifteenDaysStyle}`}
                                ${item.threeMonths && `${threeMonthsStyle}`}
                                ${item.sixMonths && `${sixMonthsStyle}`}
                                ${item.nineMonths && `${nineMonthsStyle}`}
                                ${item.oneYear && `${oneYearStyle}`}                               
                                `}>{item.phone}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={`${divTableBodyStyle}
                                ${item.fifteenDays && `${fifteenDaysStyle}`}
                                ${item.threeMonths && `${threeMonthsStyle}`}
                                ${item.sixMonths && `${sixMonthsStyle}`}
                                ${item.nineMonths && `${nineMonthsStyle}`}
                                ${item.oneYear && `${oneYearStyle}`}                                                         
                                `}>{item.product}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div title={item.complement} className={`${divTableBodyStyle}
                                ${item.fifteenDays && `${fifteenDaysStyle}`}
                                ${item.threeMonths && `${threeMonthsStyle}`}
                                ${item.sixMonths && `${sixMonthsStyle}`}
                                ${item.nineMonths && `${nineMonthsStyle}`}
                                ${item.oneYear && `${oneYearStyle}`}                                             
                                `}>{item.complement}</div>
                            </div>

                            <div className={divFlexStyle}>
                                {!item.initialButton && <button onClick={ () => { handleFifteenDaysButton(item.id) } } className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold">15 Dias</button>}
                                {item.fifteenDays && <button onClick={ () => { handleThreeMonthsButton(item.id) } } className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold">3 Meses</button>}
                                {item.threeMonths && <button onClick={ () => { handleSixMonthsButton(item.id) } } className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold">6 Meses</button>} 
                                {item.sixMonths && <button onClick={ () => { handleNineMonthsButton(item.id) } } className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold">9 Meses</button>}  
                                {item.nineMonths &&<button onClick={ () => { handleOneYearButton(item.id) } } className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold">1 Ano</button>}
                                {item.oneYear && <button onClick={ () => { handleDeleteButton(item.id) } } className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold">EXCLUIR</button>}
                            </div>
                        </div>
                    ))
    }
   
   const handleFilterButton = () => {

    setAfterSaleFiltered(afterSale)
    
    if (optionValue !== ''){
        setAfterSaleFiltered(prev => prev.filter(item => item.option === optionValue))
    }

    if (fromDateValue && toDateValue !== ''){
        setAfterSaleFiltered(prev => prev.filter(item => 
            item.date >= fromDateValue
            &&
            item.date <= toDateValue
        ))
    }
    
    setFiltered(true)
    
    setTimeout(() => {
        console.log(afterSale)
    }, 1000); 

    }
    const handleAddButton = () => {
       
    if([dateValue, nameValue, phoneValue, productValue, complementValue].some(item => item.trim() === '')){
        alert('PREENCHA TODOS OS CAMPOS')
    } else {
        setAfterSale( prev => [...prev, {
        date: dateValue,
        name: nameValue,
        phone: phoneValue,
        product: productValue,
        complement: complementValue,
        option:'',
        initialButton: false,
        fifteenDays: false,
        threeMonths: false,
        sixMonths: false,
        nineMonths: false,
        oneYear: false,
        id: crypto.randomUUID(),
        completed: false      
    }])
    }

    setDateValue('')
    setNameValue('')
    setPhoneValue('')
    setProductValue('')
    setComplementValue('')

    }

    const handleDeleteButton = (id: string) => {
        setAfterSale(prev => prev.filter(item => item.id !== id))
        setAfterSaleFiltered(prev => prev.filter(item => item.id !== id))
    }

    const handleFifteenDaysButton = (id: string) => {
        setAfterSale(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, initialButton: true, fifteenDays: true, threeMonths: false, sixMonths: false, nineMonths: false, oneYear: false, option: "15 DIAS"}
                } else {
                    return item
                }
            })
        })
        setAfterSaleFiltered(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, initialButton: true, fifteenDays: true, threeMonths: false, sixMonths: false, nineMonths: false, oneYear: false, option:"15 DIAS"}
                } else {
                    return item
                }
            })
        })
    }

    const handleThreeMonthsButton = (id: string) => {
        setAfterSale(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, fifteenDays: false, threeMonths: true, sixMonths: false, nineMonths: false, oneYear: false, option:"3 MESES"}
                } else {
                    return item
                }
            })
        })
        setAfterSaleFiltered(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, fifteenDays: false, threeMonths: true, sixMonths: false, nineMonths: false, oneYear: false, option:"3 MESES"}
                } else {
                    return item
                }
            })
        })
    }

    const handleCompletedButton = (id: string) => {
        setAfterSale(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, fifteenDays: false, threeMonths: false, sixMonths: false, nineMonths: false, oneYear: false, completed: true}
                } else {
                    return item
                }
            })
        })
        setAfterSaleFiltered(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, fifteenDays: false, threeMonths: false, sixMonths: false, nineMonths: false, oneYear: false, completed: true}
                } else {
                    return item
                }
            })
        })
    }

    const handleSixMonthsButton = (id: string) => {
        setAfterSale(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, fifteenDays: false, threeMonths: false, sixMonths: true, nineMonths: false, oneYear: false, option:"6 MESES"}
                } else {
                    return item
                }
            })
        })
        setAfterSaleFiltered(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, fifteenDays: false, threeMonths: false, sixMonths: true, nineMonths: false, oneYear: false, option:"6 MESES"}
                } else {
                    return item
                }
            })
        })
    }

    const handleNineMonthsButton = (id: string) => {
        setAfterSale(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, fifteenDays: false, threeMonths: false, sixMonths: false, nineMonths: true, oneYear: false, option:"9 MESES"}
                } else {
                    return item
                }
            })
        })
        setAfterSaleFiltered(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, fifteenDays: false, threeMonths: false, sixMonths: false, nineMonths: true, oneYear: false, option:"9 MESES"}
                } else {
                    return item
                }
            })
        })
    }

    const handleOneYearButton = (id: string) => {
        setAfterSale(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, fifteenDays: false, threeMonths: false, sixMonths: false, nineMonths: false, oneYear: true, option:"1 ANO"}
                } else {
                    return item
                }
            })
        })
        setAfterSaleFiltered(prev => {
            return prev.map(item => {
                if(item.id === id){
                    return {...item, fifteenDays: false, threeMonths: false, sixMonths: false, nineMonths: false, oneYear: true, option:"1 ANO"}
                } else {
                    return item
                }
            })
        })
    }

    useEffect( () => {
        const saved = localStorage.getItem('after-sale')
        if (saved) {
            setAfterSale(JSON.parse(saved))
        }
        setLoaded(true)

    },[])

    useEffect( () => {
        if(!loaded) return
        localStorage.setItem('after-sale', JSON.stringify(afterSale))
    },[afterSale, loaded])


    const router = useRouter()

    return (
        
        <>
            
            <LayoutPage

                titlePage={"PÓS VENDA"}

                filterBar={<FilterBar
                    fromDateValue={fromDateValue}
                    setFromDateValue={setFromDateValue}
                    toDateValue={toDateValue}
                    setToDateValue={setToDateValue}
                    optionValue={optionValue}
                    setOptionValue={setOptionValue}
                    selectedOptions={afterSaleOptions}
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
                                    <select value={productValue} onChange={e => setProductValue(e.target.value)} name="" id="" className="text-gray-500 w-full h-full">
                                        <option value="">O QUE COMPROU ?</option>
                                        <option value="GRAU">GRAU</option>
                                        <option value="SOLAR">SOLAR</option>
                                    </select>
                                </div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divInputStyle}>
                                    <input 
                                    type="text" className={inputStyle} 
                                    placeholder="COMPLEMENTO..."      
                                    value={complementValue}
                                    onChange={e => setComplementValue(e.target.value)}         
                                    />
                                </div>
                            </div>
                        </>
                    }
                />

                }

                tableHeaderRow={<TableHeaderRow
                
                    titles={['DATA', 'NOME DO CLIENTE', 'TELEFONE', 'O QUE COMPROU ?', 'COMPLEMENTO ?', 'CONCLUÍDO?']}
                />}

                tableBodyRow={
                    filtered ? renderTableBodyRow(afterSaleFiltered) : renderTableBodyRow(afterSale)
                }
            />
        </>
    )
}
export default AfterSale
