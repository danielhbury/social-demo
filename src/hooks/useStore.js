import { useContext } from "react";
import { StoreContext } from "@/app/Store";

export const useStore = () => useContext(StoreContext);