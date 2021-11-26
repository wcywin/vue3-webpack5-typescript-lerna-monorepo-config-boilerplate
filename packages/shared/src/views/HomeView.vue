<template>
  <div class="home">
    <img alt="logo" src="../assets/logo.png" />
    <SharedHelloWorld message="Welcome Vue 3 + Typescript" />
    <Suspense>
      <template #default>
        <div>
          <AccountHello message="Successfully connected through module federation from Account" />
          <CoreHello message="Successfully connected through module federation from Core"/>
        </div>
      </template>
      <template #fallback>
        <div>Loading Module Federation...</div>
      </template>
    </Suspense>
    <AccountHello message="Account Hello World" />
  </div>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';
import SharedHelloWorld from '@/components/SharedHelloWorld.vue'

const AccountHello = defineAsyncComponent({
  loader: () => import('account/AccountHelloWorld.vue'),
})
const CoreHello = defineAsyncComponent({
  loader: () => import('core/CoreHelloWorld.vue')
})

export default defineComponent({
  name: 'HomeView',
  components: {
    SharedHelloWorld,
    AccountHello,
    CoreHello,
  },
});
</script>
