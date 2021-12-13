import React from 'react';
import { createContext } from "react";
import { Wallet } from "../models/wallet.model";

interface EmptyContext {
    criteria?: any;
    animate?: any;
    setAnimateWallet?: any;
    modal?: any;
    setModal?: any;
}

export const WalletContextProvider = createContext<Wallet>({ products: [], setProducts: null });

export let EmptyContextProvider = createContext<EmptyContext>({criteria: undefined , animate: null, setAnimateWallet: null});


