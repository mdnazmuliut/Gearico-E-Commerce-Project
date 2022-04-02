import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home/Home";
import Products from "./Products";
import SingleProduct from "./SingleProduct/SingleProduct";
import Cart from "./Cart/Cart";

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
          <Route path="/products/:productId">
            <SingleProduct />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
