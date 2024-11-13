<script setup>
import { reactive } from 'vue'
import useUser from '../../composables/user'

const { createUser, errors } = useUser()

const form = reactive({
  name: '',
  email: '',
  password: ''
})
</script>

<template>
  <div class="mt-5 bg-white">
    <div class="text-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl">User Create</h1>
    </div>
    <div class="mx-auto max-w-sm py-4 bg-white sm:py-10 lg:py-10">
      <form class="p-5 rounded shadow" @submit.prevent="createUser(form)">
        <div class="mb-5">
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Name</label
          >
          <input
            type="text"
            id="name"
            v-model="form.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div v-if="errors.name">
            <span class="text-sm text-red-600 font-medium">*{{ errors.name[0] }}</span>
          </div>
        </div>
        <div class="mb-5">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
          />
          <div v-if="errors.email">
            <span class="text-sm text-red-600 font-medium">*{{ errors.email[0] }}</span>
          </div>
        </div>
        <div class="mb-5">
          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Phone</label
          >
          <input
            type="text"
            id="phone"
            v-model="form.phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <div v-if="errors.phone">
            <span class="text-sm text-red-600 font-medium">*{{ errors.phone[0] }}</span>
          </div>
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
