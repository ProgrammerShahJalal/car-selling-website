import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 240;


function Navbar(props) {

  const {user, logout} = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const list = (
    <Box
        sx={{ width: 250 }}
        role="presentation"
    >
        <List>
            <ListItem button>
                <ListItemText>
                    <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>
                    <Link style={{ textDecoration: 'none' }} to='/cars'>Explore Car</Link>
                </ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemText>
                    <Link style={{ textDecoration: 'none' }} to='/testimonials'>Reviews</Link>
                </ListItemText>
            </ListItem>
            {user?.email ?
                <Box>
                    <ListItem button>
                        <ListItemText>
                            <Link style={{ textDecoration: 'none' }} to='/dashboard'>Dashboard</Link>
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
                        <Link style={{ textDecoration: 'none' }} to='/login'>Login</Link>
                    </ListItemText>
                </ListItem>
            }
        </List>
        <Divider />
    </Box>
);


  const container = window !== undefined ? () => window().document.body : undefined;

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Enzo Car</Link>
          </Typography>
         
          <NavLink  to="/cars" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit" sx={{ display: {xs: 'none', sm: 'block'}}}>Explore Car</Button></NavLink>
                        <NavLink  to="/testimonials" style={{ textDecoration: 'none', color: 'white' }}><Button color="inherit"sx={{ display: {xs: 'none', sm: 'block'}}}>Reviews</Button></NavLink>
                        {
                            user?.email ?
                                <Box sx={{ display: {xs: 'none', sm: 'block'}}}>
                                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                                        <Button color="inherit">Dashboard</Button>
                                    </NavLink>
                                    <Button color="inherit">{user.displayName}</Button>
                                    <Button onClick={logout} color="inherit">Logout</Button>
                                </Box>
                                :
                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                                    <Button color="inherit" sx={{ display: {xs: 'none', sm: 'block'}}}>Login</Button>
                                </NavLink>
                        }
          
        </Toolbar>
      </AppBar>

      <div>

                <Box component="nav">
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
                        {list}
                    </Drawer>
                </Box>
            </div>
        <Toolbar />
      </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;