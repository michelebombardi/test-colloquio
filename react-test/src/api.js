// API finta: simula una chiamata al server. Non serve modificarla.
const UTENTI = [
  { id: 1, name: 'Anna Rossi' },
  { id: 2, name: 'Marco Bianchi' },
  { id: 3, name: 'Giulia Verdi' },
  { id: 4, name: 'Luca Neri' },
  { id: 5, name: 'Sara Colombo' },
];

let chiamate = 0;

export function fetchUsers(q) {
  chiamate++;
  console.log(`Chiamata API n. ${chiamate} (q="${q}")`);
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(UTENTI.filter((u) => u.name.toLowerCase().includes(q.toLowerCase()))),
      300
    )
  );
}
