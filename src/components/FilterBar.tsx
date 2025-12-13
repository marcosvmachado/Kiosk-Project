
import { useLensContext } from "@/Contexts/lensContext"

type Props = {
    inputs?: { placeholder?: string, type: string }[]
    selectedOptions: string[]
    onFilter: () => void
    value: string
    setValue: ( item: string ) => void
}

export const FilterBar = ( { value, setValue, selectedOptions, onFilter}: Props ) => {
    
const lensCtx = useLensContext()

    return (          
            <>
                <div>
                    <input className="border-2 border-gray-500" type="date" value={lensCtx?.fromDate} onChange={e => lensCtx?.setFromDate(e.target.value)}/> 
                    <span className="mx-2">A</span> 
                    <input className="border-2 border-gray-500" type="date" value={lensCtx?.toDate} onChange={e => lensCtx?.setToDate(e.target.value)}/>
                </div>
                
                <select 
                className="outline-none border-2 p-1 px-5 border-[#494949] rounded-md"
                value={value}
                onChange={e => { setValue(e.target.value) }}
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


