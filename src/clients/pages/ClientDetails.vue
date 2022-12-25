<script setup lang="ts">
import LoadingModal from "@/shared/components/icons/LoadingModal.vue";
import useClient from "@/clients/composables/useClient";
import {useRoute, useRouter} from "vue-router";
import {watch} from "vue";
import {useQueryClient} from "@tanstack/vue-query";

const route = useRoute();
const router = useRouter();
const queryClient = useQueryClient();
const {
  client,
  isLoading,
  isError,
  clientMutation,
  updateClient,
  isUpdating,
  isSuccessfulUpdating
} = useClient(Number(route.params.id));

watch(isSuccessfulUpdating, (isSuccessfulUpdating) => {
  if (isSuccessfulUpdating) {
    const queries = queryClient.getQueryCache().findAll([`clients?_page=`], {exact: false});
    queries.forEach(query => query.invalidate());
    router.push("/clients");
  }
});
watch(clientMutation.isSuccess, () => {
  setTimeout(() => {
    clientMutation.reset();
  }, 2000);
});
watch(isError, () => {
  if (isError.value) {
    router.replace({name: "clients-list"});
  }
});
</script>
<template>
  <h3 v-if="isUpdating">Updating...</h3>
  <h3 v-if="isSuccessfulUpdating">Updated!</h3>
  <LoadingModal v-if="isLoading"/>
  <div v-if="client">
    <h1>{{ client.name }}</h1>
    <form @submit.prevent="updateClient(client!)">
      <input type="text" placeholder="Client's name" v-model="client.name"/>
      <input type="text" placeholder="Client's adress" v-model="client.address"/>
      <button
          type="submit"
          :disabled="isUpdating"
      >
        Save
      </button>
    </form>
  </div>
  <code>
    {{ client }}
  </code>
</template>

<style scoped>
input {
  width: 100%;
  padding: 0.3rem 0.6rem;
  margin-bottom: 0.6rem;
}

button {
  margin-bottom: 0.6rem;
}

</style>
