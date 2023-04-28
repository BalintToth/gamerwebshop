import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userRedux";
import { resetCart } from "../redux/cartRedux";

const Container = styled.div`
  height: 60px;
  background-color: black;
  color: white;
  border-bottom: 1.5px solid white;
  ${mobile({ height: "45px", borderBottom: "1px solid white" })}
`;

const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "3px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const LoggedAs = styled.div`
  font-size: 18px;
  margin-left: 30px;
  /* transition: all 0.7s ease;
  &:hover {
    transform: scale(1.2);
    transition: all 0.7s ease;
  } */
  ${mobile({ fontSize: "14px", marginLeft: "10px" })}
`;


const Logout = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 40px;
  transition: all 0.7s ease;
  &:hover {
    transform: scale(1.2);
    transition: all 0.7s ease;
  }
  ${mobile({ fontSize: "14px", marginLeft: "10px" })}
`;


const Center = styled.div`
  text-align: center;
  &:hover .logo {
    transform: scale(1.2);
    transition: all 0.7s ease;
    cursor: pointer;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  transition: all 0.7s ease;
  padding: 5px;
  ${mobile({ fontSize: "24px", marginLeft: "15px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ justifyContent: "right", flex: 2, marginRight: "15px" })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 40px;
  ${mobile({ fontSize: "8px", marginLeft: "18px" })}
`;

const Register = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 40px;
  transition: all 0.7s ease;
  &:hover {
    transform: scale(1.2);
    transition: all 0.7s ease;
  }
  ${mobile({ fontSize: "14px", marginLeft: "10px" })}
`;

const Login = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 40px;
  transition: all 0.7s ease;
  &:hover {
    transform: scale(1.2);
    transition: all 0.7s ease;
  }
  ${mobile({ fontSize: "14px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  return (
    <Container>
      <Wrapper>
        <Left>
          <LoggedAs style={{display: currentUser ? "flex" : "none"}}>{currentUser ? currentUser.username : ""}</LoggedAs>
        </Left>
        <Center>
          <Link to={`/`} style={{ textDecoration: "none", color: "white" }}>
            <Logo className="logo">REFLEX.</Logo>
          </Link>
        </Center>
        <Right>
          <Link to="/register" style={{ textDecoration: "none", color: "white", display: currentUser ? "none" : "flex"}}>
            <Register>REGISTER</Register>
          </Link>
          <Link to="/login" style={{ textDecoration: "none", color: "white", display: currentUser ? "none" : "flex" }}>
            <Login>SIGN IN</Login>
          </Link>
          <Logout style={{ textDecoration: "none", color: "white", display: currentUser ? "flex" : "none" }} onClick={() => {dispatch(logout()); dispatch(resetCart())}}>LOGOUT</Logout>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCart />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
