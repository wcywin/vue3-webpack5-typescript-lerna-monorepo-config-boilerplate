<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png" />
    <AccountHelloWorld message="Welcome Vue 3 + Typescript" />
    <Suspense>
      <template #default>
        <div>
          <SharedHello message="Successfully connected through module federation from Shared"/>
          <CoreHello message="Successfully connected through module federation from Core"/>
        </div>
      </template>
      <template #fallback>
        <div>Loading Module Federation...</div>
      </template>
    </Suspense>
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import AccountHelloWorld from '@/components/AccountHelloWorld.vue'

const SharedHello = defineAsyncComponent({
  loader: () => import('shared/SharedHelloWorld.vue')
})
const CoreHello = defineAsyncComponent({
  loader: () => import('core/CoreHelloWorld.vue')
})

export default defineComponent({
  name: 'HomeView',
  components: {
    AccountHelloWorld,
    SharedHello,
    CoreHello,
  },
});
</script>
