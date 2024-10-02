import React from 'react'
import { 
    Box, 
    Divider, 
    Drawer, 
    IconButton, 
    List, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText, 
    Typography, 
    useTheme,
 } from '@mui/material';
 import { SettingsOutlined,ExpandMore,ChevronLeft, ChevronRightOutlined } from '@mui/icons-material';
 import { useEffect,useState} from 'react';
 import { useLocation, useNavigate } from 'react-router-dom';
 import FlexBetween from './FlexBetween';
 import navItems from './config-navigation';

 const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
  
  const [openSubmenu, setOpenSubmenu] = useState('');
  const {pathname} = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  
  useEffect(() =>{
    setActive(pathname.substring(1));
  }, [pathname])

  const handleMenuClick = (lcText, subItems) => {
    if (subItems) {
      setOpenSubmenu(openSubmenu === lcText ? null : lcText);
    } else {
      navigate(`/${lcText}`);
      setActive(lcText);
    }
  };
  const handleSubmenuClick = (lcText) => {
    navigate(`/${lcText}`);
    setActive(lcText);
  };

  return <Box component="nav">
    {isSidebarOpen && (
        <Drawer
           open={isSidebarOpen}
           onClose={()=>setIsSidebarOpen(false)}
           variant='persistent'
           anchor="left"
           sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
                color: theme.palette.secondary[200],
                backgroundColor: theme.palette.background.alt,
                boxSizing: "border-box",
                borderWidth: isNonMobile ? 0 : "2px",
                width: drawerWidth
            }
           }}
        >
            <Box width="100%">
                <Box m="1.5rem 2rem 2rem 3rem">
                    <FlexBetween color={theme.palette.secondary.main}>
                        <Box display="flex" alignItems="center" gap="0.5rem">
                           <Typography variant='h4' fontWeight="bold">

                           </Typography>
                        </Box>
                        {!isNonMobile &&(
                            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <ChevronLeft/>
                            </IconButton>
                        )}
                    </FlexBetween>
                </Box>
                <List>
                    {navItems.map(({text,icon, subItems})=>{
                        const lcText = text.toLowerCase();
                        const isSubMenuOpen = openSubmenu === lcText;
                        return (
                            <React.Fragment key={text}>
                            <ListItem  disablePadding>
                                <ListItemButton 
                                onClick={() => handleMenuClick(lcText, subItems)}
                                sx={{
                                    backgroundColor: active === lcText ? theme.palette.secondary[300] : "transparent",
                                    color: active === lcText ? theme.palette.primary[600] :  theme.palette.secondary[100],
                                }}
                                >
                                    <ListItemIcon
                                       sx={{
                                        ml: "2rem",
                                        color: active === lcText ? theme.palette.primary[600] :  theme.palette.secondary[200],
                                       }}
                                    >
                                      {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                    {/* {active === lcText && (
                                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                                    )} */}
                                    {subItems  && <ExpandMore sx={{ ml: "auto" }} />}
                                </ListItemButton>
                                </ListItem>
                                {subItems && isSubMenuOpen && (
                      <List sx={{ marginLeft: 11 }}>
                        {subItems.map((subItem) => (
                          <ListItem key={subItem.text} disablePadding>
                            <ListItemButton
                              onClick={() => handleSubmenuClick(subItem.text.toLowerCase())}
                              sx={{ paddingLeft: 2 }}
                            >
                              <ListItemText primary={subItem.text} />
                            </ListItemButton>
                          </ListItem>
                        ))}
                      </List>
                    )}
                         </React.Fragment>
                        )
                    })}
                </List>
            </Box>
        </Drawer>
    )}

  </Box>
}

export default Sidebar