<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ prodotti: Array })
const filtro = ref('')
let totale = 0

const filtrati = computed(() => {
  return props.prodotti.filter(p => p.nome.includes(filtro))
})

function aggiungi(p) {
  totale += p.prezzo
}
</script>

<template>
  <input v-model="filtro" placeholder="Filtra per nome" />
  <p>Totale: {{ totale }}</p>
  <div v-for="p in filtrati">
    {{ p.nome }} <button @click="aggiungi(p)">+</button>
  </div>
</template>
