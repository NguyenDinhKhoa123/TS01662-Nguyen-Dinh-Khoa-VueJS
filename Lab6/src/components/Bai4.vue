<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-7">
        <StudentList
          :students="students"
          @edit="handleEdit"
          @delete="handleDelete"
        />
      </div>

      <div class="col-md-5">
        <StudentForm
          :student="currentStudent"
          :is-editing="isEditing"
          @submit="handleSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import StudentList from './StudentList.vue'
import StudentForm from './StudentForm.vue'

const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
])

const currentStudent = ref({ name: '', score: null, dob: '' })
const isEditing = ref(false)
const editingIndex = ref(null)

function handleSubmit(updatedData) {
  if (isEditing.value) {
    students.value[editingIndex.value] = { ...updatedData }
  } else {
    students.value.push({ ...updatedData })
  }
  resetForm()
}

function handleEdit(index) {
  currentStudent.value = { ...students.value[index] }
  isEditing.value = true
  editingIndex.value = index
}

function handleDelete(index) {
  if (confirm('Bạn có chắc chắn muốn xóa?')) {
    students.value.splice(index, 1)
    if (isEditing.value && editingIndex.value === index) {
      resetForm()
    }
  }
}

function resetForm() {
  currentStudent.value = { name: '', score: null, dob: '' }
  isEditing.value = false
  editingIndex.value = null
}
</script>