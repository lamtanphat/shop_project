import React, { useEffect, useState } from 'react'
import useStyles from '../style';
import { Grid, Typography, Button } from '@material-ui/core';
import Product from '../Product/Product';
import { commerce } from '../../../lib/commerce';
const BottomProducts = (onAddToCart) => {
    const [bottomProducts, setBottomProducts] = useState([])
    const classes = useStyles();
    const fetchBottomProducts = async () => {
        const botproducts = await commerce.products.list({
            category_slug: ['bot'],
        }).then(response => response.data);
        setBottomProducts(botproducts)
    }
    useEffect(() => {
        fetchBottomProducts()
    }, []);
    return (

        <main className={classes.content}>
            <Grid container justifyContent="center" spacing={4}>
                {bottomProducts.map((product) => (

                    <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>

    )
}

export default BottomProducts