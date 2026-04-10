import { useState } from 'react';
import { UtilisateurContext } from './UtilisateurContext';
import FormulaireControle from './FormulaireControle';
import FormulaireNonControle from './FormulaireNonControle';
import TemperatureConvertor from './TemperatureConvertor';
import Profil from './Profil';
import './App.css';

function App() {
  const [utilisateur, setUtilisateur] = useState({
    nom: 'Alice',
    connecte: true
  });

  return (
    <UtilisateurContext.Provider value={{ utilisateur, setUtilisateur }}>
      <div className="app">
        <header className="app-header">
          <h1>🌡️ TP React Débutant</h1>
          <p>Formulaires • État partagé • Contexte React</p>
        </header>

        <main className="app-main">
          <div className="cards-container">
            <div className="card">
              <div className="card-header">
                <span className="card-icon">📝</span>
                <h2>Formulaire Contrôlé</h2>
              </div>
              <div className="card-body">
                <FormulaireControle />
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <span className="card-icon">✏️</span>
                <h2>Formulaire Non-Contrôlé</h2>
              </div>
              <div className="card-body">
                <FormulaireNonControle />
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <span className="card-icon">🌡️</span>
                <h2>Convertisseur de Température</h2>
              </div>
              <div className="card-body">
                <TemperatureConvertor />
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <span className="card-icon">👤</span>
                <h2>Profil Utilisateur</h2>
              </div>
              <div className="card-body">
                <Profil />
              </div>
            </div>
          </div>
        </main>

        <footer className="app-footer">
          <p>TP React - Gestion d'état & Contexte</p>
        </footer>
      </div>
    </UtilisateurContext.Provider>
  );
}

export default App;