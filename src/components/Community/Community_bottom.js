import styled from "styled-components";

const Prev = styled.div`
  width: 80%;
  margin-top: 50px;
  text-align: center;
`;

const Prevcomment = styled.a`
  text-decoration: none;
  color: #38bbeb;
`;

const Comments = styled.div`
  margin-top: 20px;
  color: #38bbeb;
`;

const Commentlist = styled.div`
  margin-top: 30px;
  border: 1px solid black;
  border-radius: 20px;
  width: 80%;
  display: flex;
  height: 50px;
  line-height: 50px;
`;

const Author = styled.span`
  text-align: center;
  width: 100px;
  border-right: 1px solid black;
`;

const Story = styled.span`
  text-align: center;
  width: 300px;
  border-right: 1px solid black;
`;

const Date = styled.span`
  padding-left: 10px;
  width: 100%;
`;

const Tbdiv = styled.div`
  margin-top: -40px;
`;

const Textbox = styled.textarea`
  width: 80%;
  margin-top: 100px;
  border-radius: 10px;
  height: 200px;
  padding-left: 10px;
  padding-top: 10px;
`;

const Sub = styled.input`
  border: none;
  background-color: #3fcdfa;
  color: white;
  border-radius: 5px;
  width: 110px;
  height: 40px;
  line-height: 40px;
  font-size: 17px;
  float: right;
`;

const Subdiv = styled.div`
  width: 81%;
  margin-top: 20px;
  margin-bottom: 100px;
`;

export default function Community_bottom() {
  return (
    <>
      <Prev>
        <Prevcomment>이전 댓글 더보기</Prevcomment>
      </Prev>
      <Comments>댓글 {1}개</Comments>

      <Commentlist>
        <Author>이동훈</Author>
        <Story>멋진 글이네요</Story>
        <Date>날짜</Date>
      </Commentlist>
      <Tbdiv>
        <Textbox rows="10" cols="150" placeholder="내용을 입력해주세요" />
      </Tbdiv>
      <Subdiv>
        <Sub input type="submit" value="댓글쓰기" />
      </Subdiv>
    </>
  );
}
