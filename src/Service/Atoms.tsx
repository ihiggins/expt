//@ts-nocheck

import { atom, selector } from "recoil";

const query = atom({
  key: "query",
  default: "",
});

const history = atom({
  key: "history",
  default: [],
});

const appendItemToHistory = selector({
  key: "appendItemToHistory",
  set: ({ get, set }, newItems = []) => {
    if (newValue.length > 0) {
      const currentItems = get(history);
      const appendedItems = [...currentItems, ...newItems];
      set(history, appendedItems);
    }
  },
});

export { query, history, appendItemToHistory };
