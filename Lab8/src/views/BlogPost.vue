<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
  <div class="container mt-4">
    <h3>Bài viết số {{ route.params.id }}</h3>
    <p>Nội dung blog với ID động.</p>
  </div>
</template>
