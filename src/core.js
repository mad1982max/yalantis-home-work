import { configureStore } from "@reduxjs/toolkit";
import basketQuantuty from "Bus/Slicers/basketSlicer";

const store = configureStore({ reducer: basketQuantuty });

export { store };
