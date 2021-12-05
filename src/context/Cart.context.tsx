import React from 'react';
import { createContext } from "react";
import { Wallet } from "../models/wallet.model";

interface EmptyContext {
    criteria?: any;
    animate?: any;
    setAnimateWallet?: any;
}

export const CartContext = createContext<Wallet>({ products: [] });

export let EmptyContextProvider = createContext<EmptyContext>({criteria: undefined , animate: null, setAnimateWallet: null});


