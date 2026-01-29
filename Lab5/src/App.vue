<template>
  <div class="container mt-4">
    <h2 class="mb-4">Ứng dụng Blog</h2>

    <div class="row">
      <div class="col-md-6">
        <CreatePost @add-post="addPost" />
      </div>
      <div class="col-md-6">
        <PostList :posts="posts" @toggle-highlight="toggleHighlight" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import CreatePost from './components/CreatePost.vue'
import PostList from './components/PostList.vue'

const posts = reactive([])

const addPost = (post) => {
  posts.push(post)
}

const toggleHighlight = (index) => {
  posts[index].highlight = !posts[index].highlight
}
</script>

<!-- <script setup>
import HelloWorld from './components/Bai1.vue'
</script>

<template>
 
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>

</style> -->
