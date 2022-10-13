import styled from "styled-components";

const Ssectiondiv = styled.div`
  height: 620px;
`;

const Column = styled.p`
  font-size: 22px;
  margin-top: 30px;
  margin-left: 120px;
`;

const Box = styled.input`
  width: 76%;
  height: 45px;
  border-radius: 5px;
  margin-left: 120px;
  text-indent: 10px;
  font-size: 20px;
  margin-top: -10px;
`;

const PsEx = styled.p`
  color: #969090;
  margin-left: 120px;
  font-size: 18px;
`;

const Btndiv = styled.div`
  margin-left: 630px;
  margin-top: 40px;
`;

const Btn = styled.button`
  background-color: #6de5ff;
  border-radius: 10px;
  border: none;
  margin: auto;
  color: white;
  height: 50px;
  width: 20%;
  font-size: 20px;
`;

export default function Ssection() {
  return (
    <Ssectiondiv>
      <div>
        <Column>아이디</Column>
        <Box type="text"></Box>
        <Column>비밀번호</Column>
        <Box type="password"></Box>
        <Column>비밀번호 확인</Column>
        <Box type="password"></Box>
        <PsEx>비밀번호 확인을 위해 다시 한 번 입력해주세요</PsEx>
        <Column>이름</Column>
        <Box type="text"></Box>
      </div>
      <Btndiv>
        <Btn>회원가입 ✔</Btn>
      </Btndiv>
    </Ssectiondiv>
  );
}
