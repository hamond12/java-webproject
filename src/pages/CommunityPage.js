import Community_top from "../components/Community/Community_top";
import Community_bottom from "../components/Community/Community_bottom";
import MHeader from "../components/Main/MHeader";
import styled from "styled-components";

const Cdiv = styled.div`
  margin-left: 150px;
`;

export default function LoginPage() {
  return (
    <>
      <MHeader />
      <Cdiv>
        <Community_top />
        <Community_bottom />
      </Cdiv>
    </>
  );
}
