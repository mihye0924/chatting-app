import { create } from "zustand";

interface SideBarProps {
  active: {
    user: boolean;
    chat: boolean;
    dot: boolean;
  };
  setActive: (item: "user" | "chat" | "dot", status: boolean) => void;
}

const sideBar = create<SideBarProps>((set) => {
  const savedState = localStorage.getItem("side-bar");
  const initialState = savedState
    ? JSON.parse(savedState)
    : {
        user: true,
        chat: false,
        dot: false,
      };

  const resetOtherStates = (
    state: typeof initialState,
    item: "user" | "chat" | "dot"
  ) => {
    return {
      user: item === "user" ? true : false,
      chat: item === "chat" ? true : false,
      dot: item === "dot" ? true : false,
    };
  };

  const updateState = (
    state: typeof initialState,
    newState: typeof initialState
  ) => {
    localStorage.setItem("side-bar", JSON.stringify(newState));
    return { active: newState };
  };

  return {
    active: initialState,
    setActive: (item, status) => {
      set((state) => {
        let newActiveState = { ...state.active };

        newActiveState = resetOtherStates(state.active, item);
        newActiveState[item] = status;

        return updateState(state, newActiveState);
      });
    },
  };
});

export default sideBar;
