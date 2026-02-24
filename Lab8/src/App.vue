<template>
  <div>
    <!-- NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a class="navbar-brand">MyBlog</a>

      <div class="navbar-nav">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/blogs" class="nav-link">Blogs</router-link>
        <router-link to="/profile/info" class="nav-link">Profile</router-link>
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
      </div>
    </nav>

    <!-- NƠI HIỂN THỊ CÁC TRANG -->
    <router-view />
  </div>
</template>
