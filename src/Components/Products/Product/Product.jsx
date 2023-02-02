import React, { useState } from 'react';
import { Grid, Button, Card, CardMedia, CardContent, CardActions, Typography, IconButton, CardActionArea, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import { AddShoppingCart, ShoppingCart } from '@material-ui/icons';
import useStyles from './style';
import { ToastContainer, toast } from 'react-toastify'
import { Link } from 'react-router-dom';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
const Product = ({ product, onAddToCart }) => {
    const [choose, setChoose] = useState();
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleChange = (event) => {
        setChoose(event.target.value);
    };
    const closeModal = () => setOpen(false);
    return (
        <Card className={classes.root}>
            <ToastContainer
                autoClose={2000}
                theme="dark"
            />
            <Link to={`product-view/${product.id}`} style={{ textDecoration: 'none' }}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={product.media.source} style={{ height: 0, paddingTop: '96.25%' }} title={product.name} />

                    <CardContent>
                        <div className={classes.cardContent} >
                            <Typography variant="h5" gutterBottom>
                                {product.name}
                            </Typography>
                            <Typography variant="h5">
                                {product.price.formatted_with_symbol}
                            </Typography>
                        </div>
                    </CardContent>

                </CardActionArea>

            </Link>

            <Popup
                trigger={
                    <CardActions disableSpacing className={classes.cardActions} >
                        <IconButton aria-label="Add to Cart">
                            <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                }

                closeOnDocumentClick
            >

                {close => (
                    <>
                        <Button className={classes.close} variant="outlined" color="error" size="small" onClick={() => close()} >
                            &times;
                        </Button>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">Size</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                                className='size'
                                onChange={handleChange}
                            >
                                {
                                    product.variant_groups?.length ?
                                        product.variant_groups[0].options?.map((option) =>
                                            <FormControlLabel value={option.id} control={<Radio />} label={option.name} />
                                        ) : null}
                            </RadioGroup>
                        </FormControl>
                        <CardActions disableSpacing className={classes.cardActions} >
                            <Grid item xs={12}>
                                <Button
                                    size="large"
                                    className={classes.customButton}
                                    style={{
                                        color: '#000',
                                        backgroundColor: '#bb86fc',

                                    }}
                                    onClick={() => {
                                        onAddToCart(product.id, 1, { [product.variant_groups[0].id]: choose });
                                    }}
                                >
                                    <ShoppingCart /> Add to cart
                                </Button>
                            </Grid>
                        </CardActions>
                    </>
                )}
            </Popup>
        </Card>
    );
}

export default Product;
