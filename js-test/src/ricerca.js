import { fetchUsers, fetchPagina } from './api.js';

const input = document.querySelector('#search');
const lista = document.querySelector('#lista');
const aggiorna = document.querySelector('#aggiorna');

function cerca(q) {
  fetchUsers(q).then((users) => {
    lista.innerHTML = users.map((u) => `<li>${u.name}</li>`).join('');
  });
}

input.addEventListener('input', () => cerca(input.value));

aggiorna.addEventListener('click', () => {
  input.addEventListener('input', () => cerca(input.value));
  cerca(input.value);
});

// Precarica le prime tre pagine di risultati
for (var pagina = 1; pagina <= 3; pagina++) {
  fetchPagina(pagina).then(() => console.log('Pagina ' + pagina + ' caricata'));
}
