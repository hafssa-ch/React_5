import { useContext } from 'react';
import { UtilisateurContext } from './UtilisateurContext';

function Profil() {
  const { utilisateur, setUtilisateur } = useContext(UtilisateurContext);

  const connexion = () => {
    setUtilisateur({ nom: 'Alice', connecte: true });
  };

  const deconnexion = () => {
    setUtilisateur({ nom: '', connecte: false });
  };

  return (
    <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '8px' }}>
      {utilisateur.connecte ? (
        <>
          <p><strong>Bienvenue, {utilisateur.nom} !</strong></p>
          <button onClick={deconnexion} style={{ padding: '8px 16px' }}>
            Se déconnecter
          </button>
        </>
      ) : (
        <>
          <p>Veuillez vous connecter.</p>
          <button onClick={connexion} style={{ padding: '8px 16px' }}>
            Se connecter
          </button>
        </>
      )}
    </div>
  );
}

export default Profil;
