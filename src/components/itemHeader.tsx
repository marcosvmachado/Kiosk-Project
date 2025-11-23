import { divFlexStyle, divInputStyle, inputStyle, divTableTitleStyle } from "@/data/styles/style"

type Props = {
    titles: string[]
}

export const ItemHeader = ( {titles}: Props ) => {
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