
import { useState } from 'react';

function FormulaireControle() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nom : ${nom}, Email : ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div>
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          placeholder="Nom"
          style={{ margin: '5px', padding: '8px' }}
        />
      </div>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ margin: '5px', padding: '8px' }}
        />
      </div>
      <button type="submit" style={{ margin: '5px', padding: '8px 16px' }}>
        Envoyer
      </button>
    </form>
  );
}

export default FormulaireControle;