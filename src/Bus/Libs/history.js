import { createBrowserHistory } from "history";
import { loadStateToLS } from "Bus/Helpers/localeStorageLoading";

const historyLib = createBrowserHistory();

historyLib.listen((location) => {
  loadStateToLS();
});

export { historyLib };
