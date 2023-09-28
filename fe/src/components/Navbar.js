import React from "react";
import styled from "styled-components";
import { ShoppingCart } from "@mui/icons-material";
import { AiOutlineSearch } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import { moblie } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 60px;
  ${moblie({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${moblie({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Langague = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${moblie({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${moblie({ width: "50px" })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${moblie({ fontSize: "15px" })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${moblie({ flex: 2, justifyContent: "center" })};
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${moblie({ fontSize: "10px", marginLeft: "10px" })};
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Langague>EN</Langague>
            <SearchContainer>
              <Input />
              <AiOutlineSearch style={{ color: "gray", fontSize: "16px" }} />
            </SearchContainer>
          </Left>
          <Center>
            <Link className="link" to="/">
              {" "}
              <Logo>GORAKU.</Logo>
            </Link>
          </Center>
          <Right>
            <Link className="link" to="/register">
              <MenuItem>REGISTER</MenuItem>
            </Link>
            <Link className="link" to="/login">
              <MenuItem>SIGN IN</MenuItem>
            </Link>
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCart color="action" />
                </Badge>
              </MenuItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Navbar;
