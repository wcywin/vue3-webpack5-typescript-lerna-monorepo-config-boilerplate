<template>
  <h2 class="core-heading">Platform-Core prop: {{ message }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CoreHelloWorld',
  props: {
    message: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped lang="scss">
.core-heading {
  color: #42b983;
}
</style>
