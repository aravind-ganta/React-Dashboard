import React, {useState}from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from "components/Navbar";
import Sidebar from "components/Sidebar";

function Layout() {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const account = {
    name: 'Aravind Ganta',
    email: 'gantaaravind1196@gmail.com',
    photoURL: '/assets/images/user.png'
  };
  
  return ( 
  <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
    <Sidebar
       isNonMobile={isNonMobile}
       drawerWidth="250px"
       isSidebarOpen={isSidebarOpen}
       setIsSidebarOpen={setIsSidebarOpen}
    />
    <Box flexGrow={1}>
        <Navbar
          user = {account}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet/>
    </Box>

  </Box>
  )
}

export default Layout