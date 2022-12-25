<script setup lang="ts">
import type {Client} from "@/clients/interfaces/client";
import {toRefs} from "vue";

interface Props {
  clients: Client[];
}
const props = defineProps<Props>();
const {clients} = toRefs(props);
</script>

<template>
  <ul>
    <li v-for="client in clients" :key="client.id">
      <RouterLink :to="{ name: 'client-details', params: { id: client.id } }">
        {{ client.name }}
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>

</style>
