<template>
  <h2 class="shared-heading">Share prop: {{ message }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SharedHelloWorld',
  props: {
    message: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped lang="scss">
.shared-heading {
  color: #42b983;
}
</style>
