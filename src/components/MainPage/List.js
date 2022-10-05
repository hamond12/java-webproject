import styled from "styled-components";

const Listdiv = styled.div`
  margin-top: 100px;
`;

const Stitle = styled.div`
  width: 80%;
  font-size: 50px;
  font-weight: 500;
  margin-left: 100px;
  margin-top: 10px;
  padding: 10px;
  top: 80px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
`;

const Write = styled.button`
  margin-left: 820px;

  background-color: #3fcdfa;
  color: white;
  border: none;
  border-radius: 5px;

  font-size: 15px;
  font-weight: bolder;
  text-align: center;

  width: 120px;
  height: 45px;
`;

const Info = styled.div`
  display: flex;
  width: 80%;

  margin-top: 10px;
  margin-left: 120px;

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
    <Listdiv>
      <Stitle>
        게시글 List
        <Write>글쓰기</Write>
      </Stitle>
      <Info>
        <p>조회수</p>
        <Category>카테고리</Category>
        <Title>제목</Title>
        <Writer>작성자</Writer>
        <Time>시간</Time>
      </Info>
    </Listdiv>
  );
}
