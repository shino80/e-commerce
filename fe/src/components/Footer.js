import {
  EmailOutlined,
  FacebookOutlined,
  Instagram,
  Mail,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  height: 40vh;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0;
  font-weight: 500;
`;
const SocialContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  padding: 20px;
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
  cursor: pointer;
`;
const Right = styled.div`
  flex: 1;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 75%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Goraku.</Logo>
        <Desc>
          Fashion is an ever-evolving form of self-expression, encompassing
          clothing, accessories, and style trends. It reflects cultural
          influences, personal tastes, and societal dynamics
        </Desc>
        <SocialContainer>
          <SocialIcon bg="4E5FF7">
            <FacebookOutlined />
          </SocialIcon>
          <SocialIcon bg="FF66B2">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="A0A0A0">
            <EmailOutlined />
          </SocialIcon>
          <SocialIcon bg="4E5FF7">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Sport Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Terms</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Policy</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} /> Tokyo Japan
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +12 3091 9301 111
        </ContactItem>
        <ContactItem>
          <Mail style={{ marginRight: "10px" }} /> goraku.@gmail.com
        </ContactItem>
        <Payment src="https://www.sbpayment.jp/images/service/asp/img_experience01_icon.png" />
      </Right>
    </Container>
  );
};

export default Footer;
