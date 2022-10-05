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
  font-size: 50px;
  font-weight: bold;
  background-color: white;
`;

const Form = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box1 = styled.input`
  width: 750px;
  height: 50px;
  border: 1px solid black;
`;

const Box2 = styled(Box1)``;

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
    </Container>
  );
}

export default Home;
