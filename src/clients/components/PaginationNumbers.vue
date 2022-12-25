<script setup lang="ts">
import useClients from "@/clients/composables/useClients";
import {ref, toRef, watch} from "vue";

interface Props {
  totalPages: number;
  currentPage: number;
}

interface Emits {
  (event: 'page-changed', page: number): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const currentPage = toRef(props, 'currentPage');
const totalPages = toRef(props, 'totalPages');
const getTotalPages = ref<number[]>([]);
watch(totalPages, () => {
  getTotalPages.value = [...new Array(totalPages.value)].map((_, i) => i + 1);
}, {immediate: true});

const {getPage} = useClients();
</script>

<template>
  <div>
    <button
        @click="getPage(currentPage - 1)"
        :disabled="currentPage === 1"
    >
      Previous
    </button>
    <button
        v-for="number in getTotalPages"
        :key="number" @click="getPage(number)"
        :class="{ active: currentPage === number }"
    >
      {{ number }}
    </button>
    <button
        @click="getPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
div {
  margin-top: 0.6rem;
}

button {
  background: transparent;
  border-radius: 0.3rem;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  margin-right: 0.3rem;
  padding: 0.6rem;
  transition: all 0.5s;
}

button:hover {
  background: hsla(160, 100%, 37%, 0.2);
  transition: all 0.5s;
}

button:disabled {
  cursor: not-allowed;
}

button:disabled:hover {
  background: transparent;
}

button.active {
  background: hsla(160, 100%, 37%, 0.2);
  transition: all 0.5s;
}

</style>
