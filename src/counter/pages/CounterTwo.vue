<script setup lang="ts">
import useCounterSetupStore from "@/store/counter-setup";
import {storeToRefs} from "pinia";
import CounterSetupValue from "@/counter/components/CounterSetupValue.vue";

const counterSetup = useCounterSetupStore();
const { counter, squaredCounter} = storeToRefs(counterSetup);
const { incrementBy, increment, decrementBy, decrement, reset} = counterSetup;
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
    <button @click="reset">Reset</button>
  </div>
  <br>
  <CounterSetupValue />
</template>

<style scoped>

</style>
