import { Divider } from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ShareIcon from '@mui/icons-material/Share';
import FlagIcon from '@mui/icons-material/Flag';
import { ReviewItemType } from "@/types/types";



const ReviewItem = ({...reviewer}:ReviewItemType) => {
    return ( 

        <div className="bg-white border-gray-300 border-[1px] rounded-lg mt-8 relative">

        <div className="flex justify-start m-4">

            <img src={reviewer.logo} alt="company logo" className="rounded-full w-12 h-12" />

            <section className="ms-3">
                <h1 className="font-bold">{reviewer.title}</h1>

                <div className="">
                    <span className="text-gray-500 text-sm">{reviewer.reviewers} reviews</span>
                    <span className="text-gray-500 text-sm ms-3 "><LocationOnIcon className="text-lg" /> GB</span>
                </div>
            </section>


        </div>
        <Divider />
        <div className="flex justify-between m-6">
            <aside className="flex">
                <img src={reviewer.rateSrc} width={130} alt="" />
                <span className="text-gray-500 ms-3">
                    <CheckCircleIcon className="text-lg mb-1 mx-1" />
                    <span >Verified</span>
                </span>
            </aside>
            <section>
                <h1 className="text-gray-600">{reviewer.time}</h1>
            </section>
        </div>

        <div className="m-6">
            <h1 className="text-2xl font-extrabold mt-2">Always been a great experience dealing…</h1>
            <p className="font-semibold my-4">Always been a great experience dealing with you guys unfortunately my we Toby passed away Tuesday last
                Thanks for all your help and gratitude over the past few years</p>

            <span className="font-bold flex">Date of experience:
                <p className="font-normal"> August 05, 2024</p>
            </span>
        </div>
        <Divider />
        <div className="flex items-center justify-between mx-6 py-2">
            <section className=" my-2 flex items-center font-normal text-xs text-gray-600 hover:text-blue-600 cursor-pointer">
                <ThumbUpIcon /><span className="mx-2">Usefull</span>
                <ShareIcon className="ms-4" /><span className="mx-2">Share</span>


            </section>
            <FlagIcon />
        </div>
    </div>
     );
}

export default ReviewItem;