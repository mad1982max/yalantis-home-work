export const loadStateFromLS = () => {
  try {
    const state = localStorage.getItem("state");
    if (state === null) {
      return undefined;
    }
    return JSON.stringify(state);
  } catch (e) {
    console.log("error in LS");
    return undefined;
  }
};

export const saveStateToLS = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log("error in LS");
  }
};
