import { configureStore } from "@reduxjs/toolkit";
import basketQuantuty from "Helpers/basket/changeBasketQuantitySlicer";

const store = configureStore({ reducer: basketQuantuty });

export { store };
