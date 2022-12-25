import {ref} from "vue"
import {defineStore} from "pinia"
import type {Client} from "@/clients/interfaces/client";

const useClientsStore = defineStore('clients', () => {
    const currentPage = ref<number>(1)
    const totalPages = ref<number>(5)
    const clients = ref<Client[]>([])

    return {
        currentPage,
        totalPages,
        clients,

        setClients: (newClients: Client[]) => clients.value = newClients,
        setCurrentPage: (newPage: number) => {
            if (newPage === currentPage.value || newPage < 1 || newPage > totalPages.value) return
            currentPage.value = newPage
        }
    }
})

export default useClientsStore
