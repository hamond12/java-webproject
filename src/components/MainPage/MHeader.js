import styled from "styled-components";
import { Link } from "react-router-dom";

const Head = styled.header`
  position: fixed;
  top: 0px;
  line-height: 75px;
  width: 100%;
  background-color: #f0f0f0;
  color: #878080;
  height: 75px;
  display: flex;
`;

const Web = styled.button`
  color: #878080;
  border: none;
  margin-left: 100px;
  font-size: 30px;
  font-family: "Times New Roman", Times, serif;
`;

const Login = styled.button`
  color: #878080;
  border: none;
  font-size: 30px;
  margin-left: 850px;
  margin-top: 20px;
`;

export default function Header() {
  return (
    <Head>
      <Web>SpringBoot Community Web</Web>
      <Link to="/Login">
        <Login>LOGIN</Login>
      </Link>
    </Head>
  );
}
