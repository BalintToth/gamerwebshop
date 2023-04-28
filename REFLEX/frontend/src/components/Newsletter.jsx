import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  flex-direction: column;
  border-top: 1.5px solid black;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 25px;
`;

const InfoContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 14;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Feel free to contact us!</Description>
      <InfoContainer>
        <Input placeholder="Your message" />
        <Button>
          <Send />
        </Button>
      </InfoContainer>
    </Container>
  );
};

export default Newsletter;
