import { createContext, ReactNode, useContext, useState } from "react";

type LensContextType = {
    lensOption: string
    setLensOption: (i: string) => void
    fromDate: string
    setFromDate: (i: string) => void
    toDate: string
    setToDate: (i: string) => void
}

export const LensContext = createContext<null | LensContextType>(null)

export const LensProvider = ( {children}: {children: ReactNode} ) => {
    
    const [lensOption, setLensOption] = useState('')
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    
    return (

    <LensContext.Provider value={ {
        lensOption, setLensOption,
        fromDate, setFromDate,
        toDate, setToDate
    } }>
        {children}
    </LensContext.Provider>
    
    )
}

export const useLensContext = () => useContext(LensContext)