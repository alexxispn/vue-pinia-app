<script setup lang="ts">
import useCounterOptionsStore from "@/store/counter-options";

const counterOptions = useCounterOptionsStore();
</script>

<template>
  <div>
    <h1>Counter Options Value</h1>
    <h2>Counter Value: {{ counterOptions.counter }}</h2>
    <h2>Last Update: {{ counterOptions.lastUpdate }}</h2>
  </div>
</template>

<style scoped>

</style>
