import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = styled.div`
  display: flex;
  width: 80%;
  margin-left: 100px;
  height: 135px;
  border-bottom: 1px solid #d9d9d9;
`;

const Title = styled.p`
  font-size: 40px;
  margin-top: 60px;
`;

const ETitle = styled.p`
  font-size: 20px;
  margin-left: 15px;
  color: #8d8d8d;
  margin-top: 80px;
`;

const Logindiv = styled.div`
  margin-top: 80px;
  margin-left: 800px;
`;

const Login = styled.button`
  width: 100%;
  font-size: 20px;
  background-color: white;
  border: none;
  color: #cf2f2f;
`;

export default function Header() {
  return (
    <div>
      <Head>
        <Title>회원가입</Title>
        <ETitle>Sign up</ETitle>
        <Logindiv>
          <Link to="/Login">
            <Login>로그인 화면으로</Login>
          </Link>
        </Logindiv>
      </Head>
    </div>
  );
}
