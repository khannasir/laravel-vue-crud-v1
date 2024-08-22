<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="max-w-7xl mx-auto">
      <nav class="m-2 p-2">
        <RouterLink to="/" class="px-4 py-2 mr-4 text-slate-50 bg-blue rounded">Home</RouterLink>
        <RouterLink to="/user" class="px-4 py-2 mr-4 text-slate-50 bg-blue rounded"
          >Users</RouterLink
        >
      </nav>
    </div>
  </header>
  <main class="max-w-7xl mx-auto min-h-screen">
    <RouterView />
  </main>
</template>
