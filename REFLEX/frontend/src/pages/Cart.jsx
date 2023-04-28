import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { Delete } from "@material-ui/icons";
import { removeItem } from "../redux/cartRedux";
import { useCallback } from "react";

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  ${mobile({ padding: "10px", textAlign: "left", marginLeft: "10px" })}
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  background-color: black;
  color: white;
  border: black 2px solid;
  &:hover,
  &:focus {
    box-shadow: inset 12em 0 0 0 white;
    color: black;
    transition: all 0.7s ease;
  }
  transition: all 1s ease;
  cursor: pointer;
  ${mobile({ padding: "10px", fontSize: "14px", margin: "8px" })}
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  border: none;
  background-color: black;
  height: 1px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.div``;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid 1px black;
  background-color: ${(props) => props.color};
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${mobile({
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "10px",
  })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  border: solid 1px teal;
  border-radius: 10%;
  padding: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({ margin: "10px" })}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "600"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: black 2px solid;
  &:hover,
  &:focus {
    box-shadow: inset 35em 0 0 0 white;
    color: black;
    transition: all 0.7s ease;
  }
  transition: all 1s ease;
  cursor: pointer;
`;

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const img = "reflexlogo.png";
  const onToken = (token) => {
    setStripeToken(token);
  };

  const totalPrice = useCallback(() => {
    let total = 0;
    products.forEach((product) => (total += product.quantity * product.price));
    return total.toFixed(2);
  }, [products]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: totalPrice() * 100,
        });
        history.push("/success", {
          stripeData: res.data,
          products: products,
        });
      } catch {}
    };
    stripeToken && totalPrice() >= 1 && makeRequest();
  }, [stripeToken, totalPrice, history, products]);

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <Link to={`/products/peripherals`}>
            <TopButton>CONTINUE SHOPPING</TopButton>
          </Link>
          <StripeCheckout
            name="REFLEX."
            image={img}
            billingAddress
            shippingAddress
            description={`Your total is $ ${totalPrice()} `}
            amount={totalPrice() * 100}
            token={onToken}
            stripeKey={KEY}
          >
            <TopButton>CHECKOUT NOW</TopButton>
          </StripeCheckout>
        </Top>
        <Bottom>
          <Info>
            {products.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b>PRODUCT:</b> {product.title}
                    </ProductName>
                    <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId>
                    <ProductColor color={product.color} />
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Delete
                      style={{
                        fontSize: "32px",
                        marginLeft: "10px",
                        cursor: "pointer",
                        color: "red",
                      }}
                      onClick={() => dispatch(removeItem(product._id))}
                    />
                  </ProductAmountContainer>
                  <ProductPrice>
                    ${product.price * product.quantity}
                  </ProductPrice>
                </PriceDetail>
              </Product>
            ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>YOUR SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${totalPrice()}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- $5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${totalPrice()}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="REFLEX."
              image={img}
              billingAddress
              shippingAddress
              description={`Your total is $ ${totalPrice()} `}
              amount={totalPrice() * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
