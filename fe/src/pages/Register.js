import styled from "styled-components";
import { moblie } from "../responsive";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCall";
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
  ${moblie({ fontSize: "20px" })};
`;
const Input = styled.input`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  ${moblie({ width: "100px" })};
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
  ${moblie({ width: "90px" })};
`;
const Login = styled.p`
  font-size: 15px;
  margin: 20px 0;
`;

const LinkSpan = styled.a`
  border: none;
`;
const SpanErr = styled.span`
  color: red;
  margin: 10px 0;
`;
const ButtonBack = styled.button`
  width: 20%;
  border: none;
  padding: 15px 15px;
  background-color: darkblue;
  color: white;
  margin-top: 30px;
  border-radius: 5px;
  cursor: pointer;

  ${moblie({ width: "90px" })};
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [err, setErr] = useState("");
  const dispatch = useDispatch();
  const nagative = useNavigate();
  // const { isFetching, error } = useSelector((state) => state.user);
  const handleRegister = (e) => {
    e.preventDefault();
    if (confirm != password) {
      setErr("Confirm Password not correct ! ");
    }
    register(dispatch, { email, username, password });
    nagative("/");
  };
  return (
    <Container>
      <Title>CREATE AN ACCOUNT</Title>
      <Wrapper>
        <Form>
          <Input
            required
            placeholder="User name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            required
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            required
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setConfirm(e.target.value)}
          />
        </Form>
      </Wrapper>
      <Button onClick={handleRegister}>CREATE</Button>
      {err && <SpanErr>{err}</SpanErr>}
      <Login>
        Already have account ?{" "}
        <Link to="/login" className="link">
          <LinkSpan>Login here .</LinkSpan>
        </Link>
      </Login>
      <Link to="/">
        {" "}
        <button
          style={{
            padding: "10px",
            marginTop: "15px",
            backgroundColor: "teal",
            color: "white",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          BACK TO HOME PAGE
        </button>
      </Link>
    </Container>
  );
};
