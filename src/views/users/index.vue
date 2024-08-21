<script setup>
import useUser from '../../composables/user'
const { users, getUsers, deleteUser } = useUser()
import { onMounted } from 'vue'
import { ref } from 'vue'

onMounted(() => getUsers())
</script>

<template>
  <main>
    <div class="mt-5">
      <div class="flex justify-end m-2 p-2">
        <RouterLink
          :to="{ name: 'userCreate' }"
          class="px-4 py-2 bg-indigo-500 text-slate-50 rounded"
          >Add User <span class="font-bold">+</span></RouterLink
        >
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-6 py-3">S.No</th>
              <th scope="col" class="px-6 py-3">Name</th>
              <th scope="col" class="px-6 py-3">Email</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              v-for="(user, key) in users"
              :key="user.id"
            >
              <td class="px-6 py-4">{{ ++key }}</td>
              <td class="px-6 py-4">{{ user.name }}</td>
              <td class="px-6 py-4">{{ user.email }}</td>
              <td class="px-6 py-4">
                <RouterLink
                  :to="{ name: 'userEdit', params: { id: user.id } }"
                  class="px-4 py-2 font-medium bg-blue-600 text-white mr-1 rounded"
                  >Edit</RouterLink
                >

                <button
                  class="px-4 py-2 font-medium bg-red-600 text-white mr-1 rounded"
                  @click="deleteUser(user.id)"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
