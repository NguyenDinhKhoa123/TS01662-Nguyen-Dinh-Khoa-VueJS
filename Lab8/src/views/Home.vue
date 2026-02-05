<template>
  <div>
    <h1>Home</h1>
  </div>
    <button @click="gotoAbout">Go to about</button>

</template>

<script>
import { useRouter } from 'vue-router';
const router = useRouter()

const goToAbout = () => {
  router.push('/about')
};

</script>

<style></style>