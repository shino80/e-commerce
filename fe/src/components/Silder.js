import React, { useState } from "react";
import { styled } from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: white;
  position: relative;
  margin-top: 20px;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;

  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background:#${props=>props.bg} ;
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Img = styled.img`
  width: 80%;
  height: 80%;
  margin: 50px;
  object-fit: cover;
  border: 1px solid white;
  border-radius: 50%;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
font-size: 70px;

`
const Desc = styled.p`
margin: 50px 0;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`
const Slider = () => {

    const [slideIndex,setSlideIndex] = useState(0)


    const handleClick = (direction) =>{
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }



  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick('left')}  >
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper  slideIndex = {slideIndex}>
        <Slide bg="f5fafd">
          <ImgContainer>
                <Img src="https://images.unsplash.com/photo-1622290319146-7b63df48a635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHNoaXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"/>
          </ImgContainer>

          <InfoContainer>

            <Title>SUPER SALE !</Title>
            <Desc> GET FLAT 30% OF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="fbf0f4">
          <ImgContainer>
                <Img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"/>
          </ImgContainer>

          <InfoContainer>

            <Title>SUPER SALE !</Title>
            <Desc> GET FLAT 30% OF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide bg="coral">
          <ImgContainer>
                <Img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2487&q=80"/>
          </ImgContainer>

          <InfoContainer>

            <Title>SUPER SALE !</Title>
            <Desc> GET FLAT 30% OF FOR NEW ARRIVALS</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right"  onClick={()=>handleClick('right')}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
