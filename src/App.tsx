import { useContext, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { WalletContextProvider, EmptyContextProvider } from './context/Wallet.context';
import MainRoutes from './routes/routes';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';
export default function App() {
  useContext(EmptyContextProvider);
  useContext(WalletContextProvider);
  const [animate, setAnimateWallet] = useState();
  const [modal, setModal] = useState('');
  const [products, setProducts] = useState([]);
  return (
    <section>
      <EmptyContextProvider.Provider value={{ animate, setAnimateWallet, modal, setModal }}>
        <WalletContextProvider.Provider value={{ products, setProducts }}>
          <QueryClientProvider client={queryClient}>
            <Header />
            <div className="container">
              <MainRoutes />
            </div>
          </QueryClientProvider>
        </WalletContextProvider.Provider>
      </EmptyContextProvider.Provider>
    </section>
  )
}

