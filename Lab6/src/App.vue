<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Quản lý học sinh - Bài 4 Lab 6</h2>

    <div class="row">
      <!-- Bên trái: Danh sách học sinh -->
      <div class="col-md-7">
        <h3>Danh sách học sinh</h3>

        <table class="table table-bordered table-hover mt-3">
          <thead class="table-light">
            <tr>
              <th>Họ và tên</th>
              <th>Điểm</th>
              <th>Ngày sinh</th>
              <th>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(stu, index) in students" :key="index">
              <td>{{ stu.name }}</td>
              <td class="text-center">{{ stu.score }}</td>
              <td class="text-center">{{ stu.dob }}</td>
              <td class="text-center">
                <button class="btn btn-warning btn-sm me-2" @click="editStudent(index)">
                  Sửa
                </button>
                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">
                  Xóa
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Bên phải: Form Thêm / Cập nhật -->
      <div class="col-md-5">
        <h3>{{ isEditing ? 'Cập nhật học sinh' : 'Thêm học sinh' }}</h3>

        <form @submit.prevent="submitForm" class="mt-3">
          <div class="mb-3">
            <label for="name" class="form-label">Họ tên:</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="student.name"
              required
            />
          </div>

          <div class="mb-3">
            <label for="score" class="form-label">Điểm:</label>
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
              class="form-control"
              id="score"
              v-model.number="student.score"
              required
            />
          </div>

          <div class="mb-3">
            <label for="dob" class="form-label">Ngày sinh:</label>
            <input
              type="date"
              class="form-control"
              id="dob"
              v-model="student.dob"
              required
            />
          </div>

          <button type="submit" class="btn btn-success w-100 py-2">
            {{ isEditing ? 'Cập nhật' : 'Thêm' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Dữ liệu mẫu giống trong Lab (bạn có thể thêm/xóa)
const students = ref([
  { name: 'Nguyễn Chí Hùng', score: 8, dob: '2006-01-01' },
  { name: 'Phạm Thị Lan', score: 9, dob: '2006-05-15' }
])

// Đối tượng đang thêm hoặc sửa
const student = ref({
  name: '',
  score: null,
  dob: ''
})

const isEditing = ref(false)
const editingIndex = ref(null)

function submitForm() {
  if (isEditing.value) {
    // Cập nhật học sinh đang sửa
    students.value[editingIndex.value] = { ...student.value }
    isEditing.value = false
    editingIndex.value = null
  } else {
    // Thêm mới
    students.value.push({ ...student.value })
  }
  resetForm()
}

function editStudent(index) {
  student.value = { ...students.value[index] } // copy để tránh thay đổi trực tiếp
  isEditing.value = true
  editingIndex.value = index
}

function deleteStudent(index) {
  if (confirm('Bạn có chắc chắn muốn xóa học sinh này?')) {
    students.value.splice(index, 1)
    // Nếu xóa học sinh đang sửa thì reset form
    if (isEditing.value && editingIndex.value === index) {
      resetForm()
    }
  }
}

function resetForm() {
  student.value = { name: '', score: null, dob: '' }
  isEditing.value = false
  editingIndex.value = null
}
</script>