import styled from "styled-components";
import { mobile } from "../responsive";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.25)
    ),
    url("iStock-1010650468.jpg") center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: "column" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 15px 10px 5px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
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
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Linka = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain !== password || username === "" || email === "" || password === "") {
      alert(
        "Something is wrong!\n\n-You might forgot to fill some input!\n\n-Passwords may not match the credentials or each other!"
      );
    } else {
      const user = {
        username: username,
        email: email,
        password: password,
      };
      try {
        await axios.post("http://localhost:5000/api/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }      
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="username"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            required
            minLength={6}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            placeholder="confirm password"
            type="password"
            required
            minLength={6}
            onChange={(e) => setPasswordAgain(e.target.value)}
          />
        </Form>
        <Agreement>
          By creating an account, I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>.
        </Agreement>
        <Button onClick={handleClick}>CREATE</Button>
        <LinkContainer>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <Linka>I ALREADY HAVE AN ACCOUNT</Linka>
          </Link>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Linka>GET BACK TO THE SHOP</Linka>
          </Link>
        </LinkContainer>
      </Wrapper>
    </Container>
  );
};

export default Register;
