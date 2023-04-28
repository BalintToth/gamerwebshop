import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.25)
    ),
    url("iStock-1010650972.jpg") center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: 1px solid teal;
  padding: 15px 20px;
  background-color: teal;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 16px;
  color: white;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: inset 24em 0 0 0 white;
    color: teal;
    transition: all 0.7s ease;
  }
  transition: all 1s ease;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Linka = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Something went wrong...</Error>}
          <Link to="/register" style={{ textDecoration: "none", color: "black" }}>
            <Linka>CREATE A NEW ACCOUNT</Linka>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Linka>GET BACK TO THE SHOP</Linka>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
