import Header from "./components/MainPage/Header";
import List from "./components/MainPage/List";
import Letters from "./components/MainPage/Letters";
import SelectBar from "./components/MainPage/SelectBar";

export default function MainPage() {
  return (
    <div>
      <Header />
      <List />
      <Letters />
      <SelectBar />
    </div>
  );
}
