<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png" />
    <CoreHelloWorld message="Welcome Vue 3 + Typescript" />
    <Suspense>
      <template #default>
        <div>
          <AccountHello message="Successfully connected through module federation"/>
          <SharedHello message="Successfully connected through module federation"/>
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
import CoreHelloWorld from '@/components/CoreHelloWorld.vue'

const AccountHello = defineAsyncComponent({
  loader: () => import('account/AccountHelloWorld.vue')
})
const SharedHello = defineAsyncComponent({
  loader: () => import('shared/SharedHelloWorld.vue')
})

export default defineComponent({
  name: 'HomeView',
  components: {
    CoreHelloWorld,
    AccountHello,
    SharedHello,
  },
});
</script>
