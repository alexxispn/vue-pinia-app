import {defineStore} from "pinia";
import {computed, ref} from "vue";

const useCounterSetupStore = defineStore("counterSetup", () => {
    const counter = ref<number>(0);
    const lastUpdate = ref<Date>();

    const incrementBy = (value: number) => {
        counter.value += value;
        lastUpdate.value = new Date();
    };
    return {
        counter,
        lastUpdate,

        squaredCounter: computed(() => counter.value * counter.value),

        incrementBy,
        increment: () => incrementBy(1),
        decrementBy: (value: number) => incrementBy(-value),
        decrement: () => incrementBy(-1),
        reset: () => {
            counter.value = 0;
            lastUpdate.value = undefined;
        }
    }
});

export default useCounterSetupStore;
