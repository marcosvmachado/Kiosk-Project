import { useState } from "react"

export const FormStructure = () => {

    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const handleSubmitButton = () => {
        
        console.log(password.length)
        console.log(confirmPassword)
    }
    
    const validatePassword = (password: string) => {

        return {
            minLength: password.length >= 8,
            specialChat: /[@!?]/.test(password),
            hasUpperCase: /[A-Z]/.test(password),
            hasNumber: /\d/.test(password)
        }
    }
    
    return (


        <div className='w-screen h-screen flex justify-center items-center font-sans font-bold'>

            <main className='w-[400px] h-[450px] flex justify-center bg-blue-500 rounded-md'>

                <div className='w-[80%]'> {/*container*/}
                
                    <header className='w-full h-[25%] flex justify-center'> {/*header*/}
                                       
                        <div className='h-full w-[95%] flex flex-col justify-center '>
                          
                            <h1 className='text-[25px]'>REDEFINIÇÃO DE SENHA</h1>
                            <p className='max-w-[300px] text-center'>Crie uma nova senha para acessar sua conta.</p>
                            
                        </div>
                 
                    </header>

                    <form className='w-full h-[45%] flex flex-col'> {/*validation*/}

                        <div className='w-full h-full flex flex-col'>
                    
                            <div className="mt-5 flex flex-row items-end bg-black w-full h-full">
                                <div className="flex flex-col">
                                    <label>Nova senha</label>
                                    <input 
                                    type="password" 
                                    className='text-black bg-white rounded-md w-full pl-3 text-2xl'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    />
                                *
                                
                                </div>
                                
                            </div>  
                            
                            <div className="">

                            <p className={`${validatePassword(password).minLength ? 'text-green-500' : 'text-red-500'}`}>A senha deve ter no mínimo 8 caracteres</p>
                            <p className={`${validatePassword(password).specialChat ? 'text-green-500' : 'text-red-500'}`}>A senha deve ter 1 caractere especial</p>
                            <p className={`${validatePassword(password).hasUpperCase ? 'text-green-500' : 'text-red-500'}`}>A senha deve ter no mínimo 1 letra maíuscula</p>
                            <p className={`${validatePassword(password).hasNumber ? 'text-green-500' : 'text-red-500'}`}>A senha deve ter no mínimo 1 número</p>
                        
                            </div>
                            
                            <div className="">
                                <label>Confirmar nova senha</label>
                                <input 
                                type="password" 
                                className='text-black bg-white rounded-md w-full pl-3 text-2xl'
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)}
                                />
                            </div>
                        
                        </div>          
                     
                    </form>
                    
                      <div className='w-full h-[30%] flex justify-center items-center'>{/*submit*/}
                        
                        <button className="cursor-pointer bg-blue-800 w-full rounded-md p-1" onClick={() => {handleSubmitButton()}}>Salvar</button>
     
                      </div> 
                
                </div>  
      
            </main>

        </div>


    )
}