import './App.css';
import Header from './Header';
import LigneBus from './LigneBus';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="contenu">
        <LigneBus
          numero="15"
          depart="Parcelles Assainies"
          arrivee="Plateau"
          arrets={14}
        />
        <LigneBus
          numero="7"
          depart="Guediawaye"
          arrivee="Place Obe"
          arrets={18}
        />
      </main>
    </div>
  );
}

export default App;