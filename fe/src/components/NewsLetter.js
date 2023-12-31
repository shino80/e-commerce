import React from "react";
import styled from 'styled-components'
import { Send } from "@mui/icons-material";
import { moblie } from "../responsive";
const Container = styled.div`
height: 40vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


`;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
${moblie({fontSize:'60px'})};
`;
const Desc = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 30px;
${moblie({textAlign:'center',fontSize:'12px'})};
`;
const InputContainer = styled.div`

width: 50%;
height: 40px;
background-color: white;
display: flex;

justify-content: space-between;
border: 1px solid lightgray;
${moblie({with:'80%'})};
`
const Input = styled.input`
border:none;
flex: 8;
padding-left: 20px;
`
const Button = styled.button`
flex: 1;
border: none;
background-color: teal;
color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your Email " />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
