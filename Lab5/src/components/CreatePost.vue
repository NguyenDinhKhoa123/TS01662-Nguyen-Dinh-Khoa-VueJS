<template>
  <div class="card p-3 mb-4">
    <h3>Tạo bài viết mới</h3>

    <input v-model="title" class="form-control mb-2" placeholder="Tiêu đề" />
    <input v-model="author" class="form-control mb-2" placeholder="Tác giả" />
    <textarea v-model="content" class="form-control mb-2" placeholder="Nội dung"></textarea>

    <button class="btn btn-success" @click="addPost">Đăng bài</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['add-post'])

const title = ref('')
const author = ref('')
const content = ref('')

const addPost = () => {
  if (!title.value || !author.value || !content.value) return

  emit('add-post', {
    title: title.value,
    author: author.value,
    content: content.value,
    highlight: false
  })

  title.value = ''
  author.value = ''
  content.value = ''
}
</script>
