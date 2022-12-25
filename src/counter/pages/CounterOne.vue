<script setup lang="ts">
import useCounterOptionsStore from "@/store/counter-options";
import {storeToRefs} from "pinia";
import CounterOptionsValue from "@/counter/components/CounterOptionsValue.vue";

const counterOptions = useCounterOptionsStore();
const { counter, squaredCounter} = storeToRefs(counterOptions);
const { incrementBy, increment, decrementBy, decrement} = counterOptions;
</script>

<template>
  <div class="wrapper">
    <h1>Pinia Options</h1>
    <h2>Counter:{{ counter }}</h2>
    <h2>Square: {{ squaredCounter }}</h2>
    <button @click="increment">+1</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="decrement">-1</button>
    <button @click="decrementBy(5)">-5</button>
    <button @click="counterOptions.$reset">Reset</button>
  </div>
  <br>
  <CounterOptionsValue />
</template>

<style scoped>

</style>
