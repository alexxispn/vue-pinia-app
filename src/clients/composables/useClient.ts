import {computed, ref, watch} from "vue";
import type {Client} from "@/clients/interfaces/client";
import {useMutation, useQuery} from "@tanstack/vue-query";
import clientsApi from "@/api/clientsApi";

const getClient = async (id: number): Promise<Client> => {
    const {data} = await clientsApi.get<Client>(`/clients/${id}`)
    return data
}
const updateClient = async (client: Client): Promise<Client> => {
    const {data} = await clientsApi.patch(`/clients/${client.id}`, client);
    return data;
};
const useClient = (id: number) => {
    const client = ref<Client>()
    const clientMutation = useMutation(updateClient);
    const {data, isLoading, isError} = useQuery(
        ['client', id],
        () => getClient(id),
        {retry: false}
    )
    watch(data, () => {
        if (data.value) client.value = {...data.value}
    }, {immediate: true})
    return {
        client,
        isLoading,
        isError,
        clientMutation,

        updateClient: clientMutation.mutate,
        isUpdating: computed(() => clientMutation.isLoading.value),
        isSuccessfulUpdating: computed(() => clientMutation.isSuccess.value),
    }
}

export default useClient
