"use client"

import { stories } from "@/dummy-data/dummyData";
import StoryItem from "./story-item";
import { Carousel } from 'primereact/carousel';
import { StoryItemType } from "@/types/types";

const StoryTemplate = (story: StoryItemType) => {

    return (<StoryItem src={story.src} subTitle={story.title} title={story.subTitle} />)
}


const StoriesSection = () => {



    return (




        <div className="relative mx-10 xl:mx-44 py-20">

            <header className="flex items-center justify-center text-center pb-11">
                <div>
                    <p className="text-gray-600 font-bold text-xl">Your stories</p>
                    <h1 className="font-extrabold text-4xl">Each review has a personal story</h1>

                </div>
            </header>

            <Carousel circular={true} value={stories} numScroll={1} numVisible={1} itemTemplate={StoryTemplate} />

            {/* <section>
                <div className="bg-white flex border-[1px] border-gray-200 rounded-lg">

                    <aside className="w-1/2 p-20">
                            <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="story rate" width={250} />
                            <h1 className="font-extrabold text-4xl my-10">Fixed my broke fone. But I still can't get a date on Tinder.</h1>
                            <p className="font-bold text-xl text-gray-500">Max experienced Re-Tech</p>
                    </aside>
                    <aside className="w-1/2">
                        <img src="/images/story-3.webp"  alt="story image" className="rounded-r-lg"/>
                    </aside>
                </div>
            </section> */}



        </div>


    );
}

export default StoriesSection;