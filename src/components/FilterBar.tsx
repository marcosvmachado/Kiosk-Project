
import { useLensContext } from "@/Contexts/lensContext"

type Props = {
    inputs?: { placeholder?: string, type: string }[]
    selectedOptions: string[]
    onFilter: () => void
    optionValue: string
    setOptionValue: ( item: string ) => void
    fromDateValue: string
    setFromDateValue: ( item: string ) => void
    toDateValue: string
    setToDateValue: ( item: string ) => void
}

export const FilterBar = ( { fromDateValue, setFromDateValue, toDateValue, setToDateValue, optionValue, setOptionValue, selectedOptions, onFilter}: Props ) => {

    return (          
            <>
                <div>
                    <input className="border-2 border-gray-500" type="date" value={fromDateValue} onChange={e => setFromDateValue(e.target.value)}/> 
                    <span className="mx-2">A</span> 
                    <input className="border-2 border-gray-500" type="date" value={toDateValue} onChange={e => setToDateValue(e.target.value)}/>
                </div>
                
                <select 
                className="outline-none border-2 p-1 px-5 border-[#494949] rounded-md"
                value={optionValue}
                onChange={e => { setOptionValue(e.target.value) }}
                >
                    <option value="">SELECIONE A OPÇÃO:</option>
                    {selectedOptions?.map((item, index) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
                
                <button onClick={onFilter} className="p-2 cursor-pointer rounded-md bg-blue-500 text-white font-bold">FILTRAR</button>
            </>
    )
}


