

export function ProfileOverview(){
    return(
        <div>
            <div className="w-full h-52 rounded-tl-xl rounded-tr-xl bg-slate-200">
                {/* <Image 
                src={}
                alt=""
                className="w-full h-full rounded-tl-xl rounded-tr-xl"/> */}
            </div>

            <div className="relative p-8 border-2 rounded-bl-xl rounded-br-xl">

                <div className="rounded-full p-1 shadow-2xl absolute -top-0 -translate-y-1/2 
                size-32 bg-white">
                    <div className="rounded-full bg-slate-300 w-full h-full"></div>
                </div>

                <div className="ms-40 flex justify-between items-start">
                    <div className="flex flex-col items-start gap-4 ">
                        <h1>dr. Selena odette</h1>
                        <p className="text-gray-400">
                            Specialist of skin surgery in Picko Clinic
                        </p>
                        <p className="bg-slate-200 rounded-full py-3 px-5 font-semibold text-center">
                            Semarang, Indonesia
                        </p>
                    </div>

                    <button className="border py-2 px-3 rounded-lg text-blue-500 font-semibold">
                        Edit profile
                    </button>
                </div>
            </div>
        </div>
    )
}