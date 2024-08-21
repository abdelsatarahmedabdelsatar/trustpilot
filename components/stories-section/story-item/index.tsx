import { StoryItemType } from "@/types/types";



const StoryItem = ({title,subTitle,src}:StoryItemType) => {


    return (
    
    <section>
        <div className="bg-white block lg:flex border-[1px] border-gray-200 rounded-lg">

            <aside className="w-full lg:w-1/2 p-20">
                <img src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg" alt="story rate" width={250} />
                <h1 className="font-extrabold text-4xl my-10">{title}</h1>
                <p className="font-bold text-xl text-gray-500">{subTitle}</p>
            </aside>
            <aside className="w-full lg:w-1/2">
                <img src={`/images/${src}`} alt="story image" className="rounded-r-lg w-full h-full" />
            </aside>
        </div>
    </section>);
}

export default StoryItem;