import './App.scss';
import Header from './components/Header/Header';
import ProjectRouter from './routes/routes';

export default function App() {
  return (
    <section>
      <Header />
      <div className="container">
        <ProjectRouter/>
      </div>
    </section>
  )
}

