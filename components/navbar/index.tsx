"use client"

import { Search } from "@mui/icons-material";
import { AppBar, Box, Button, Divider, Drawer, IconButton, Input, InputAdornment, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Image from "next/image";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { useMemo, useState } from "react";

const drawerWidth = 240;
const Navbar = () => {

    const [navbarInputVisible, setNavBarInputVisivle] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    function NavBarInputShownRendered() {


        useScrollPosition(({ currPos }) => {

            let currentPosition = Math.abs(currPos.y);
            if (currentPosition > 200) {
                setNavBarInputVisivle(true);
            } else {
                setNavBarInputVisivle(false);
            }

        });

        return useMemo(
            () => (
                navbarInputVisible ? <Input className="bg-white w-[46%] mx-7 h-4/6 p-3 rounded-lg " startAdornment={
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                } placeholder="search for company or category ..." /> : <Input className="bg-white w-[46%] mx-7 h-4/6 p-3 rounded-lg invisible" startAdornment={
                    <InputAdornment position="start">
                        <Search />
                    </InputAdornment>
                } placeholder="search for company or category ..." />
            ),
            [navbarInputVisible]
        );
    }


    return (<>


            <AppBar component="nav" className="h-[4.5rem]">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
                        <div className="h-[4.5rem]  w-full flex items-center px-[5rem] fixed top-0 z-50">

                            <a href="/" className="ms-14">
                                <Image src={"/images/logo.svg"} width={137} height={137} alt="logo image" />
                            </a>

                            {
                                <NavBarInputShownRendered />
                            }

                            <div className=" h-full  text-sm">
                                <ul className="list-none flex h-full p-0 m-0 justify-start text-white ">
                                    <li className="border-b-[3.5px] border-b-[#1c1c1c] hover:border-b-[#FFF] px-3 h-full flex items-center"><a href="/categories">Categories</a></li>
                                    <li className="border-b-[3.5px] border-b-[#1c1c1c] hover:border-b-[#FFF] px-3 h-full flex items-center"><a href="/review">Blog</a></li>
                                    <li className="border-b-[3.5px] border-b-[#1c1c1c] hover:border-b-[#FFF] px-3 h-full flex items-center"><a href="/categories/bank">Log in</a></li>

                                    <li className="flex items-center">
                                    <Button className=" bg-indigo-300 text-black rounded-full text-xs font-bold px-6 h-1/2 py-3 hover:text-white hover:bg-indigo-800">For bussiness</Button>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ my: 2 }}>
                            Trustpilot
                        </Typography>
                        <Divider />
                        <List>
                            <ListItem>Categories</ListItem>
                            <ListItem>Blog</ListItem>
                            <ListItem>Log in</ListItem>

                            <Button className=" bg-indigo-300 text-black rounded-full text-xs font-bold px-6 py-3 hover:text-white hover:bg-indigo-800">For bussiness</Button>

                        </List>
                    </Box>
                </Drawer>
            </nav>

    </>);
}

export default Navbar;