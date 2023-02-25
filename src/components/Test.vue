<template>
  <div>
    <Button icon-class="pi pi-icon-right">Button </Button>
  </div>
</template>

<script setup lang="ts" generic="T">
defineProps<{ foo: T }>();
</script>

<style scoped></style>
