import Marquee from "react-fast-marquee";

const RecentReviews = () => {


    return (
        <div className="pb-10">
            <section className="flex justify-center items-center text-2xl font-extrabold pb-10">
                <h1 >Recent reviews</h1>
            </section>
            {/* <Marquee direction="right" speed={15} autoFill> */}
                <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-10 gap-7">
                    <div className="col-span-2">
                        <div className="bg-white w-full py-8 border-[1.5px] mt-5 rounded-md p-4 hover:scale-110 transition-all duration-300 hover:shadow-lg">
                            <div className="flex">
                                <img src="https://user-images.trustpilot.com/5fa9ea29f7b0ee0019febb6f/64x64.png" alt="" className="rounded-full w-12" />
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-1.svg" alt="" className="ms-3" width={120} />
                            </div>

                            <div className="text-xs">
                                <h1 className="font-extrabold my-2">Elsa Barrantes reviewed SHEIN</h1>
                                <p>
                                    “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sit, a rem vero fugiat nulla eaque culpa, tempore obcaecati voluptas nisi expedita nesciunt sed rerum ab modi harum. Fuga”
                                </p>
                            </div>
                        </div>
                        <div className="bg-white w-full py-8 border-[1.5px] mt-5 rounded-md p-4 hover:scale-110 transition-all duration-200 hover:shadow-lg">
                            <div className="flex">
                                <img src="https://user-images.trustpilot.com/66c2d2b38af33b3b580aef4e/64x64.png" alt="" className="rounded-full w-12" />
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="" className="ms-3" width={120} />
                            </div>

                            <div className="text-xs">
                                <h1 className="font-extrabold my-2 w-3/4">Jason Paul Jay Paul reviewed Wellness Nest</h1>
                                <p>
                                    “Awesome product! Does exactly what it says it does. Very happy Order number 70316 received with gratitude. Jason, Melbourne ”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="bg-white w-full py-8 border-[1.5px] mt-5 rounded-md p-4 hover:scale-110 transition-all duration-200 hover:shadow-lg">
                            <div className="flex">
                                <img src="https://user-images.trustpilot.com/66c2d2b38af33b3b580aef4e/64x64.png" alt="" className="rounded-full w-12" />
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="" className="ms-3" width={120} />
                            </div>

                            <div className="text-xs">
                                <h1 className="font-extrabold my-2 w-3/4">Jason Paul Jay Paul reviewed Wellness Nest</h1>
                                <p>
                                    “Awesome product! Does exactly what it says it does. Very happy Order number 70316 received with gratitude. Jason, Melbourne ”
                                    “Awesome product! Does exactly what it says it does. Very happy Order number 70316 received with gratitude. Jason, Melbourne ”
                                </p>
                            </div>
                        </div>
                        <div className="bg-white w-full py-8 border-[1.5px] mt-5 rounded-md p-4 hover:scale-110 transition-all duration-200 hover:shadow-lg">
                            <div className="flex">
                                <img src="https://user-images.trustpilot.com/64786825b9257a001220b487/64x64.png" alt="" className="rounded-full w-12" />
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg" alt="" className="ms-3" width={120} />
                            </div>

                            <div className="text-xs">
                                <h1 className="font-extrabold my-2">Elsa Barrantes reviewed SHEIN</h1>
                                <p>
                                    “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sit, a rem vero fugiat nulla eaque culpa, tempore obcaecati voluptas nisi expedita nesciunt sed rerum ab modi harum. Fuga”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="bg-white w-full py-8 border-[1.5px] mt-5 rounded-md p-4 hover:scale-110 transition-all duration-200 hover:shadow-lg">
                            <div className="flex">
                                <img src="https://user-images.trustpilot.com/5fa9ea29f7b0ee0019febb6f/64x64.png" alt="" className="rounded-full w-12" />
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-1.svg" alt="" className="ms-3" width={120} />
                            </div>

                            <div className="text-xs">
                                <h1 className="font-extrabold my-2">Elsa Barrantes reviewed SHEIN</h1>
                                <p>
                                    “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sit, a rem vero fugiat nulla eaque culpa, tempore obcaecati voluptas nisi expedita nesciunt sed rerum ab modi harum. Fuga”
                                </p>
                            </div>
                        </div>
                        <div className="bg-white w-full py-8 border-[1.5px] mt-5 rounded-md p-4 hover:scale-110 transition-all duration-200 hover:shadow-lg">
                            <div className="flex">
                                <img src="https://user-images.trustpilot.com/66c2d2b38af33b3b580aef4e/64x64.png" alt="" className="rounded-full w-12" />
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="" className="ms-3" width={120} />
                            </div>

                            <div className="text-xs">
                                <h1 className="font-extrabold my-2 w-3/4">Jason Paul Jay Paul reviewed Wellness Nest</h1>
                                <p>
                                    “Awesome product! Does exactly what it says it does. Very happy Order number 70316 received with gratitude. Jason, Melbourne ”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="bg-white w-full py-8 border-[1.5px] mt-5 rounded-md p-4 hover:scale-110 transition-all duration-200 hover:shadow-lg">
                            <div className="flex">
                                <img src="https://user-images.trustpilot.com/64786825b9257a001220b487/64x64.png" alt="" className="rounded-full w-12" />
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg" alt="" className="ms-3" width={120} />
                            </div>

                            <div className="text-xs">
                                <h1 className="font-extrabold my-2 w-3/4">Jason Paul Jay Paul reviewed Wellness Nest</h1>
                                <p>
                                    “Awesome product! Does exactly what it says it does. Very happy Order number 70316 received with gratitude. Jason, Melbourne ”
                                    “Awesome product! Does exactly what it says it does. Very happy Order number 70316 received with gratitude. Jason, Melbourne ”
                                </p>
                            </div>
                        </div>
                        <div className="bg-white w-full py-8 border-[1.5px] mt-5 rounded-md p-4 hover:scale-110 transition-all duration-200 hover:shadow-lg">
                            <div className="flex">
                                <img src="https://user-images.trustpilot.com/5fa9ea29f7b0ee0019febb6f/64x64.png" alt="" className="rounded-full w-12" />
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-1.svg" alt="" className="ms-3" width={120} />
                            </div>

                            <div className="text-xs">
                                <h1 className="font-extrabold my-2">Elsa Barrantes reviewed SHEIN</h1>
                                <p>
                                    “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sit, a rem vero fugiat nulla eaque culpa, tempore obcaecati voluptas nisi expedita nesciunt sed rerum ab modi harum. Fuga”
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="bg-white w-full py-8 border-[1.5px] mt-5 rounded-md p-4 hover:scale-110 transition-all duration-200 hover:shadow-lg">
                            <div className="flex">
                                <img src="https://user-images.trustpilot.com/5fa9ea29f7b0ee0019febb6f/64x64.png" alt="" className="rounded-full w-12" />
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-1.svg" alt="" className="ms-3" width={120} />
                            </div>

                            <div className="text-xs">
                                <h1 className="font-extrabold my-2">Elsa Barrantes reviewed SHEIN</h1>
                                <p>
                                    “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet explicabo sit, a rem vero fugiat nulla eaque culpa, tempore obcaecati voluptas nisi expedita nesciunt sed rerum ab modi harum. Fuga”
                                </p>
                            </div>
                        </div>
                        <div className="bg-white w-full py-8 border-[1.5px] mt-5 rounded-md p-4 hover:scale-110 transition-all duration-200 hover:shadow-lg">
                            <div className="flex">
                                <img src="https://user-images.trustpilot.com/64786825b9257a001220b487/64x64.png" alt="" className="rounded-full w-12" />
                                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.svg" alt="" className="ms-3" width={120} />
                            </div>

                            <div className="text-xs">
                                <h1 className="font-extrabold my-2 w-3/4">Jason Paul Jay Paul reviewed Wellness Nest</h1>
                                <p>
                                    “Awesome product! Does exactly what it says it does. Very happy Order number 70316 received with gratitude. Jason, Melbourne ”
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </Marquee> */}

        </div>
    );
}

export default RecentReviews;