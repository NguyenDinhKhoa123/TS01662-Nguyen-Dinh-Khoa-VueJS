<script setup>
import { useRouter } from 'vue-router'
import { auth } from '../router'
const router = useRouter()

const login = () => {
  auth.login()
  router.push({ name: 'Dashboard' })
}
</script>

<template>
  <div class="container mt-4">
    <h3>Đăng nhập</h3>
    <button @click="login" class="btn btn-success">Login</button>
  </div>
</template>
