import MHeader from "../components/Main/MHeader";
import styled from "styled-components";
import Write from "../components/Write/Write";

const Wdiv = styled.div`
  margin-top: 75px;
`;

export default function WritePage() {
  return (
    <>
      <MHeader />
      <Wdiv>
        <Write />
      </Wdiv>
    </>
  );
}
