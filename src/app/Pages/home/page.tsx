import Image from "next/image"

const Home = () => {
    return (
        <div className="w-full h-full flex justify-center items-center flex-col">
            <div className="w-full h-full flex justify-center items-center">
                <div className="flex rounded-[10px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] py-20 px-20">
                    <div className="flex-1 h-full relative flex justify-center items-center">
                        <Image
                        src="/assets/chillibeans.png"
                        alt=""
                        width={600}
                        height={600}
                        sizes="100vw"
                        className=""
                        />
                    </div>
                    
                    <div className="flex-1 h-full relative flex justify-center items-center">
                        <Image
                        src="/assets/oticachilli.png"
                        alt=""
                        width={1000}
                        height={1000}
                        sizes="100vw"
                        className=""
                        />
                    </div>
                </div>
            </div>      
        </div>
    )
}

export default Home