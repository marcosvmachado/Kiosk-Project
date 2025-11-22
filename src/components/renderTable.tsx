import { divFlexStyle, divTableBodyStyle } from "@/data/styles/style"

type LensType = {
    date: string
    name: string
    phone: string
    order: string
    lens: string
    category: string
}

type CalledType = {
    date: string
    protocol: string
    name: string
    reason: string
}

type Props = {
    data: Array<LensType | CalledType>
}

export const RenderTable = ( {data}: Props ) => {
    return (
        <>
            
        </>
    )
}