<template>
  <div class="number">
    {{number}}
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  props: {
    number: Number
  }
}
</script>

<style scoped>
  .number {
    font-size: 10rem;
  }
</style>
