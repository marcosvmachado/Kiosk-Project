"use client"

import { FormStructure } from "@/components/Login/formStructure"
import { LoginArea } from "@/components/Login/LoginArea"
import { Layout } from "@/components/Layout"
import { RegisterArea } from "@/components/Login/RegisterArea"
import { Lenses } from "@/app/Pages/lens/page"
import { Called } from "@/app/Pages/called/page"
import { LensProvider } from "@/Contexts/lensContext"

const Page = () => {

  const isLogged = true
  
  return (

    <div>

     {isLogged ? <Layout activePage="Acomp. de Lentes" children={
      <LensProvider>   
        <Lenses/>
      </LensProvider>
      }/> : <LoginArea/>}
  
    </div>
  )

}

export default Page