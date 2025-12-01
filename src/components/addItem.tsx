type Props = {
    onAdd: () => void
    inputs: any
}

export const AddItem = ( { onAdd, inputs} : Props ) => {
      
    return (
        <>
            {inputs}        
            <div className="flex-1 flex justify-center items-center">
                <div className="w-[90%] h-[50%]">
                    <button onClick={onAdd} className="bg-blue-500 rounded-md cursor-pointer w-full h-full font-bold">ADICIONAR</button>
                </div>
            </div>
            </>
    )
}