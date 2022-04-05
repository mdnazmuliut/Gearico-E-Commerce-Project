import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home/Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct/SingleProduct";
import Cart from "./Cart/Cart";
import Checkout from "./Checkout/Checkout";
import ErrorPage from "./ErrorPage";
import SignIn from "./SignIn/SignIn";
import AccountPage from "./Account/AccountPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products/id/:productId">
            <SingleProduct />
          </Route>
          <Route path="/products/:category?">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
