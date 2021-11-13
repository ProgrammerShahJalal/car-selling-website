import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import AdminRoute from '../../Login/Login/AdminRoute/AdminRoute';
import useAuth from '../../../hooks/useAuth';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Pay from '../../Pay/Pay';
import AddReview from '../../Home/Reveiws/AddReview/AddReview';
import ReviewSlider from '../../Home/Reveiws/ReviewSlider/ReviewSlider';
import MyOrders from '../MyOrders/MyOrders';
import Orders from '../Orders/Orders';
import AddService from '../../AddService/AddService';
import ManageServices from '../../AddService/ManageServices/ManageServices';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { AddBusiness } from '@mui/icons-material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LogoutIcon from '@mui/icons-material/Logout';
import StarsIcon from '@mui/icons-material/Stars';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SellIcon from '@mui/icons-material/Sell';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


const drawerWidth = 200;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const { admin, logout } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <Link to={`${url}`} style={{ textDecoration: 'none' }}><Button style={{ color: 'black' }} variant="text"><DashboardIcon sx={{ mr: '10px', color: 'blue' }} /> Dashboard</Button></Link>

                {admin && <Box>
                    <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none' }}><Button style={{ color: 'black' }} variant="text"><VerifiedUserIcon sx={{ mr: '10px', color: 'blue' }} /> Make Admin</Button></Link>

                    <Link to={`${url}/addService`} style={{ textDecoration: 'none' }}><Button style={{ color: 'black' }} variant="text"><AddBusiness sx={{ mr: '10px', color: 'blue' }} />Add Service</Button></Link>

                    <Link to={`${url}/orders`} style={{ textDecoration: 'none' }}><Button style={{ color: 'black' }} variant="text"><SellIcon sx={{ mr: '10px', color: 'blue' }} />Manage Orders</Button></Link>

                    <Link to={`${url}/services`} style={{ textDecoration: 'none' }}><Button style={{ color: 'black' }} variant="text"><BusinessCenterIcon sx={{ mr: '10px', color: 'blue' }} />Manage Services</Button></Link>
                </Box>}

                <Link to={`${url}/myOrders`} style={{ textDecoration: 'none' }}><Button style={{ color: 'black' }} variant="text"><ShoppingCartIcon sx={{ mr: '10px', color: 'blue' }} />My Orders</Button></Link>


                <Link to={`${url}/pay`} style={{ textDecoration: 'none' }}><Button style={{ color: 'black' }} variant="text"><AccountBalanceWalletIcon sx={{ mr: '10px', color: 'blue' }} />Payment</Button></Link>



                <Link to={`${url}/reviews`} style={{ textDecoration: 'none' }}><Button style={{ color: 'black' }} variant="text"><ReviewsIcon sx={{ mr: '10px', color: 'blue' }} />All Reviews</Button></Link>


                <Link to={`${url}/addReview`} style={{ textDecoration: 'none' }}><Button style={{ color: 'black' }} variant="text"><StarsIcon sx={{ mr: '10px', color: 'blue' }} />Add Review</Button></Link>



                <Button onClick={logout} style={{ color: 'black' }} variant="text"><LogoutIcon sx={{ mr: '10px', color: 'blue' }} />Logout</Button>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Typography variant="h6" noWrap component="div">
                        <Link to='/home' style={{ textDecoration: 'none', color: 'white', marginLeft: '20px' }}>Home</Link>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
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
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addService`}>
                        <AddService></AddService>
                    </AdminRoute>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <AdminRoute path={`${path}/orders`}>
                        <Orders></Orders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/services`}>
                        <ManageServices></ManageServices>
                    </AdminRoute>
                    <Route path={`${path}/reviews`}>
                        <ReviewSlider></ReviewSlider>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;