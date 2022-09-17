<script lang="ts" setup>
import { useStore } from "../store";

const store = useStore();
</script>

<template>
  <div style="border: 2px solid green">
    <h2>Home view</h2>
    <p>Name: {{ store.name }}</p>
    <button @click="store.changeName('Roberto')">Change name to Roberto</button>
    <button @click="store.$reset">Reset the store</button>
  </div>
</template>
