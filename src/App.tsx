import { useContext, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { WalletContextProvider, EmptyContextProvider } from './context/Wallet.context';
import MainRoutes from './routes/routes';

export default function App() {
  useContext(EmptyContextProvider);
  useContext(WalletContextProvider);
  const [animate, setAnimateWallet] = useState();
  const [products, setProducts] = useState([]);
  return (
    <section>
        <EmptyContextProvider.Provider value={{ animate, setAnimateWallet }}>
          <WalletContextProvider.Provider value={{ products, setProducts }}>
          <Header />
          <div className="container">
            <MainRoutes />
          </div>
          </WalletContextProvider.Provider>
        </EmptyContextProvider.Provider>

    </section>
  )
}

