export const LoginArea = () => {
    return (
        <div className="w-screen h-screen bg-white flex text-black">
            <div className="flex-3 bg-[#9bde87]"></div>
            <div className="flex flex-7 justify-center items-center">
                <div className="w-[450px] h-[360px] flex flex-col justify-center items-center rounded-md shadow-xl">
                    <h1 className="text-3xl font-bold">XRS ÓTICAS</h1>
                    <div className="w-[85%] space-y-[20px]">
                        
                        <div>
                            <span className="text-md font-bold">Usuário</span>
                            <div className="mt-[5px] w-full h-[50px] border-2 border-gray-300 focus-within:border-[#1e3a5f] transition-colors duration-200 rounded-md shadow-sm">
                                <input type="text" placeholder="Usuário" className="outline-none w-full h-full pl-[15px] placeholder-gray-500"/>
                            </div>
                        </div>

                        <div className="space-y-[10px]">
                            <span className="text-md font-bold">Senha</span>
                            <div className="w-full h-[50px] border-2 border-gray-300 focus-within:border-[#1e3a5f] transition-colors duration-200 rounded-md shadow-sm">
                                <input type="text" placeholder="Senha" className="outline-none w-full h-full pl-[15px] placeholder-gray-500 "/>
                            </div>                        
                            <span className="cursor-pointer underline text-[#411e5a] text-sm">Esqueci minha senha</span>
                        </div>
                        
                        <button className="w-full h-[50px] text-white text-center cursor-pointer rounded-md bg-[#1e3a5f] hover:bg-[#324e73] transition-colors duration-200 font-bold">Entrar</button>

                    </div>
                </div>
            </div>
        </div>
    )
}