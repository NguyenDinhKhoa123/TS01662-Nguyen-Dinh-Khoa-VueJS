<template>
  <div class="container mt-4">
    <h3>Danh sách Blog</h3>
    <ul class="list-group">
      <li v-for="id in [1,2,3]" :key="id" class="list-group-item">
        <router-link :to="{ name: 'BlogPost', params: { id } }">
          Bài viết {{ id }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
