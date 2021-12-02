import React from 'react';
import { createContext } from "react";
import { Wallet } from "../models/wallet.model";

interface EmptyContext {
    criteria: any;
    isAnimated: any;
}

export const CartContext = createContext<Wallet>({ products: [] });

export let EmptyContextProvider = createContext<any>({criteria: undefined , isAnimated: null});


