import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography, Button, TextField } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from '../../assets/wowclub.png';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './style';
const Navbar = ({ totalItems, handleSearch }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar positon="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit" style={{ textDecoration: 'none' }}>
                        <img src={logo} alt="LTP Shop" height="25px" className={classes.image} />
                        WOW CLUB
                    </Typography>
                    <div className={classes.category}>

                        <Button className={classes.list} component={Link} to="/top">TOP</Button>
                        <Button className={classes.list} component={Link} to="/bottom">BOTTOM</Button>
                    </div>
                    <div className={classes.grow} />
                    {location.pathname != '/cart' && (
                        <div className={classes.button}>
                            <TextField className={classes.textField}
                                InputProps={{
                                    className: classes.input,
                                }}
                                InputLabelProps={{
                                    style: { color: 'grey' },
                                }}
                                id="outlined-basic"
                                label="Search"
                                variant="outlined"
                                onChange={handleSearch} />
                            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary">
                                    <ShoppingCart style={{ color: 'white' }} />
                                </Badge>
                            </IconButton>
                        </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
