import { divFlexStyle, divTableTitleStyle } from "@/styles/style"

type Props = {
    titles: string[]
}

export const TableHeaderRow = ( {titles}: Props ) => {
    return (
        <>
            {titles.map((item, index) => (
                <div className={divFlexStyle}>
                    <div className={divTableTitleStyle}>{item}</div>     
                </div>
            ))}
                    
        </>
    )
}