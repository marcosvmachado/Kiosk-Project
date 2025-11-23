import { divFlexStyle, divTableBodyStyle } from "@/data/styles/style"
import { ItemHeader } from "./itemHeader"
import { AddItem } from "./addItem"
import { FilterBar } from "./filterBar"
import { Component } from "react"

type Props = {
    filterBar: React.ReactNode
    addItem: React.ReactNode
    itemHeader: React.ReactNode
    itemRender: any
    titlePage: string
}

export const LayoutPage = ({ filterBar, addItem, itemHeader, itemRender, titlePage }: Props) => {

    const handleFilterButton = () => {

    }

    return (

        <div className="w-full h-full flex justify-center">

            <div className="w-full h-full flex flex-col container">

                <div className="flex-3 flex justify-between items-center ">

                    <h1 className="font-extrabold text-2xl text-black">{titlePage}</h1>

                    <div className="text-black h-[60px] w-[800px] flex justify-between px-4 items-center border-3 border-[#494949] rounded-md">
                        {filterBar}
                    </div>

                </div>

                <div className="w-full h-[4px] bg-black"></div>

                <div className="flex-2 flex">
                    {addItem}
                </div>

                <div className="flex-15 flex flex-col">
                    <div className="w-full h-[30px] flex">
                        {itemHeader}
                    </div>

                    {itemRender}

                </div>

            </div>

        </div>
    )
}