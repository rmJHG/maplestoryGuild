import React, { useRef } from "react";
import styled from "styled-components";
import SearchIcon from "../../assets/images/icons8-search-25.svg";
import { useSetRecoilState } from "recoil";
import { searchedGuildNameState, searchedServerState } from "../../store/Search";
import { useNavigate } from "react-router-dom";

const SearchBar: React.FC = () => {
  const nav = useNavigate();
  const enterServer = useRef<HTMLSelectElement>(null!);
  const enterGuildName = useRef<HTMLInputElement>(null!);
  const setServerState = useSetRecoilState(searchedServerState);
  const setGuildName = useSetRecoilState(searchedGuildNameState);
  const serverOptions: string[] = [
    "스카니아",
    "루나",
    "엘리시움",
    "크로아",
    "베라",
    "레드",
    "유니온",
    "오로라",
    "제니스",
    "아케인",
    "노바",
    "이노시스",
    "리부트",
    "리부트2",
  ];
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const enteredServer = enterServer.current?.value;
    const enteredGuildName = enterGuildName.current?.value;
    setServerState((enteredServer) => enteredServer);
    setGuildName((enteredGuildName) => enteredGuildName);
    nav(`/result/${enteredServer}/${enteredGuildName}`);
  };
  return (
    <MainWrapper>
      <form onSubmit={submitHandler}>
        <select name="" id="" ref={enterServer}>
          {serverOptions.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>

        <input type="text" ref={enterGuildName} />

        <button>
          <img src={SearchIcon} alt="" />
        </button>
      </form>
    </MainWrapper>
  );
};

export default SearchBar;
const MainWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  select,
  input,
  button {
    padding: 3px 10px;
    border: none;
    background: none;
  }

  form {
    min-width: 300px;
    width: 60%;
    border: 1px solid black;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
