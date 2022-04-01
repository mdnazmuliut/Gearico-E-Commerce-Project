import { useEffect, useState } from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import ProductPreview from "./ProductPreview";

const Products = () => {
  const [catSelection, setCatSelection] = useState(null);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    // clear any selected category from state upon inital page load
    setCatSelection(null);

    // fetching all items
    fetch("/api/get-items")
      .then((res) => res.json())
      .then((data) => setProducts(data.data.slice(0, 10)))
      .catch((err) => console.log("error:", err));
  }, []);

  useEffect(() => {
    // fetching all items from a category any time a different category is selected
    fetch(`/api/get-items/cat/${catSelection}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.data.slice(0, 10)))
      .catch((err) => console.log("error:", err));
  }, [catSelection]);

  return (
    <Wrapper>
      {sidebarToggle ? (
        <Sidebar
          setSidebarToggle={setSidebarToggle}
          setCatSelection={setCatSelection}
          catSelection={catSelection}
        />
      ) : (
        <SidebarButton onClick={() => setSidebarToggle(true)}>
          sidebar
        </SidebarButton>
      )}
      <MainDiv>
        <TitleDiv cat={catSelection}>
          <h1>{ catSelection || "Products" }</h1>
        </TitleDiv>
        <ProductsGrid>
            {products?.map((product) => {
              return <ProductPreview productInfo={product} key={product._id} />;
            })}
        </ProductsGrid>
      </MainDiv>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
`;

const TitleDiv = styled.div`
  padding: 100px 0;
  width: 100%;
  background-color: ${({cat}) => cat ? "#ccc" : "#000"};
`;

const SidebarButton = styled.button`
  background: none;
  font-weight: 700;
  height: auto;
  cursor: pointer;
  position: absolute;

`;

const ProductsGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default Products;
