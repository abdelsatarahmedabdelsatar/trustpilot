"use client"
import { Divider } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EastIcon from '@mui/icons-material/East';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useMemo, useState } from "react";
import ReviewItem from "@/components/review-item";
import { reviewsItems } from "@/dummy-data/dummyData";


const ReviewPage = () => {

    const [HeaderVisible, setHeaderVisivle] = useState(false);
    
    function HeaderShownRendered() {

        useScrollPosition(({ currPos }) => {

            let currentPosition = Math.abs(currPos.y);
            if (currentPosition > 270) {
                setHeaderVisivle(true);
            } else {
                setHeaderVisivle(false);
            }

        });

        return useMemo(
            () => (
                HeaderVisible ? <div className=" bg-white px-10 lg:px-52 py-4 fixed w-full z-[1000] top-[4.5rem] shadow-xl animate-reviewNav">
                    <div className=" justify-between m-4 block lg:flex">

                        <div className="flex">
                            <img src="https://user-images.trustpilot.com/53676a3b000064000171b1d4/73x73.png" alt="company logo" className="w-14 h-14" />

                            <section className="ms-5">
                                <h1 className="font-bold text-3xl">Coupret</h1>

                                <div className="flex items-center">
                                    <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" className="my-2" width={100} alt="rate image" />
                                    <span className="text-gray-500 font-bold ms-5">4.5</span>
                                </div>
                            </section>
                        </div>

                        <div className="font-bold flex items-end">
                            <a className=" bg-white text-blue-600 rounded-full border-[1px] border-blue-700 text-sm px-4 py-2 mx-2 hover:text-black hover:bg-blue-300 hover:border-blue-300 cursor-pointer"> <OpenInNewIcon className="me-3 text-lg" /> <span className="">Coupert.co.uk</span></a>
                            <a className=" bg-blue-600 text-white rounded-full text-sm px-4 py-2 mx-2 hover:text-black hover:bg-blue-300 hover:border-blue-300 cursor-pointer"> <span className="">Write a review</span></a>


                        </div>


                    </div>
                </div> : ""
            ),
            [HeaderVisible]
        );
    }

    return (
        <>

            <HeaderShownRendered />

            <div className="mt-20  px-10 xl:px-44">
                <span className="text-xs cursor-pointer mx-3  hover:underline">Animals & Pets
                </span>&gt;
                <span className="text-xs cursor-pointer mx-3  hover:underline">Pet Stores</span>&gt;
                <span className="text-xs cursor-pointer mx-3  hover:underline">Vetpetni</span>
                <div className="grid grid-cols-5 justify-between  lg:grid-cols-10">

                    <div className="col-span-6 flex items-center justify-start py-12 ">
                        <img src="/images/company-2.avif" width={230} alt="company logo" className="" />

                        <section className="ms-3">
                            <h1 className="font-extrabold text-4xl">Coupert</h1>
                            <p className="text-gray-500">Reviews 4,2332 · Excellent</p>
                            <div className="flex items-center">
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" className="my-2" width={220} alt="rate image" />
                                <span className="text-gray-500 text-sm ms-5">4.5</span>
                            </div>
                            <p className="mt-2 border p-1 w-[62%] bg-green-200 text-xs flex"><VerifiedUserIcon color="success" className="text-sm" /><span className="mx-2 font-bold"> VERFIED COMPANY</span></p>
                        </section>

                    </div>

                    <div className="col-span-5 my-16 lg:col-span-3">
                        <a href="#" className="group flex justify-between items-center border px-4 py-3 border-blue-500 rounded-lg hover:bg-blue-200">

                            <div className="text-blue-500 group-hover:text-black
                                    ">
                                <OpenInNewIcon />
                                <span className="mx-2 font-extrabold">Coupert.co.uk</span>
                                <h1 className="text-gray-700 text-sm my-2">visit this website</h1>
                            </div>

                            <div>
                                <EastIcon color="info" className="text-lg" />
                            </div>


                        </a>
                    </div>

                </div>



            </div>


            <section className="bg-[#fcfbf3] px-10 lg:px-60 border-t-2 pb-20">

                <div className="grid grid-cols-2 lg:grid-cols-10 gap-10">


                    <div className="col-span-2 lg:col-span-7">

                        <div className="bg-white border-gray-300 border-[1px] rounded-lg mt-8 relative">


                            <div className="flex m-4 justify-between">



                                <section className="ms-3 flex items-center">
                                    <img src="https://user-images.trustpilot.com/default/v1/73x73.png" width={50} alt="company logo" className="rounded-full" />
                                    <h1 className="text-blue-700 m-4 hover:underline cursor-pointer">
                                        Write a review</h1>


                                </section>
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-2.svg" className="my-2" width={230} alt="rate image" />

                            </div>
                        </div>
                        {
                            reviewsItems.map((reviewer, index) =>
                                <ReviewItem 
                                    key={index} 
                                    title={reviewer.title} 
                                    logo={reviewer.logo} 
                                    time={reviewer.time} 
                                    reviewers={reviewer.reviewers} 
                                    rateSrc={reviewer.rateSrc} />
                            )
                        }


                    </div>

                    <div className="col-span-2 lg:col-span-3">
                        <div className=" bg-white border-gray-300 border-[1px] rounded-lg mt-8">

                            <div className="pt-8 ps-8 pe-8 font-bold text-lg flex justify-between">
                                <h1>Company activity</h1>
                                <p className="text-blue-700 text-[1rem] font-bold hover:underline">see all</p>
                            </div>

                            <div className="m-8">
                                <div className="my-2 flex">
                                    <ContentPasteIcon className="text-lg" />
                                    <h1 className="ms-3">Claimed profile</h1>

                                </div>
                                <Divider />
                                <div className="my-2 flex">
                                    <SendIcon className="text-lg" style={{ rotate: "320deg" }} />
                                    <h1 className="ms-3">Asks for reviews — positive or negative</h1>
                                </div>
                                <Divider />
                                <div className="my-2 flex">
                                    <CurrencyExchangeIcon className="text-lg" />
                                    <h1 className="ms-3">Pays for extra features</h1>
                                </div>
                                <Divider />
                                <div className="my-2 flex">
                                    <AccessTimeIcon className="text-lg" />
                                    <h1 className="ms-3">Hasn’t replied to negative reviews</h1>
                                </div>

                            </div>


                        </div>

                        <div className=" bg-white border-gray-300 border-[1px] rounded-lg mt-8">

                            <div className="pt-8 ps-8 pe-8 font-bold text-lg">
                                <h1>About Coupert</h1>
                                <p className="text-gray-500 text-xs">Information provided by various sources</p>
                            </div>


                            <div className="m-8 tex-sm">
                                <p>Vet Pet NI supply pet food and pet supplies in Northern Ireland, we offer free delivery to any veterinary practice. Order online or call us on 028 9262 5961</p>

                            </div>
                            <Divider />

                            <div className="pt-8 ps-8 pe-8 font-bold text-lg">
                                <h1>contact</h1>
                                <p className="text-gray-500 text-xs mt-2">
                                    <LocationOnIcon className="text-lg me-3" />
                                    United Kingdom</p>
                            </div>


                            <div className="m-8 mt-3 text-sm">
                                <div>
                                    <span className="font-bold"> Vetpetni</span> is <span className="font-bold">1 out of 8</span> best companies in the category <span className="text-blue-700 cursor-pointer hover:underline">Animal Feed Store</span> on Trustpilot
                                </div>
                            </div>
                            <div className="m-8 mt-3 text-sm">
                                <div>
                                    <span className="font-bold"> Vetpetni</span> is <span className="font-bold">1 out of 8</span> best companies in the category <span className="text-blue-700 cursor-pointer hover:underline">Animal Feed Store</span>
                                </div>
                            </div>
                            <div className="m-8 mt-3 text-sm">
                                <div>
                                    <span className="font-bold"> Vetpetni</span> is <span className="font-bold">1 out of 8</span> best companies in the category <span className="text-blue-700 cursor-pointer hover:underline">Animal Feed Store</span>
                                </div>
                            </div>
                            <div className="m-8 mt-3 text-sm">
                                <div>
                                    <span className="font-bold"> Vetpetni</span> is <span className="font-bold">1 out of 8</span> best companies in the category <span className="text-blue-700 cursor-pointer hover:underline">Animal Feed Store</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* <ReviewScreen/> */}

        </>
    );
}

export default ReviewPage;