

export const Lenses = () => {
    
    const divInputStyle = "w-full mx-[4px] h-[35%] border-1 border-black"
    const inputStyle = "text-black placeholder:text-gray-500 w-full h-full p-2 text-center"
    
    const divTableTitleStyle = "w-full mx-[4px] bg-[#ffb200] text-center font-bold rounded"
    const divTableBodyStyle = "font-bold bg-[#494949] w-full mx-[4px] truncate text-center rounded"
    
    const divFlexStyle = "flex-1 flex justify-center items-center"
    
    const lenses = [
        {
            date: "24/08/2025",
            name: "Jõao",
            phone: "(67)99317-8257",
            order: "200Joao",
            lens: "Chillivision Prime Blue 1.59",
            category: "Visão simples"
        } ,
        {
            date: "24/08/2025",
            name: "Jõao",
            phone: "(67)99317-8257",
            order: "200Joao",
            lens: "Chillivision Prime Blue 1.59",
            category: "Visão simples"
        },
        {
            date: "24/08/2025",
            name: "Jõao",
            phone: "(67)99317-8257",
            order: "200Joao",
            lens: "Chillivision Prime Blue 1.59",
            category: "Visão simples"
        },
        {
            date: "24/08/2025",
            name: "Jõao",
            phone: "(67)99317-8257",
            order: "200Joao",
            lens: "Chillivision Prime Blue 1.59",
            category: "Visão simples"
        },
        {
            date: "24/08/2025",
            name: "Jõao",
            phone: "(67)99317-8257",
            order: "200Joao",
            lens: "Chillivision Prime Blue 1.59",
            category: "Visão simples"
        },
        {
            date: "24/08/2025",
            name: "Jõao",
            phone: "(67)99317-8257",
            order: "200Joao",
            lens: "Chillivision Prime Blue 1.59",
            category: "Visão simples"
        },
        {
            date: "24/08/2025",
            name: "Jõao",
            phone: "(67)99317-8257",
            order: "200Joao",
            lens: "Chillivision Prime Blue 1.59",
            category: "Visão simples"
        }
    ]
    
    return (
        <div className="w-full h-full flex justify-center">

            <div className="w-full h-full flex flex-col container">
            
                <div className="flex-3 flex justify-between items-center ">

                    <h1 className="font-extrabold text-2xl text-black">ACOMPANHAMENTO DE LENTES</h1>
                    <div className="text-black h-[60px] w-[800px] flex justify-between px-4 items-center border-3 border-[#494949] rounded-md">

                        <div>
                        <input className="border-1 border-gray-500" type="date" value="2025-08-24"/> 
                        <span className="mx-2">A</span> 
                        <input className="border-1 border-gray-500" value="2025-08-24" type="date" />
                        </div>

                        <select name="" id="" className="outline-none">
                            <option value="">SELECIONE A CATEGORIA</option>
                            <option value="">VISÃO SIMPLES</option>
                            <option value="">MULTIFOCAL</option>
                        </select>
                        <button className="p-2 cursor-pointer rounded-md bg-blue-500 text-white font-bold">FILTRAR</button>
                    </div>

                </div>

                <div className="w-full h-[4px] bg-black"></div>

                <div className="flex-2 flex">

                    <div className={divFlexStyle}>
                        <div className={divInputStyle}>
                            <input type="text" className={inputStyle} placeholder="DATA..."/>
                        </div>
                    </div>
                    
                    <div className={divFlexStyle}>
                        <div className={divInputStyle}>
                            <input type="text" className={inputStyle} placeholder="NOME DO CLIENTE..."/>
                        </div>
                    </div>
                    
                    <div className={divFlexStyle}>
                        <div className={divInputStyle}>
                            <input type="text" className={inputStyle} placeholder="TELEFONE..."/>
                        </div>
                    </div>
                    
                    <div className={divFlexStyle}>
                        <div className={divInputStyle}>
                            <input type="text" className={inputStyle} placeholder="ORDEM DE SERVIÇO..."/>
                        </div>
                    </div>
                    
                    <div className={divFlexStyle}>
                        <div className={divInputStyle}>
                            <input type="text" className={inputStyle} placeholder="LENTE..."/>
                        </div>
                    </div>

                    <div className={divFlexStyle}>
                        <div className={divInputStyle}>
                            <select name="" id="" className="text-gray-500 w-full h-full">
                                <option value="">CATEGORIA...</option>
                                <option value=""></option>
                                <option value=""></option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex justify-center items-center">
                       <div className="w-[90%] h-[35%]">
                            <button className="bg-blue-500 rounded-md cursor-pointer w-full h-full font-bold">ADICIONAR</button>
                       </div>
                    </div>

                </div>

                <div className="flex-15 flex flex-col">
                    <div className="w-full h-[30px] flex">
                        <div className={divFlexStyle}>
                            <div className={divTableTitleStyle}>DATA</div>     
                        </div>
                        
                        <div className={divFlexStyle}>
                            <div className={divTableTitleStyle}>NOME DO CLIENTE</div>
                        </div>
                        
                        <div className={divFlexStyle}>
                            <div className={divTableTitleStyle}>TELEFONE</div>
                        </div>
                        
                        <div className={divFlexStyle}>
                            <div className={divTableTitleStyle}>ORDEM DE SERVIÇO</div>
                        </div>
                        
                        <div className={divFlexStyle}>
                            <div className={divTableTitleStyle}>LENTE</div>
                        </div>
                        
                        <div className={divFlexStyle}>
                            <div className={divTableTitleStyle}>CATEGORIA</div>
                        </div>
                        
                        <div className={divFlexStyle}>
                            <div className={divTableTitleStyle}>CONCLUÍDO?</div>
                        </div>
                    </div>
                         
                    {lenses.map(item => (
                        <div className="w-full h-[30px] flex">
                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.date}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.name}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.phone}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.order}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div title={item.lens} className={divTableBodyStyle}>{item.lens}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.category}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <button className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold">CONCLUIR</button>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
}
/* 
 const handleFilterButton = () => {
        
    }
    
    return (
        <div className="w-full h-full flex justify-center">

            <div className="w-full h-full flex flex-col container">
            
                <div className="flex-3 flex justify-between items-center ">

                    <h1 className="font-extrabold text-2xl text-black">ACOMPANHAMENTO DE LENTES</h1>
                    
                    <div className="text-black h-[60px] w-[800px] flex justify-between px-4 items-center border-3 border-[#494949] rounded-md">

                        <FilterBar 
                        selectedOptions={["VISÃO SIMPLES", "MULTIFOCAL"]}
                        onFilter={handleFilterButton}          
                        />

                    </div>
                
                </div>

                <div className="w-full h-[4px] bg-black"></div>

                <div className="flex-2 flex">

                  <AddTable placeholder={['DATA','NOME DO CLIENTE','TELEFONE','ORDEM DE SERVIÇO','LENTE']}/>
                    
                </div>

                <div className="flex-15 flex flex-col">
                    <div className="w-full h-[30px] flex">
                       <TableTitle title={['DATA','NOME DO CLIENTE','TELEFONE','ORDEM DE SERVIÇO','LENTE','CATEGORIA','CONCLUÍDO?']}/>
                    </div>
                         
                    {lenses.map(item => (
                        <div className="w-full h-[30px] flex">
                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.date}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.name}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.phone}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.order}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div title={item.lens} className={divTableBodyStyle}>{item.lens}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <div className={divTableBodyStyle}>{item.category}</div>
                            </div>

                            <div className={divFlexStyle}>
                                <button className="bg-blue-500 cursor-pointer w-full rounded-md mx-[4px] font-bold">CONCLUIR</button>
                            </div>
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )
*/