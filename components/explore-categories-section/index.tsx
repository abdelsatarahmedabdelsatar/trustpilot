"use client"

import { Button } from "@mui/material";
import { categories } from "@/dummy-data/dummyData";
import { Carousel } from "primereact/carousel";
import Link from "next/link";


const CategoriesTemplate = () => {

    return <a href="/categories/bank" className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-4">
        {
            categories.map((category) =>

                <div className="flex bg-white ps-6 py-6 relative border-[1px] rounded-lg text-sm items-center hover:translate-y-0.5 hover:transition-all duration-150 hover:bg-gray-100 hover:shadow-md">
                    <img src={category.icon} alt="" />
                    <h1 className="ms-3">{category.title}</h1>
                </div>
            )
        }
    </a>

}

const ExploreCategoriesSection = () => {




    return (<div>
        <div className="">
            <div className="flex justify-between font-extrabold py-8 px-44">
                <h1 className="text-2xl">Explore categories</h1>
                <Button href={'/categories'} className=" bg-indigo-100 text-blue-700 rounded-full text-[10px] px-4 font-extrabold hover:text-black hover:bg-indigo-200">View all</Button>
            </div>
            <Carousel className="px-28" value={categories} numScroll={1} numVisible={1} itemTemplate={CategoriesTemplate} />
        </div>
        <section className="py-10">
            <div className="h-16 bg-[#f1f1e8] flex items-center justify-center">

                <h1 className="font-bold text-sm mx-3">Are you a business?</h1>
                <Button size="small" className="bg-blue-700 font-bold text-white h-9 rounded-full px-4 text-xs hover:text-black hover:bg-blue-300">Get started</Button>
            </div>
        </section>

    </div>
    );
}

export default ExploreCategoriesSection;