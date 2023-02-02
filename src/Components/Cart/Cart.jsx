import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './style';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography className={classes.empty} variant="subtitle1">Giỏ hàng của bạn đang trống,
            <Link to="/" className={classes.link}> hãy thêm sản phẩm vào giỏ hàng!</Link>
        </Typography>
    );
    const FilledCart = () => (
        <>

            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id} >
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}> Xóa giỏ hàng</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary" >Thanh toán</Button>
                </div>

            </div>
        </>
    );

    if (!cart.line_items) return 'Loading....';
    return (

        <Container>
            <ToastContainer
                autoClose={2000}
                theme="light"
            />
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Order</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
