'use client'

import { FormStructure } from "@/components/Login/formStructure"
import { LoginArea } from "@/components/Login/LoginArea"
import { Layout } from "@/components/Layout"
import { RegisterArea } from "@/components/Login/RegisterArea"
import { Lenses } from "@/app/pages/lens/page"
import { Called } from "@/app/pages/called/page"
import { LensProvider } from "@/Contexts/lensContext"
import { redirect } from "next/navigation"

const Page = () => {

 
  
  return (

    redirect("/pages/home")

  )

}

export default Page