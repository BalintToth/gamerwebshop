import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 75vh;
  position: relative;
  background-color: black;
  overflow: hidden;
  ${mobile({ height: "80vh", marginBottom: "5px" })}
  cursor: pointer;
  &:hover .image {
    transform: scale(1.15);
    ${mobile({ transform: "scale(1.10)" })}
    transition: all 0.7s ease;
  }
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.25);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 75%;
  padding-top: 35px;
  object-fit: cover;
  transition: all 1s ease;
  ${mobile({ paddingTop: "15px", height: "45vh" })}
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
  margin-bottom: 15px;
  ${mobile({ display: "none" })}
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Image src={item.img} className="image" />
        <Info>
          <Title>{item.title}</Title>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
