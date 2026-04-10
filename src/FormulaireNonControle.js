
import { useRef } from 'react';

function FormulaireNonControle() {
  const nomRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nom = nomRef.current.value;
    const email = emailRef.current.value;
    alert(`Nom : ${nom}, Email : ${email}`);
    
    // Optionnel : réinitialiser les champs
    nomRef.current.value = '';
    emailRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div>
        <input
          type="text"
          ref={nomRef}
          placeholder="Nom"
          style={{ margin: '5px', padding: '8px' }}
        />
      </div>
      <div>
        <input
          type="email"
          ref={emailRef}
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

export default FormulaireNonControle;