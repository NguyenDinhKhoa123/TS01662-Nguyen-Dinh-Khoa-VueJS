<script setup>
import { auth } from '../router'
import { useRouter } from 'vue-router'
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/')
}
</script>

<template>
  <div class="container mt-4">
    <h3>Dashboard (Protected)</h3>
    <button @click="logout" class="btn btn-danger">Logout</button>
  </div>
</template>
