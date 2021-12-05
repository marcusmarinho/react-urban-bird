import { useContext, useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import { EmptyContextProvider } from './context/Cart.context';
import MainRoutes from './routes/routes';

export default function App() {
  useContext(EmptyContextProvider);
  const [animate, setAnimateWallet] = useState();
  return (
    <section>
        <EmptyContextProvider.Provider value={{ animate, setAnimateWallet }}>
          <Header />
          <div className="container">
            <MainRoutes />
          </div>
        </EmptyContextProvider.Provider>

    </section>
  )
}

