import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import GlobalStyles from "./GlobalStyles";
import SectionOne from "./Home/Sections/Sec-1";
import Products from "./Products";
import SingleProduct from "./SingleProduct/SingleProduct";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/">
            <SectionOne />
          </Route>
          <Route path="/products/:productId">
            <SingleProduct />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );

};

export default App;
