import { useState } from 'react';

function FormulaireInscription() {
  const [form, setForm] = useState({ nom: '', email: '', motDePasse: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Inscription :\nNom : ${form.nom}\nEmail : ${form.email}\nMot de passe : ${form.motDePasse}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <input name="motDePasse" type="password" placeholder="Mot de passe" value={form.motDePasse} onChange={handleChange} />
      <button type="submit">S'inscrire</button>
    </form>
  );
}

export default FormulaireInscription;
