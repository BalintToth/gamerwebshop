import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  margin-top: 30px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ fontSize: "18px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ marginTop: "10px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const history = useHistory();

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const handleCategory = (value) => {
    history.push(`/products/${value}`);
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="brand" onChange={handleFilters}>
            <Option selected value="">Brand</Option>
            <Option>Logitech</Option>
            <Option>SteelSeries</Option>
            <Option>Razer</Option>
            <Option>Cooler Master</Option>
            <Option>Xtrfy</Option>
          </Select>
          <Select name="color" onChange={handleFilters}>
            <Option selected disabled>Color</Option>
            <Option>black</Option>
            <Option>white</Option>
            <Option>blue</Option>
            <Option>red</Option>
          </Select>
          <Select name="category" onChange={event => handleCategory(event.target.value)}>
            <Option selected value="peripherals">Category</Option>
            <Option value="headset">Headset</Option>
            <Option value="keyboard">Keyboard</Option>
            <Option value="mouse">Mouse</Option>
            <Option value="mousepad">Mousepad</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price ascending</Option>
            <Option value="desc">Price descending</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
