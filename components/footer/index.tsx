import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YoutubeIcon from '@mui/icons-material/Youtube';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
const Footer = () => {
    return (


        <footer className="bg-[#1c1c1c] px-36 text-white">
            <img src={"/images/logo.svg"} className="py-16" width={137} height={137} alt="logo image" />


            <section className="grid grid-cols-6 lg:grid-cols-10">

                <div className="col-span-2">
                    <h2 className="text-lg font-bold text-gray-500">About</h2>
                    <ul className="list-none text-sm">
                        <li className="my-4"> About us</li>
                        <li className="my-4">Jobs</li>
                        <li className="my-4">Contact</li>
                        <li className="my-4">Blog</li>
                        <li className="my-4">How Trustpilot works</li>
                        <li className="my-4">Transparency Report</li>
                        <li className="my-4">Press</li>
                        <li className="my-4">Investor Relations</li>
                        <li><img src="https://cdn.trustpilot.net/app-store/ios/badges/en-US.svg" alt="" className='cursor-pointer' /></li>
                    </ul>
                </div>
                <div className="col-span-2"> <h2 className="text-lg font-bold text-gray-500">Community</h2>
                    <ul className="list-none text-sm">
                        <li className="my-4"> Trust in reviews</li>
                        <li className="my-4">Help Center</li>
                        <li className="my-4">Log in</li>
                        <li className="my-4">Sign up</li>
                    </ul>
                </div>
                <div className="col-span-2"> <h2 className="text-lg font-bold text-gray-500">Businesses</h2>
                    <ul className="list-none text-sm"> <li className="my-4">rustpilot Business</li>
                        <li className="my-4"> Products</li>
                        <li className="my-4">Plans & Pricing</li>
                        <li className="my-4"> Business Login</li>
                        <li className="my-4"> Blog for Business</li></ul>


                </div>
                <div className="col-span-2"> <h2 className="text-lg font-bold text-gray-500">Follow us on
                    <ul className="list-none text-sm">
                        <li className="my-4"><FacebookIcon className='text-white hover:text-gray-400 hover:cursor-pointer' /></li>
                        <li className="my-4"> <TwitterIcon className='text-white hover:text-gray-400 hover:cursor-pointer' /></li>
                        <li className="my-4"><InstagramIcon className='text-white hover:text-gray-400 hover:cursor-pointer' /></li>
                        <li className="my-4"><LinkedInIcon className='text-white hover:text-gray-400 hover:cursor-pointer' /></li>
                        <li className="my-4"><YoutubeIcon className='text-white hover:text-gray-400 hover:cursor-pointer' /></li>
                    </ul>


                </h2></div>
                <div className="col-span-2"> <h2 className="text-lg font-bold text-gray-500">Choose country
                </h2>
                    <FormControl fullWidth className='my-5'>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="countery"
                            defaultValue={'Phistine'}
                            className='bg-white rounded-xl'
                        >
                            <MenuItem selected value={'Danmark'}><div className='flex'>
                                <img src='https://www.worldometers.info/img/flags/da-flag.gif' className='me-3' width={30} /> Danmark</div></MenuItem>
                            <MenuItem value={'Poslka'}>
                                <div className='flex'>
                                    <img src='https://www.worldometers.info/img/flags/pl-flag.gif' className='me-3' width={30} />Poland</div>
                            </MenuItem>
                            <MenuItem value={'Brazil'}>
                                <div className='flex'>
                                    <img src='https://www.worldometers.info/img/flags/br-flag.gif' className='me-3' width={30} />Brazil</div>
                            </MenuItem>
                            <MenuItem value={'Protogal'}><div className='flex'>
                                <img src='https://www.worldometers.info/img/flags/po-flag.gif' className='me-3' width={30} />Protogal</div></MenuItem>
                            <MenuItem value={'Phistine'}><div className='flex'>
                                <img src='https://www.worldometers.info/img/flags/palestine-flag.gif' className='me-3' width={30} />Phistine</div></MenuItem>
                        </Select>
                    </FormControl>
                </div>

            </section>

            <section>

                <div className='grid grid-cols-6 text-sm my-7'>
                    <span className='hover:underline cursor-pointer'>Juridiske dokumenter</span>
                    <span className='hover:underline cursor-pointer'>Persondatapolitik</span>
                    <span className='hover:underline cursor-pointer'>Vilkår og betingelser</span>
                    <span className='hover:underline cursor-pointer'>Retningslinjer for brugere</span>
                    <span className='hover:underline cursor-pointer'>Systemstatus</span>

                </div>

                <div className='text-gray-400 py-5 text-sm font-bold'>
                    &copy; 2024 Trustpilot A/S. Alle rettigheder forbeholdes.
                </div>
            </section>

        </footer>


    );
}

export default Footer;