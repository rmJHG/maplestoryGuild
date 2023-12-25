import { atom } from "recoil";
export const searchedServerState = atom({
  key: "searchedServerState",
  default: null,
});
export const searchedGuildNameState = atom({
  key: "searchedGuildName",
  default: null,
});
