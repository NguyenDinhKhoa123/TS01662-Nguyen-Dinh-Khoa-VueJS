<template>
  <div>
    <h3>Danh sách bài viết</h3>

    <div
      v-for="(post, index) in posts"
      :key="index"
      class="card p-3 mb-3"
      :class="{ 'border-danger': post.highlight }"
      :style="{ backgroundColor: post.highlight ? '#ffe6e6' : '#ffffff' }"
    >
      <h5>{{ post.title }}</h5>
      <p><i>Tác giả: {{ post.author }}</i></p>
      <p>{{ post.content }}</p>

      <button class="btn btn-warning btn-sm" @click="$emit('toggle-highlight', index)">
        Đổi màu bài viết
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps(['posts'])
</script>


