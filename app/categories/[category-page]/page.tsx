"use client"
import { Search } from "@mui/icons-material";
import { Button, ButtonGroup, Checkbox, Divider, FormControl, FormControlLabel, Input, InputAdornment, MenuItem, Select } from "@mui/material";
import CompanyItem from "@/components/company-item";
import { companies } from "@/dummy-data/dummyData";


const CategoryPage = () => {

    return (
        <>
            <div className="mt-20 px-10 lg:px-44 ">
                <span className="text-xs cursor-pointer mx-3  hover:underline">Money & Insurance</span>&gt;
                <span className="text-xs cursor-pointer mx-3  hover:underline">Banking</span>&gt;
                <span className="text-xs cursor-pointer mx-3  hover:underline">Bank</span>
                <div className="flex items-center justify-center">
                    <div className="text-center w-8/12 lg:w-4/12 py-14">
                        <h1 className="text-5xl font-extrabold">Best in Bank</h1>
                        <p className="mt-3">Compare the best companies in this category</p>
                    </div>
                </div>



            </div>
            <section className="bg-[#fcfbf3] px-10 border-t-2 pt-10 pb-20 lg:px-44">

                <div className="grid grid-cols-2 lg:grid-cols-10 gap-10">
                    <div className="col-span-2 lg:col-span-3">
                        <div className=" bg-white border-gray-300 border-[1px] rounded-lg mt-8">

                            <div className="pt-8 ps-8 pe-8 font-bold text-lg">
                                <h1>Rating</h1>
                                <ButtonGroup variant="outlined" color="inherit" aria-label="Basic button group" className="mt-4 w-full">
                                    <Button>any</Button>
                                    <Button>
                                        <svg width="102" height="94" viewBox="0 0 102 94" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black inline-block w-3 mt-[-3px] h-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M62.5164 35.7675H101.231L70.0485 57.9374L50.7663 71.535L19.4328 93.7049L31.3335 57.9374L0 35.7675H38.715L50.6157 0L62.5164 35.7675ZM72.6089 66.2137L50.6152 71.6823L81.7981 94L72.6089 66.2137Z" fill="currentColor"></path></svg>
                                        3.0+
                                    </Button>
                                    <Button>
                                        <svg width="102" height="94" viewBox="0 0 102 94" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black inline-block w-3 mt-[-3px] h-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M62.5164 35.7675H101.231L70.0485 57.9374L50.7663 71.535L19.4328 93.7049L31.3335 57.9374L0 35.7675H38.715L50.6157 0L62.5164 35.7675ZM72.6089 66.2137L50.6152 71.6823L81.7981 94L72.6089 66.2137Z" fill="currentColor"></path></svg>
                                        4.0+
                                    </Button>
                                    <Button>
                                        <svg width="102" height="94" viewBox="0 0 102 94" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black inline-block w-3 mt-[-3px] h-4"><path fill-rule="evenodd" clip-rule="evenodd" d="M62.5164 35.7675H101.231L70.0485 57.9374L50.7663 71.535L19.4328 93.7049L31.3335 57.9374L0 35.7675H38.715L50.6157 0L62.5164 35.7675ZM72.6089 66.2137L50.6152 71.6823L81.7981 94L72.6089 66.2137Z" fill="currentColor"></path></svg>
                                        4.5+
                                    </Button>
                                </ButtonGroup>

                            </div>
                            <div className="pt-8 ps-8 pe-8 font-bold text-lg">
                                <h1>Location</h1>

                                <FormControl className='w-full'>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        defaultValue={"United Status"}
                                        className='bg-white rounded-md  mt-3'
                                    >
                                        <MenuItem selected value={'United Status'}>United Status</MenuItem>
                                        <MenuItem value={'Egypt'}>Egypt</MenuItem>
                                        <MenuItem value={'Poland'}>Poland</MenuItem>
                                        <MenuItem value={'Brazil'}>Brazil</MenuItem>
                                        <MenuItem value={'Portogal'}>Portogal</MenuItem>
                                        <MenuItem value={'Belguim'}>Belguim</MenuItem>
                                        <MenuItem value={'Denmark'}>Denmark</MenuItem>
                                        <MenuItem value={'Phlistine'}>Phlistine</MenuItem>

                                    </Select>
                                    <Input placeholder="City or ZIP code" className="border-2 rounded-md mt-4 h-14 ps-2" startAdornment={
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    } />
                                </FormControl>

                            </div>
                            <div className="pt-8 ps-8 pe-8 font-bold text-lg">
                                <h1 className="pb-6">Company status</h1>
                                <Divider />
                                <FormControlLabel className="flex justify-between pe-2" dir="rtl" label="Verified"
                                    control={
                                        <Checkbox name="Verified" />
                                    }

                                />
                                <Divider />
                                <FormControlLabel className="flex justify-between pe-2 pb-4" dir="rtl" label="Claimed"
                                    control={
                                        <Checkbox name="Claimed" />
                                    }

                                />

                            </div>

                        </div>

                        <div className=" bg-white border-gray-300 border-[1px] rounded-lg mt-8">
                            <div className="pt-8 ps-8 pe-8 font-bold text-lg">
                                <h1>Related categories</h1>

                                <div className="flex justify-between font-normal text-sm my-3">
                                    <h1>ATM</h1>
                                    <p>24</p>
                                </div>
                                <Divider />
                                <div className="flex justify-between font-normal text-sm my-3">
                                    <h1>Cashback Provider</h1>
                                    <p>17</p>
                                </div>
                                <Divider />
                                <div className="flex justify-between font-normal text-sm my-3">
                                    <h1>Cryptocurrency Service</h1>
                                    <p>1932</p>
                                </div>
                                <Divider />
                                <div className="flex justify-between font-normal text-sm my-3 pb-4">
                                    <h1>Financial Institution</h1>
                                    <p>553</p>
                                </div>
                                <Divider />
                            </div>

                        </div>
                    </div>

                    <div className="col-span-2 mt-8 lg:col-span-7">
                        <div className="flex justify-between items-center text-sm">
                            <h1>1-20 of 70 results</h1>
                            <section className="flex items-center">
                                <span className="me-3"> Sort by</span>
                                <FormControl className=''>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        defaultValue={"Most relevant"}
                                        className='bg-white rounded-md w-[16.7rem] mt-3'
                                    >
                                        <MenuItem selected value={'Most relevant'}>Most relevant</MenuItem>
                                        <MenuItem value={'highest number of reviews'}>highest number of reviews</MenuItem>
                                        <MenuItem value={'most recent reviews'}>most recent reviews</MenuItem>
                                    </Select>

                                </FormControl>

                            </section>
                        </div>

                        <div className="bg-sky-200 font-extrabold text-sm p-5 my-3">
                            What does sorting by relevance mean?
                        </div>


                        {
                            companies.map((company, index) =>
                                <CompanyItem key={index}
                                    title={company.title}
                                    rateSrc={company.rateSrc}
                                    logo={company.logo}
                                    reviewers={company.reviewers}
                                    score={company.score}
                                     />
                            )
                        }

                    </div>

                </div>

            </section></>
    );
}

export default CategoryPage;