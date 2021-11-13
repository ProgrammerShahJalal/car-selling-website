import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { Divider, Drawer, List, ListItem, ListItemText, useTheme } from '@mui/material';


const Navigation = () => {
    const { user, logout } = useAuth();

    const theme = useTheme();
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right !important'
            }
        }
    });
    const { navIcon, navItemContainer, navLogo } = useStyle();

    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText>
                        <Link to='/'>Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link to='/products'>Explore Car</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText>
                        <Link to='/testimonials'>Reviews</Link>
                    </ListItemText>
                </ListItem>
                {user.email ?
                    <Box>
                        <ListItem button>
                            <ListItemText>
                                <Link to='/dashboard'>Dashboard</Link>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>
                                <Button onClick={logout} color="inherit">Logout</Button>
                            </ListItemText>
                        </ListItem>
                        <ListItem button>
                            <ListItemText>
                                <Button color="inherit">{user.displayName}</Button>
                            </ListItemText>
                        </ListItem>
                    </Box>
                    :
                    <ListItem button>
                        <ListItemText>
                            <Link to='/login'>Login</Link>
                        </ListItemText>
                    </ListItem>
                }
            </List>
            <Divider />
        </Box>
    );
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>SF CAR</Link>
                        </Typography>


                        <NavLink className={navItemContainer} to="/products" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Explore Car</Button></NavLink>
                        <NavLink className={navItemContainer} to="/testimonials" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit">Reviews</Button></NavLink>
                        {
                            user?.email ?
                                <Box className={navItemContainer}>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>
                                    <Button color="inherit">{user.displayName}</Button>
                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </Box>
                                :
                                <NavLink className={navItemContainer} style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit">Login</Button>
                                </NavLink>
                        }

                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
};

export default Navigation;