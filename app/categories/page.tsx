"use client"
import CategoryItem from "@/components/category-item";
import { categories } from "@/dummy-data/dummyData";
import { Search } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";

const Categories = () => {

    return (
        <div className="bg-[#fcfbf3] mt-[4.5rem]">

            <div className="bg-[#f1f1e8] h-72 flex items-center justify-center ">
                <div className="text-center w-4/12">
                    <h1 className="text-3xl font-extrabold">What are you looking for?</h1>
                    <Input className="bg-white my-7 py-1 px-3 w-full border-2 border-gray-300 rounded-sm" startAdornment={
                        <InputAdornment position="start">
                            <Search />
                        </InputAdornment>
                    } placeholder="search for company or category ..." />
                </div>

            </div>

            <div className="mx-10 lg:mx-44">
                <h1 className="text-xl font-extrabold py-10">
                    Explore companies by category
                </h1>
                <div className="grid grid-cols-3 gap-5 lg:grid-cols-6 xl:grid-cols-12">
                    <div className="col-span-3">
                        {categories.map((category, index) =>
                            <div key={index} className="border-[0.5px] border-gray-300 rounded-md relative mt-5">
                                <CategoryItem companies={category.companies} icon={category.icon} title={category.title} />
                            </div>
                        )}
                    </div>
                    <div className="col-span-3">
                        {categories.slice(1, 13).map((category, index) =>
                            <div key={index} className="border-[0.5px] border-gray-300 rounded-md relative mt-5">
                                <CategoryItem companies={category.companies} icon={category.icon} title={category.title} />
                            </div>
                        )}
                    </div>
                    <div className="col-span-3">
                        {categories.map((category, index) =>
                            <div key={index} className="border-[0.5px] border-gray-300 rounded-md relative mt-5">
                                <CategoryItem companies={category.companies} icon={category.icon} title={category.title} />
                            </div>
                        )}
                    </div>
                    <div className="col-span-3">
                        {categories.slice(1, 12).map((category, index) =>
                            <div key={index} className="border-[0.5px] border-gray-300 rounded-md relative mt-5">
                                <CategoryItem companies={category.companies} icon={category.icon} title={category.title} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Categories;

