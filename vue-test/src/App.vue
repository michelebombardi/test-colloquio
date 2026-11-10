<script setup>
import ListaProdotti from './components/ListaProdotti.vue'

const prodotti = [
  { id: 1, nome: 'Tastiera', prezzo: 49 },
  { id: 2, nome: 'Mouse', prezzo: 25 },
  { id: 3, nome: 'Monitor', prezzo: 199 },
  { id: 4, nome: 'Tappetino mouse', prezzo: 12 },
  { id: 5, nome: 'Webcam', prezzo: 69 },
]
</script>

<template>
  <main style="font-family: sans-serif; padding: 24px">
    <h1>Catalogo</h1>
    <ListaProdotti :prodotti="prodotti" />
  </main>
</template>
