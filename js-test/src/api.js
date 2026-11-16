// API finta: simula le chiamate al server. Non serve modificarla.
const UTENTI = [
  { id: 1, name: 'Anna Rossi' },
  { id: 2, name: 'Marco Bianchi' },
  { id: 3, name: 'Giulia Verdi' },
  { id: 4, name: 'Luca Neri' },
  { id: 5, name: '<i>Sara</i> Colombo' },
];

let chiamate = 0;

// Ogni risposta impiega un tempo casuale, come una rete vera.
function ritardo() {
  return 100 + Math.random() * 900;
}

export function fetchUsers(q) {
  chiamate++;
  console.log(`Chiamata API n. ${chiamate} (q="${q}")`);
  return new Promise((resolve) =>
    setTimeout(
      () => resolve(UTENTI.filter((u) => u.name.toLowerCase().includes(q.toLowerCase()))),
      ritardo()
    )
  );
}

export function fetchPagina(n) {
  return new Promise((resolve) => setTimeout(() => resolve(n), ritardo()));
}
