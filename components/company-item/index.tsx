import LanguageIcon from '@mui/icons-material/Language';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import { Divider } from '@mui/material';
import { CompanyItemType } from '@/types/types';




const CompanyItem = ({...company}:CompanyItemType) => {
    return (


        <div className="bg-white border-gray-300 border-[1px] rounded-lg mt-8 relative">

            <div className="absolute bg-gray-200 text-xs font-bold px-2 py-[1px] right-2 top-2">MOST RELEVANT</div>
            <div className="flex justify-start m-4">

                <img src={`/images/${company.logo}.avif`} width={100} alt="company logo" className="" />

                <section className="ms-3">
                    <h1 className="font-bold">{company.title}</h1>

                    <div className="flex items-center">
                        <img src={company.rateSrc} className="my-2" width={110} alt="rate image" />
                        <span className="text-gray-500 text-sm ms-5">TrustScore {company.score} | {company.reviewers} reviews</span>
                    </div>
                    <p className="text-gray-500 text-sm">Egypt, United Status</p>
                </section>


            </div>

            <Divider />
            <div className="flex items-center">
                <section className="mx-5 my-2 font-normal text-xs text-gray-600 hover:text-blue-600 cursor-pointer">
                    <LanguageIcon />
                    <MailOutlineIcon className="mx-2" />
                    <CallIcon />

                </section>

                |
                <h1 className="mx-5 text-xs font-semibold">Bank · Financial Consultant · Mortgage Lender · Federal Credit Union</h1>
            </div>
        </div>
    );
}

export default CompanyItem;