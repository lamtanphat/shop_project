import { Container, Grid, Typography, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core'
import { ImageRounded, ShoppingCart } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import { commerce } from '../../lib/commerce';
import "./style.css";
const DetailProduct = ({ onAddToCart }) => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [choose, setChoose] = useState();
    const handleQuantity = (param) => {
        if (param === "decries" && quantity > 1) {
            setQuantity(quantity - 1)
        }
        if (param === "increase" && quantity < 10) {
            setQuantity(quantity + 1)
        }
    }
    const handleChange = (event) => {
        setChoose(event.target.value);
    };

    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        console.log(response)
        const { name, price, media, quantity, description, assets, variant_groups } = response
        setProduct({
            id, name, quantity, description, src: media.source, assets, price: price.formatted_with_code, variant_groups
        });
    };
    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);
    }, [])
    return (
        <Container className="productView">
            <Grid container-spacing={4} style={{ display: 'flex' }}>
                <Grid item xs={12} md={8} className="imageWrapper">

                    <img
                        // onLoad={()=>{
                        //     setLoading(false);
                        // }}
                        src={product.src}
                        alt={product.src}
                    />

                </Grid>

                <Grid item xs={12} md={4} className="text">
                    <Typography variant="h2" >{product.name}</Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="h3" />

                    <Typography variant="h3" >Price: {product.price}</Typography>
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
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Button
                                size="small"
                                variant="contained"
                                className="increaseProductQuantity"
                                onClick={() => {
                                    handleQuantity("increase");
                                }}
                            >
                                +
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography className="quantity" variant="h3">
                                Quantity: {quantity}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                size="small"
                                color="secondary"
                                variant="contained"
                                onClick={() => {
                                    handleQuantity("decries");
                                }}
                            >
                                -
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                size="large"
                                className="customButton"
                                onClick={() => {
                                    onAddToCart(product.id, quantity, { [product.variant_groups[0].id]: choose });
                                }}
                            >
                                <ShoppingCart /> Add to cart
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}

export default DetailProduct