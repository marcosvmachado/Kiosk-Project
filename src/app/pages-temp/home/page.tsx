import Image from "next/image"

const Home = () => {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col ">
            <div className="w-[90%] h-full flex justify-center items-center">
                <div className="flex rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] py-20 px-20">
                    <div className="w-full h-full relative flex justify-center items-center">
                        <Image
                        src="/assets/chillibeans.png"
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width:"100%", height:"100%"}}
                        />
                    </div>
                    
                    <div className="w-full h-full relative flex justify-center items-center">
                        <Image
                        src="/assets/oticachilli.png"
                        alt=""
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{width:"100%", height:"100%"}}
                        />
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Home