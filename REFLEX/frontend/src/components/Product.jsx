import { Search, ShoppingCart } from "@material-ui/icons";
import { Link } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  min-width: 380px;
  height: 440px;
  margin: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 128, 128, 0.9);
  position: relative;
  &:hover .info {
    opacity: 1;
  }
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  }
`;

const Image = styled.img`
  width: 75%;
  margin: 20px;
  z-index: 2;
  max-height: 300px;
  max-width: 400px;
  ${mobile({ maxHeight: "none", maxWidth: "none" })}
`;

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.7s ease;
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 12px;
  cursor: pointer;
  transition: all 0.7s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info className="info">
        <Icon>
          <Link to={`/product/${item._id}`} style={{ textDecoration: "none", color: "black" }}>
            <ShoppingCart />
          </Link>
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`} style={{ textDecoration: "none", color: "black" }}>
            <Search />
          </Link>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
