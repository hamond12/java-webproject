import MHeader from "./components/MainPage/MHeader";
import List from "./components/MainPage/List";
import Letters from "./components/MainPage/Letters";
import SelectBar from "./components/MainPage/SelectBar";
import styled from "styled-components";

const Main = styled.div`
  margin-left: 20px;
`;

export default function MainPage() {
  return (
    <div>
      <MHeader />
      <Main>
        <List />
        <Letters />
        <SelectBar />
      </Main>
    </div>
  );
}
