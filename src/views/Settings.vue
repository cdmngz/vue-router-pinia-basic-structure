<script lang="ts" setup>
import { useStore } from "../store";

const store = useStore();
</script>

<template>
  <div>
    <h2>Settings view {{ store.name }}</h2>
  </div>
</template>
