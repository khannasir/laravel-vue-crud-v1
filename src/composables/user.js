import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1/'

export default function useUser() {
  const users = ref([])
  const user = ref([])
  const errors = ref({})
  const router = useRouter()

  const getUsers = async () => {
    const response = await axios.get('users')
    users.value = response.data.data
  }

  const getUser = async (id) => {
    const response = await axios.get('user/' + id)
    user.value = response.data.data
  }

  const createUser = async (data) => {
    try {
      await axios.post('create-user', data)
      await router.push({ name: 'userList' })
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors
      }
    }
  }

  const updateUser = async (id) => {
    try {
      await axios.put('update-user/' + id, user.value)
      await router.push({ name: 'userList' })
    } catch (error) {
      if (error.response.status === 422) {
        errors.value = error.response.data.errors
      }
    }
  }

  const deleteUser = async (id) => {
    if (!window.confirm('Are You Sure?')) {
      return
    }
    await axios.delete('delete-user/' + id)
    await getUsers()
  }

  return {
    users,
    user,
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    errors
  }
}
