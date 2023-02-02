import React from 'react';
import { commerce } from './lib/commerce';
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products, Navbar, Cart, Checkout, SlideShow, Footer, TopProducts, BottomProducts, DetailProDuctPage } from './Components';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [topProducts, setTopProducts] = useState([]);
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
    console.log(data)
  }
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const fetchTopProducts = async () => {
    const topproducts = await commerce.products.list({
      category_slug: ['top'],
    }).then(response => response.data);
    setTopProducts(topproducts)
    console.log(topProducts)
  }
  const handleSearch = (e) => {
    const filteredData = products.filter((product) => {

      if (e.target.value === '') return product
      else return (product.name.toLowerCase().includes((e.target.value).toLowerCase()))
    })
    setFilteredData(filteredData)
  }
  const handleAddToCart = async (productId, quantity, option = {}) => {
    const { cart } = await commerce.cart.add(productId, quantity, { ...option, });
    setCart(cart);
    toast.success("Add success");
  }
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart)
    toast.success("Update success");
  }
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
    toast.success("Delete product success");
  }
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
    toast.success("Empty cart success");
  }
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart);
  }
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
      setOrder(incomingOrder);
      refreshCart();
    }
    catch (error) {
      setErrorMessage(error.data.error.message)
    }
  }
  useEffect(() => {
    fetchProducts();
    fetchCart();
    fetchTopProducts();
  }, []);
  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items} handleSearch={handleSearch} />

        <Switch>
          <Route exact path="/">
            <SlideShow />
            <Products products={products} onAddToCart={handleAddToCart} filteredData={filteredData} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart} />
          </Route>
          <Route exact path="/product-view/:id">
            <DetailProDuctPage onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/top">
            <TopProducts topProducts={topProducts} onAddToCart={handleAddToCart} filteredData={filteredData} />
          </Route>
          <Route exact path="/product/:productId">
            <DetailProDuctPage products={products} />
          </Route>
          <Route exact path="/bottom">
            <BottomProducts onAddToCart={handleAddToCart} />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
