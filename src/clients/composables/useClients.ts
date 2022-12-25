import type {Client} from "@/clients/interfaces/client";
import clientsApi from "@/api/clientsApi";
import {useQuery} from "@tanstack/vue-query";
import useClientsStore from "@/store/clients";
import {storeToRefs} from "pinia";
import {computed, watch} from "vue";

const getClients = async (page: number): Promise<Client[]> => {
    const {data} = await clientsApi.get<Client[]>(`/clients?_page=${page}`)
    return data
}

const useClients = () => {
    const store = useClientsStore()
    const {clients, currentPage, totalPages} = storeToRefs(store)

    const { isLoading, data } = useQuery(
        ['clients?_page=', currentPage],
        () => getClients(currentPage.value),
        {
            staleTime: 1000 * 60,
        }
    )
    watch(data, clients => {
        if (clients) store.setClients(clients)
    }, {immediate: true})
    return {
        clients,
        currentPage,
        totalPages,
        isLoading,

        // getPage: store.setCurrentPage
        getPage: (page: number) => store.setCurrentPage(page)

    }
}

export default useClients
