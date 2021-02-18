import { LOCALE_STORAGE_KEY } from "Constants/constants";

export const loadStateFromLS = () => {
  try {
    const state = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (state === null) {
      return undefined;
    }
    return JSON.parse(state);
  } catch (e) {
    console.log("error in LS");
    return undefined;
  }
};

export const loadStateToLS = (stateObj = {}) => {
  try {
    if (Object.keys(stateObj).length === 0)
      return localStorage.removeItem(LOCALE_STORAGE_KEY);

    const filterLS = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (filterLS) {
      const newFilterObj = { ...JSON.parse(filterLS), ...stateObj };
      localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(newFilterObj));
    } else {
      localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(stateObj));
    }
  } catch (e) {
    console.log("ERROR while loading to LS: ", e.message);
  }
};
