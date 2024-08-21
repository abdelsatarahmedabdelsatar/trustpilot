import { Button } from "@mui/material";
import Input from '@mui/joy/Input';

const HeadSection = () => {





    return (
        <div className=" bg-[#04da8d]">

            <main className="grid grid-cols-12 mt-[4.5rem]">
                <section className="col-span-12 ps-10 py-10 w-full md:col-span-6 lg:ps-40 lg:py-20">
                    <div className="text-4xl font-[900]">
                        <h1>Read reviews. Write reviews.</h1>
                        <h1>Find companies you can trust.</h1>



                    </div>
                    <div className="bg-white rounded-full w-full my-16 p-2 relative h-[3.5rem] border-black border ">
                       <input  placeholder="company or category" className="w-3/4 pt-2 ms-3 focus:outline-none" />
                       <Button className="bg-blue-700 font-bold text-white right-[0.3rem] h-11 top-[0.3rem] rounded-full absolute px-12 hover:text-black hover:bg-blue-300">Search</Button>
                    </div>
                </section>
                <section className="400 col-span-6 overflow-hidden relative md:col-span-6 hidden lg:block">
                    <img className="absolute mt-28 scale-150 left-64 h-auto w-auto" src={"/images/hero-image2.webp"} alt="hero_image" />
                </section>
            </main>

        </div>

    );
}

export default HeadSection;