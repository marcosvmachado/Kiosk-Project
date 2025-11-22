export const RegisterArea = () => {
    return (
        <div className="w-screen h-screen bg-white flex text-black">
            <div className="flex-3 bg-[#411e5a]"></div>
            <div className="flex flex-7 justify-center items-center">
    
                <div className="w-[320px] h-[360px] space-y-[20px]">
                    
                    <div>
                        <span className="text-sm">Usuário</span>
                        <div className="w-full h-[50px] border-1 border-gray-200 focus-within:border-gray-500 transition-colors duration-100 rounded-md">
                            <input type="text" placeholder="Usuário" className="outline-none w-full h-full pl-[15px] placeholder-gray-500"/>
                        </div>
                    </div>

                    <div className="space-y-[10px]">
                        <span className="text-sm">Senha</span>
                        <div className="w-full h-[50px] border-1 border-gray-200 focus-within:border-gray-500 transition-colors duration-100 rounded-md">
                            <input type="text" placeholder="Senha" className="outline-none w-full h-full pl-[15px] placeholder-gray-500 "/>
                        </div>                        
                        <span className="cursor-pointer underline text-[#411e5a] text-sm">Esqueci minha senha</span>
                    </div>
                    
                    <button className="w-full h-[50px] text-white text-center cursor-pointer rounded-md bg-[#411e5a] hover:bg-[#371a4d] transition-colors duration-100 font-bold">Entrar</button>

                </div>

            </div>
        </div>
    )
}