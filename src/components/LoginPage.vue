<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');

const login = () => {
  // Here you would typically handle the login logic
  console.log('Login attempted', { username: username.value, password: password.value });
  // For now, we'll just log the attempt and navigate to the TV page
  router.push('/tv');
};
</script>

<template>
  <div class="login-container">
    <h2>Welcome</h2>
    <form @submit.prevent="login">
      <div class="input-group">
        <input id="username" v-model="username" type="text" required placeholder="Username">
      </div>
      <div class="input-group">
        <input id="password" v-model="password" type="password" required placeholder="Password">
      </div>
      <button type="submit">Log In</button>
    </form>
  </div>
</template>

<style scoped>
/* ... (previous styles remain unchanged) ... */
</style>