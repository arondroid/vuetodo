<template>
  <div class="card card-body mt-4">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name</label>
        <input type="text" v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Email</label>
        <input
          v-model="form.email"
          class="form-control"
          type="email"
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Status</label>
        <select v-model="form.status" class="form-control" required>
        <option value="0">0</option>
        <option value="1">1</option>
        </select>

      </div>

      <button type="submit" class="btn btn-success mt-3">
        Create User
      </button>
    </form>
  </div>
</template>

<script>
import { createUser } from '@/firebase'
import { reactive } from 'vue'
export default {
  setup() {
    const form = reactive({ name: '', email: '', status: 0 })
    const onSubmit = async () => {
      await createUser({ ...form })
      form.name = ''
      form.email = ''
      form.status = 0
    }
    return { form, onSubmit }
  }
}
</script>