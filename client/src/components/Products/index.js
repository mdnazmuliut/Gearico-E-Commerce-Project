import { useEffect, useState } from "react";
import styled from "styled-components";

import Sidebar from "./Sidebar";
import ProductPreview from "./ProductPreview";
import PageSelect from "./PageSelect";

const Products = () => {
  const [catSelection, setCatSelection] = useState(null);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  // setting the start point for the product fetch, based on the selected page #
  const startPoint = currentPage * 10 - 10;

  // setting the number of items displayed per page
  const numItems = 10;

  useEffect(() => {

    // fetching category-specific items if a category has been selected...
    if (catSelection) {
      fetch(`/api/get-items/cat/${catSelection}?start=${startPoint}&limit=${numItems}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.data))
        .catch((err) => console.log("error:", err));
    } else {

      // ...otherwise, fetching all items
      fetch(`/api/get-items?start=${startPoint}&limit=${numItems}`)
        .then((res) => res.json())
        .then((data) => setProducts(data.data))
        .catch((err) => console.log("error:", err));
    }
  }, [currentPage, catSelection]);

  if (!products) return <div>Loading...</div>;

  return (
    <Wrapper>
      {sidebarToggle ? (
        <Sidebar
          setSidebarToggle={setSidebarToggle}
          setCurrentPage={setCurrentPage}
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
          <h1>{catSelection || "Products"}</h1>
        </TitleDiv>
        <ProductsGrid>
          {products.map((product) => {
            return <ProductPreview productInfo={product} key={product._id} />;
          })}
        </ProductsGrid>
        <PageDiv>
          <PageSelect
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numProducts={products.length}
          />
        </PageDiv>
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
  background-color: ${({ cat }) => (cat ? "#ccc" : "#000")};
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

const PageDiv = styled.div``;

export default Products;
