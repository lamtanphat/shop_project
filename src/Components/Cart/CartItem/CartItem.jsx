import React from 'react'
import { Typography, Button, CardActions, CardContent, CardMedia } from '@material-ui/core';
import useStyles from './style';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();
    return (
        <div>
            {console.log(item)}
            <CardMedia alt={item.name} className={classes.media} >
                <img className={classes.img} src={item.media.source} style={{ width: '360px', height: '203px' }} />
            </CardMedia>
            <CardContent className={classes.cardContent} >
                <Typography variant="h4">{item.name} - {item.selected_options[0].option_name} </Typography>
                <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cartActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Xóa</Button>
            </CardActions>
        </div>
    )
}

export default CartItem
