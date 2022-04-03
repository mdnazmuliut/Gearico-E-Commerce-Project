import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home/Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct/SingleProduct";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <div style={{ height: "80px" }} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/:productId">
            <SingleProduct />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
