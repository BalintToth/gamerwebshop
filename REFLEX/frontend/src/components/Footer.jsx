import {
  GitHub,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Container = styled.div`
  display: flex;
  background-color: black;
  color: white;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Description = styled.p`
  margin: 20px 0px;
  text-align: justify;
`;

const SocialContainer = styled.div`
  display: flex;
  ${mobile({ paddingTop: "15px" })}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: ${(props) => props.color};
  background-color: #${(props) => props.bgcolor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.7s ease;
  &:hover {
    transform: scale(1.15);
    transition: all 0.7s ease;
  }
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>REFLEX.</Logo>
        <Description>
          Have you ever wondered how esport players play? Stop dreaming, because
          REFLEX delivers the best-quality gamer peripherals available with
          affordable prices! Welcome on our webshop, if your have any further
          questions, feel free to contact us through newsletter! Be fast, be
          REFLEX.
        </Description>
        <SocialContainer>
          <a href="https://twitter.com/buykovlrt" target="_blank" rel="noreferrer">
            <SocialIcon bgcolor="55ACEE" color="white">
              <Twitter />
            </SocialIcon>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <SocialIcon bgcolor="E4405F" color="white">
              <Instagram />
            </SocialIcon>
          </a>
          <a href="https://github.com/BalintToth/gamerwebshop" target="_blank" rel="noreferrer">
            <SocialIcon bgcolor="FFFFFF" color="black">
              <GitHub />
            </SocialIcon>
          </a>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful links</Title>
        <List>
          <Link to="/" style={{ textDecoration: "none", color: "white", display: "flex", flexWrap: "wrap", width: "50%", marginBottom: "10px" }}>
            <ListItem>Home</ListItem>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "white", display: "flex", flexWrap: "wrap", width: "50%", marginBottom: "10px" }}>
            <ListItem>Cart</ListItem>
          </Link>
          <Link to="/products/headset" style={{ textDecoration: "none", color: "white", display: "flex", flexWrap: "wrap", width: "50%", marginBottom: "10px" }}>
            <ListItem>Headsets</ListItem>
          </Link>
          <Link to="/products/keyboard" style={{ textDecoration: "none", color: "white", display: "flex", flexWrap: "wrap", width: "50%", marginBottom: "10px" }}>
            <ListItem>Keyboards</ListItem>
          </Link>
          <Link to="/products/mouse" style={{ textDecoration: "none", color: "white", display: "flex", flexWrap: "wrap", width: "50%", marginBottom: "10px" }}>
            <ListItem>Mouses</ListItem>
          </Link>
          <Link to="/products/mousepad" style={{ textDecoration: "none", color: "white", display: "flex", flexWrap: "wrap", width: "50%", marginBottom: "10px" }}>
            <ListItem>Mousepads</ListItem>
          </Link>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          9021 Győr, Szent István út 7.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +36 98 765 4321
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} />
          info@reflex.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
