import { Metadata } from "next";
import { ProfileOverview } from "./profile-overview";

export const metadata: Metadata = {
    title: "Doctor profile"
}

export default function DoctorProfilePage(){
    return(
        <div className="max-w-5xl mx-auto flex flex-col gap-5">
            <ProfileOverview />
            
            <div className="border-2 p-8 rounded-xl">
                <h2 className="text-xl sm:text-2xl font-semibold">
                    Profile Decription
                </h2>
                <p className="mt-6 text-gray-500 whitespace-wrap">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim, dolorem, 
                    ex praesentium magnam distinctio deserunt rem doloremque non sapiente illo 
                    aspernatur quam maiores corporis.
                    
                    <br /><br />

                    Veritatis eum ullam soluta, minima officia nostrum cum iure debitis minus 
                    earum? Quisquam inventore ullam ipsum ea quod maiores blanditiis nihil:
                    
                    <br /><br />

                    - tempora officiis mollitia placeat dolorum dicta nemo deserunt, <br />
                    - amet harum quia dolorem error quibusdam non aspernatur voluptatibus iste <br />
                    - voluptatem ex, nemo consectetur quo ratione blanditiis voluptatibus iusto. <br />
                </p>
            </div>
        </div>
    )
}