import styled from "styled-components";

const Stitle = styled.div`
  position: fixed;
  width: 90%;
  font-size: 50px;
  font-weight: 500;
  margin-left: 60px;
  margin-top: 10px;
  padding: 10px;
  top: 80px;
  border-bottom: 1px solid #e5e5e5;
`;

const Write = styled.button`
  position: fixed;
  top: 110px;
  right: 0;
  margin-right: 120px;

  background-color: #3fcdfa;
  color: white;
  border: none;
  border-radius: 5px;

  font-size: 15px;
  text-align: center;

  width: 120px;
  height: 45px;
`;

const Info = styled.div`
  position: fixed;
  display: flex;
  width: 80%;

  top: 180px;
  margin-left: 80px;

  font-size: 25px;

  border-bottom: 1px solid black;
`;

const Category = styled.p`
  margin-left: 160px;
`;

const Title = styled.p`
  margin-left: 150px;
`;

const Writer = styled.p`
  margin-left: 160px;
`;

const Time = styled.p`
  margin-left: 160px;
`;

export default function List() {
  return (
    <div>
      <Stitle>게시글 List</Stitle>
      <Write>글쓰기</Write>
      <Info>
        <p>조회수</p>
        <Category>카테고리</Category>
        <Title>제목</Title>
        <Writer>작성자</Writer>
        <Time>시간</Time>
      </Info>
    </div>
  );
}
