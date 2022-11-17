import styled from "styled-components";

const Wtitle = styled.div`
  font-size: 50px;
  font-weight: 500;
  margin-left: 120px;
  margin-top: 100px;
  padding: 10px;
`;

const Wt = styled.p`
  margin-left: 150px;
  margin-top: 30px;
  font-size: 20px;
`;

const Wtb = styled.input`
  margin-left: 150px;
  font-size: 17px;
  padding: 7px;
  text-indent: 5px;
  border-radius: 5px;
  width: 75%;
`;

const Textbox = styled.textarea`
  width: 75%;
  margin-top: 2px;
  margin-left: 150px;
  border-radius: 10px;
  height: 200px;
  font-size: 17px;
  padding-left: 10px;
  padding-top: 10px;
`;

const Btndiv = styled.div`
  width: 100%;
  text-align: center;
  margin-left: -20px;
  margin-bottom: 40px;
`;

const Goodbtn = styled.button`
  margin-top: 25px;
  border: none;
  border-radius: 5px;
  width: 130px;
  height: 40px;
  line-height: 40px;
  background-color: #3fcdfa;
  color: white;
  font-size: 18px;
  text-align: center;
`;

export default function Write() {
  return (
    <>
      <Wtitle>글쓰기</Wtitle>
      <Wt>제목</Wt>
      <Wtb type="text" placeholder="제목을 입력하세요."></Wtb>
      <Wt>작성자</Wt>
      <Wtb type="text" placeholder="작성자명을 입력하세요."></Wtb>
      <Wt>내용</Wt>
      <Textbox placeholder="내용을 입력하세요."></Textbox>
      <Btndiv>
        <Goodbtn>글쓰기 완료</Goodbtn>
      </Btndiv>
    </>
  );
}
