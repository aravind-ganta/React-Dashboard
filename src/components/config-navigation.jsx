import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined,
  } from "@mui/icons-material";

const navItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
        text: "Users",
        icon: <Groups2Outlined/>,
        subItems: [
            {
              text: "User 1",
            },
            {
              text: "User 2",
            },
            
          ],
    },
    {
        text: "Products",
        icon: <ShoppingCartOutlined/>,
        subItems: [
            {
              text: "Product 1",
            },
            {
              text: "Product 2",
            },
            
          ],
    },
    {
      text: "Customers",
      icon: <Groups2Outlined />,
    },
    {
      text: "Contacts",
      icon: <ReceiptLongOutlined />,
    },
    {
      text: "Geography",
      icon: <PublicOutlined />,
    },
    {
      text: "Sales",
      icon: null,
    },
    {
      text: "Overview",
      icon: <PointOfSaleOutlined />,
    },
    {
      text: "Daily",
      icon: <TodayOutlined />,
    },
    {
      text: "Monthly",
      icon: <CalendarMonthOutlined />,
    },
    {
      text: "Breakdown",
      icon: <PieChartOutlined />,
    },
    {
      text: "Management",
      icon: null,
    },
    {
      text: "Admin",
      icon: <AdminPanelSettingsOutlined />,
    },
    {
      text: "Performance",
      icon: <TrendingUpOutlined />,
    },
  ];

  export default navItems