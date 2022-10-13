import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.button`
  margin-top: 50px;
  width: 100%;
  font-size: 45px;
  font-weight: bold;
  background-color: white;
  border: none;
`;

const Form = styled.div`
  width: 100%;
  height: 40%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box1 = styled.input`
  width: 700px;
  height: 70px;
  border: 1px solid black;
  font-size: 30px;
  text-indent: 20px;
`;

const Box2 = styled(Box1)`
  margin-top: 30px;
`;

const Login = styled.button`
  margin-top: -10px;
  width: 700px;
  height: 70px;
  background-color: #e85959;
  border: none;
  font-size: 50px;
  font-weight: bold;
  color: white;
`;

const Q = styled.p`
  margin-top: 70px;
  font-size: 30px;
`;

const Signup = styled.button`
  margin-top: 20px;
  width: 200px;
  height: 60px;
  background-color: white;
  font-size: 30px;
  font-weight: bold;
  border: 1px solid black;
`;

function Home() {
  return (
    <Container>
      <Link to="/">
        <Title>SpringBoot Community Web</Title>
      </Link>
      <Form>
        <Box1 type="text" placeholder="username"></Box1>
        <Box2 type="text" placeholder="password"></Box2>
      </Form>
      <Login>Login</Login>
      <Q>로그인을 하지 않았다면?</Q>
      <Link to="/Signup">
        <Signup>Sign up</Signup>
      </Link>
    </Container>
  );
}

export default Home;
