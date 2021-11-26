<template>
  <h2 class="account-heading">Platform-Account prop: {{ message }}</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AccountHelloWorld',
  props: {
    message: {
      type: String,
      required: false,
    },
  },
});
</script>

<style scoped lang="scss">
.account-heading {
  color: #42b983;
}
</style>
