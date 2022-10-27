import styled from "styled-components";

const Ctitle = styled.div`
  margin-top: 130px;
  width: 80%;
  font-size: 50px;
  font-weight: 500;
  padding-bottom: 30px;
  border-bottom: 1px solid black;
`;

const Clist = styled.div`
  display: flex;
  width: 80%;
  font-size: 18px;
  border-bottom: 1px solid #aca4a4;
`;

const Clist2 = styled.div`
  width: 80%;
  font-size: 18px;
  border-bottom: 1px solid #aca4a4;
`;

const Content1 = styled.div`
  margin-left: 10px;
  padding: 10px;
`;

const Content2 = styled.div`
  margin-left: 29.85%;
  padding: 10px;
  border-left: 1px solid #aca4a4;
`;

const Content3 = styled(Content2)`
  margin-left: 35.15%;
`;

const Content4 = styled(Content2)`
  margin-left: 33.5%;
`;

const Content5 = styled(Content1)`
  margin-top: 20px;
`;

const Content6 = styled.div`
  font-size: 15px;
  margin-left: 40px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Btndiv = styled.div`
  width: 80%;
  text-align: center;
`;

const Goodbtn = styled.button`
  margin-top: 40px;
  border: none;
  border-radius: 5px;
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: #3fcdfa;
  color: white;
  font-size: 18px;
  text-align: center;
`;

export default function Community_top() {
  return (
    <>
      <Ctitle>게시글</Ctitle>
      <Clist>
        <Content1>게시판 종류</Content1>
        <Content2>자유게시판</Content2>
      </Clist>
      <Clist>
        <Content1>시간</Content1>
        <Content3>2022-08-18 11:47</Content3>
      </Clist>
      <Clist>
        <Content1>제목</Content1>
        <Content3>안녕하세요</Content3>
      </Clist>
      <Clist>
        <Content1>작성자</Content1>
        <Content4>이동훈</Content4>
      </Clist>
      <Clist>
        <Content1>조회수</Content1>
        <Content4>1</Content4>
      </Clist>
      <Clist2>
        <Content5>내용</Content5>
        <Content6>안녕하세요 소통해요</Content6>
      </Clist2>
      <Btndiv>
        <Goodbtn>추천 {1}</Goodbtn>
      </Btndiv>
    </>
  );
}
