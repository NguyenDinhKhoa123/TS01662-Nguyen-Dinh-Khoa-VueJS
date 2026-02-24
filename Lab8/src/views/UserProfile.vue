<template>
  <div class="container mt-4">
    <h3>Trang cá nhân</h3>
    <router-link to="/profile/info" class="btn btn-info me-2">Info</router-link>
    <router-link to="/profile/settings" class="btn btn-dark">Settings</router-link>

    <router-view/>
  </div>
</template>
