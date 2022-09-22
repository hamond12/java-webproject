import styled from "styled-components";

const Letter1 = styled.div`
  position: fixed;
  display: flex;
  width: 80%;

  top: 260px;
  margin-left: 80px;

  font-size: 20px;

  border-bottom: 1px solid #aca4a4;
`;

const Letter2 = styled(Letter1)`
  top: 320px;
`;

const Letter3 = styled(Letter1)`
  top: 380px;
`;

const Letter4 = styled(Letter1)`
  top: 440px;
`;

const Letter5 = styled(Letter1)`
  top: 500px;
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
      <Letter1>
        <p>1</p>
        <Category>자유게시판</Category>
        <Title>게시글 01</Title>
        <Writer>User_01</Writer>
        <Time>2022-08-18 11:14</Time>
      </Letter1>
      <Letter2>
        <p>2</p>
        <Category>자유게시판</Category>
        <Title>게시글 01</Title>
        <Writer>User_01</Writer>
        <Time>2022-08-18 11:14</Time>
      </Letter2>
      <Letter3>
        <p>3</p>
        <Category>자유게시판</Category>
        <Title>게시글 01</Title>
        <Writer>User_01</Writer>
        <Time>2022-08-18 11:14</Time>
      </Letter3>
      <Letter4>
        <p>4</p>
        <Category>자유게시판</Category>
        <Title>게시글 01</Title>
        <Writer>User_01</Writer>
        <Time>2022-08-18 11:14</Time>
      </Letter4>
      <Letter5>
        <p>5</p>
        <Category>자유게시판</Category>
        <Title>게시글 01</Title>
        <Writer>User_01</Writer>
        <Time>2022-08-18 11:14</Time>
      </Letter5>
    </div>
  );
}
