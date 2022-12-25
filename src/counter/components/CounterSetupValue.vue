<script setup lang="ts">
import useCounterSetupStore from "@/store/counter-setup";
import {storeToRefs} from "pinia";

const counterSetup = useCounterSetupStore();
const { counter, lastUpdate} = storeToRefs(counterSetup);
</script>

<template>
  <div>
    <h1>Counter Options Value</h1>
    <h2>Counter Value: {{ counter }}</h2>
    <h2>Last Update: {{ lastUpdate }}</h2>
  </div>
</template>

<style scoped>

</style>
