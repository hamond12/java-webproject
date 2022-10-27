import styled from "styled-components";
import MHeader from "../components/Main/MHeader";
import List from "../components/Main/List";
import Letters from "../components/Main/Letters";
import SelectBar from "../components/Main/SelectBar";

const Maindiv = styled.div`
  width: 100%;
`;

export default function MainPage() {
  return (
    <>
      <MHeader />
      <List />
      <Letters />
      <SelectBar />
    </>
  );
}
