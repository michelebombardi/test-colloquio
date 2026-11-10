import { useState } from 'react';
import UserList from './UserList.jsx';

// Apri la console del browser mentre usi la pagina.
export default function App() {
  const [search, setSearch] = useState('');
  return (
    <main style={{ fontFamily: 'sans-serif', padding: 24 }}>
      <h1>Ricerca utenti</h1>
      <input
        placeholder="Cerca per nome"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <UserList search={search} />
    </main>
  );
}
