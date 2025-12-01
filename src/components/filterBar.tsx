import { useLensContext } from "@/Contexts/lensContext"


type Props = {
    inputs?: { placeholder?: string, type: string }[]
    selectedOptions: string[]
    onFilter: () => void
}

export const FilterBar = ( {inputs, selectedOptions, onFilter}: Props ) => {
    
const lensCtx = useLensContext()

    return (          
            <>
                <div>
                    <input className="border-1 border-gray-500" type="date" value={lensCtx?.fromDate} onChange={e => lensCtx?.setFromDate(e.target.value)}/> 
                    <span className="mx-2">A</span> 
                    <input className="border-1 border-gray-500" type="date" value={lensCtx?.toDate} onChange={e => lensCtx?.setToDate(e.target.value)}/>
                </div>
                
                <select 
                className="outline-none"
                onChange={e => lensCtx?.setLensOption(e.target.value)}
                >
                    <option value="">SELECIONE A CATEGORIA</option>
                    {selectedOptions?.map((item, index) => (
                        <option value={item}>{item}</option>
                    ))}
                </select>
                
                <button onClick={onFilter} className="p-2 cursor-pointer rounded-md bg-blue-500 text-white font-bold">FILTRAR</button>
            </>
    )
}

