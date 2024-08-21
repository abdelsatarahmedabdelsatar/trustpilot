

import { twMerge } from 'tailwind-merge'

type CategoryItemType = {
    icon: string,
    title: string,
    companies: string[]
}

const CategoryItem = ({ icon, title, companies}: CategoryItemType) => {






    return (

        <>
            <div className="bg-white border-[0.5px] rounded-t-md" >
                <div className={twMerge("w-full rounded-t-md flex items-center justify-center h-28 transition-all duration-150",
                    
                    title.length>0 && title.length<8 ?
                    `hover:bg-[#bdd6d9]`:
                    title.length>=8 && title.length<15 ?
                    `hover:bg-[#ccc5d5]`:
                    `hover:bg-[#ccc999]`
                    ,
                    
                    
                    title.length>0 && title.length<8 ?
                    `bg-[#bff6d9]`:
                    title.length>=8 && title.length<15 ?
                    `bg-[#ffc5d5]`:
                    `bg-[#ffc999]`
                    ,)}>
                    <section>
                        <img src={icon} alt="" className="m-auto" />
                        <h1 className="font-extrabold">{title}</h1>
                    </section>

                </div>

                <div className="ps-3 pt-3">
                    {
                        companies.map((company, index) =>
                            <p className="py-2 text-sm mt-1 hover:underline hover:cursor-pointer" key={index}>{company}</p>
                        )
                    }
                </div>

            </div>
        </>

    );
}

export default CategoryItem;