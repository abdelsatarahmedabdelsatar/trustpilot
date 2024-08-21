import { Button } from "@mui/material";

const TransparencyReport = () => {





    return (

        <div className="bg-[#0c2f1e] px-10 lg:px-44 block lg:flex ">


            <div className="text-white pt-24">
                <h1 className="text-5xl font-extrabold ">Be heard                    <svg width="102" height="94" viewBox="0 0 102 94" fill="none" xmlns="http://www.w3.org/2000/svg"  className="text-[#04da8d] rotate-12 inline-block w-9 h-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M62.5164 35.7675H101.231L70.0485 57.9374L50.7663 71.535L19.4328 93.7049L31.3335 57.9374L0 35.7675H38.715L50.6157 0L62.5164 35.7675ZM72.6089 66.2137L50.6152 71.6823L81.7981 94L72.6089 66.2137Z" fill="currentColor"></path></svg>
                </h1>
                <p className="my-7  w-3/4">
                    Trustpilot is a review platform that’s open to everyone. Share your experiences to help others make better choices and encourage companies to up their game.
                </p>

                <Button size="large" className="text-white bg-transparent rounded-full px-6 py-4 font-extrabold border-solid border-[1px] hover:bg-[#009760] hover:border-[#009760]">what we do</Button>
            </div>
            <div className="bg-[#04da8d] p-10 relative lg:bottom-14 bottom-[-4rem] rounded-2xl">
                <h1 className="text-5xl font-extrabold w-7/12">Our 2024 Transparency Report has landed
                <svg width="102" height="94" viewBox="0 0 102 94" fill="none" xmlns="http://www.w3.org/2000/svg"  className="text-black rotate-12 inline-block w-9 h-10"><path fill-rule="evenodd" clip-rule="evenodd" d="M62.5164 35.7675H101.231L70.0485 57.9374L50.7663 71.535L19.4328 93.7049L31.3335 57.9374L0 35.7675H38.715L50.6157 0L62.5164 35.7675ZM72.6089 66.2137L50.6152 71.6823L81.7981 94L72.6089 66.2137Z" fill="currentColor"></path></svg>
                </h1>

                <p className="my-7">
                    We’re looking back on a year unlike any other. Read about how we ensure our platform’s integrity. 
                    </p>

                <Button size="large" className="text-white bg-black rounded-full px-6 py-4 font-extrabold    hover:bg-[#009760] hover:text-black">Take a look</Button>
            </div>
        </div>
    );
}

export default TransparencyReport;