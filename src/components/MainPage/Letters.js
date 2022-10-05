import styled from "styled-components";

const Letter = styled.div`
  display: flex;
  width: 80%;

  margin-left: 120px;
  font-size: 20px;

  border-bottom: 1px solid #aca4a4;
`;

const Category = styled.p`
  margin-left: 220px;
`;

const Title = styled.p`
  margin-left: 150px;
`;

const Writer = styled.p`
  margin-left: 130px;
`;

const Time = styled.p`
  margin-left: 160px;
`;

export default function Letters() {
  return (
    <div>
      <Letter>
        <p>1</p>
        <Category>자유게시판</Category>
        <Title>게시글 01</Title>
        <Writer>User_01</Writer>
        <Time>2022-08-18 11:14</Time>
      </Letter>
      <Letter>
        <p>2</p>
        <Category>자유게시판</Category>
        <Title>게시글 01</Title>
        <Writer>User_01</Writer>
        <Time>2022-08-18 11:14</Time>
      </Letter>
      <Letter>
        <p>3</p>
        <Category>자유게시판</Category>
        <Title>게시글 01</Title>
        <Writer>User_01</Writer>
        <Time>2022-08-18 11:14</Time>
      </Letter>
      <Letter>
        <p>4</p>
        <Category>자유게시판</Category>
        <Title>게시글 01</Title>
        <Writer>User_01</Writer>
        <Time>2022-08-18 11:14</Time>
      </Letter>
      <Letter>
        <p>5</p>
        <Category>자유게시판</Category>
        <Title>게시글 01</Title>
        <Writer>User_01</Writer>
        <Time>2022-08-18 11:14</Time>
      </Letter>
    </div>
  );
}
