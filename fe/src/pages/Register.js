import styled from "styled-components";
import { moblie } from "../responsive";
const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://plus.unsplash.com/premium_photo-1684785617522-e2be3c1f3b22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGVjb21tZXJjZSUyMHdlYnNpdGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60")
      center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
  ${moblie({fontSize:'20px'})};
`;
const Input = styled.input`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${moblie({width:'100px'})};
`;
const Button = styled.button`
  width: 10%;
  border: none;
  padding: 15px 15px;
  background-color: teal;
  color: white;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;
  ${moblie({width:'90px'})};
`;
const Login = styled.p`
  font-size: 15px;
  margin: 20px 0;
`;

const LinkSpan = styled.a`
  border: none;
`;
export const Register = () => {
  return (
    <Container>
      <Title>CREATE AN ACCOUNT</Title>
      <Wrapper>
        <Form>
          <Input placeholder="Your Name" />

          <Input placeholder="User name" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
        </Form>
      </Wrapper>
      <Button>CREATE</Button>
      <Login>
        Already have account ? <LinkSpan>Login here .</LinkSpan>
      </Login>
    </Container>
  );
};
