const { HomeOutlined, Groups2Outlined, ShoppingCartOutlined, ReceiptLongOutlined, AdminPanelSettingsOutlined } = require("@mui/icons-material");

const navItems=[
    {
        text: "Dashboard",
        icon: <HomeOutlined/>
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
        text: "Transactions",
        icon: <ReceiptLongOutlined/>
    },
    {
        text: "Admin",
        icon: <AdminPanelSettingsOutlined/>
    },
   
]

export default navItems