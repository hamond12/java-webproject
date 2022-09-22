import styled from "styled-components";

const Nlist = styled.div`
  position: fixed;
  top: 600px;
  text-align: center;
  left: 30%;
  display: flex;
`;

const Number = styled.div`
  border: 1px solid #797474;
  width: 40px;
  height: 40px;
  line-height: 40px;
  color: #3fcdfa;
  font-size: 20px;
`;

const Search = styled.div`
  position: fixed;
  display: flex;
  margin-left: 80px;
  padding-right: 40px;
  height: 32px;
  bottom: 40px;
  left: 21%;
`;

const SearchBar = styled.input`
  width: 600px;
  border: 1px solid #bbb;
  padding: 10px;
  font-size: 18px;
  outline: none;
  color: #797474;
`;

const Sbtn = styled.button`
  background-color: white;
  width: 80px;
  font-size: 18px;
  border: 1px solid #bbb;
  border-left: none;
  color: #797474;
`;

export default function SelectBar() {
  return (
    <div>
      <Nlist>
        <Number>◀</Number>
        <Number>◁</Number>
        <Number>1</Number>
        <Number>2</Number>
        <Number>3</Number>
        <Number>4</Number>
        <Number>5</Number>
        <Number>6</Number>
        <Number>7</Number>
        <Number>8</Number>
        <Number>9</Number>
        <Number>10</Number>
        <Number>▷</Number>
        <Number>▶</Number>
      </Nlist>
      <Search>
        <SearchBar placeholder="검색어"></SearchBar>
        <Sbtn>검색</Sbtn>
      </Search>
    </div>
  );
}
