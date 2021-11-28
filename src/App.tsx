import './App.scss';
import Header from './components/Header/Header';
import MainRoutes from './routes/routes';

export default function App() {
  return (
    <section>
      <Header />
      <div className="container">
        <MainRoutes/>
      </div>
    </section>
  )
}

