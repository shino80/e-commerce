import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
`;

const Left = styled.div``;
const Center = styled.div``;
const Right = styled.div``;

const Navbar = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>Left</Left>
          <Center>center</Center>
          <Right>right</Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
