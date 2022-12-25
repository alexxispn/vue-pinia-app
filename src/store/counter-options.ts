import {defineStore} from 'pinia'

interface CounterOptionsState {
    counter: number
    lastUpdate?: Date
}

const useCounterOptionsStore = defineStore('counterOptions', {
    state: () => ({
        counter: 0,
        lastUpdate: undefined
    } as CounterOptionsState),
    getters: {
        squaredCounter: (state) => state.counter * state.counter,
    },
    actions: {
        incrementBy(value: number) {
            this.counter += value
            this.lastUpdate = new Date()
        },
        increment() {
            this.incrementBy(1)
        },
        decrementBy(value: number) {
            this.incrementBy(-value)
        },
        decrement() {
            this.incrementBy(-1)
        }
    }
})

export default useCounterOptionsStore
