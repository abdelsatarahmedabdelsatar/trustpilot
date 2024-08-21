


const ShopSmarter = () => {



    return (
            <div className="bg-[#f1f1e8] py-32">

                <div className=" bg-white relative border-2 rounded-[1.2rem] mx-44 pt-10">

                    <header className="flex items-center justify-center text-center pb-11">
                        <div>
                            <h1 className="text-[2.5rem] font-extrabold pb-4">Shop smarter with the Trustpilot app</h1>
                            <p>Keep Trustpilot in your pocket. Find companies, read reviews, or write them—all while on the go.</p>

                        </div>
                    </header>

                    <figure className="flex justify-center gap-4">
                        <img src="/images/phone-1.webp" alt="" className="w-[15vw] hidden md:block shadow-black shadow-lg rounded-[2.5rem] " />
                        <img src="/images/phone-2.webp" alt="" className="w-[15vw] hidden md:block shadow-black shadow-lg rounded-[2.5rem] " />
                        <img src="/images/phone-3.webp" alt="" className="w-[15vw] hidden md:block shadow-black shadow-lg rounded-[2.5rem] " />
                    </figure>

                    <div className="bg-[#fcfbf3] h-52 absolute w-full bottom-[-25px] flex justify-between md:px-20 py-16">

                            <aside className="flex">
                                        <figure className="lg:block hidden">
                                            <img src="/images/user-4.webp" alt="user image" width={55} className="rounded-full absolute left-20 border-[3.5px] border-white shadow-lg" />
                                            <img src="/images/user-3.webp" alt="user image" width={55} className="rounded-full absolute left-[6.7rem] border-[3.5px] border-white shadow-lg" />
                                            <img src="/images/user-2.webp" alt="user image" width={55} className="rounded-full absolute left-[8.2rem] border-[3.5px] border-white shadow-lg" />
                                            <img src="/images/user-1.webp" alt="user image" width={55} className="rounded-full absolute left-[9.7rem] border-[3.5px] border-white shadow-lg" />
                                        </figure>
                                        <section className="lg:ms-36 ms-8">
                                            <h1 className="font-bold text-2xl">
                                            Get the iOS app
                                            </h1>
                                            <p className="py-3">
                                            Join the community! Scan the QR code with your phone camera to download.
                                            </p>
                                        </section>
                            </aside>
                            <aside>
                                            <img src="https://consumersite-assets.trustpilot.net/consumersite-home/public/app-promo-banner/qr-codes/app-store-download-qr-code-production.svg" alt="" />
                            </aside>

                    </div>

                </div>


            </div>
    );
}

export default ShopSmarter;