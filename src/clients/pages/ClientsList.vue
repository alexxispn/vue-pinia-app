<script setup lang="ts">
import ClientsListComponent from "@/clients/components/ClientsListComponent.vue";
import PaginationNumbers from "@/clients/components/PaginationNumbers.vue";
import LoadingModal from "@/shared/components/icons/LoadingModal.vue";
import useClients from "@/clients/composables/useClients";

const {isLoading, clients, currentPage, totalPages, getPage} = useClients();

</script>

<template>
  <div>
    <h1>Clients List</h1>
    <ClientsListComponent :clients="clients" />
    <PaginationNumbers
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="getPage"
    />
    <LoadingModal v-if="isLoading" />
  </div>
</template>

<style scoped>

</style>
