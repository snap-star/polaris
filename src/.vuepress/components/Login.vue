<template>
  <div class="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const error = ref('');
    const router = useRouter();
    const auth = getAuth();

    const login = () => {
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then(() => {
          router.push('/dashboard');
        })
        .catch(err => {
          error.value = err.message;
        });
    };

return {
      email,
      password,
      error,
      login
    };
  }
};
</script>

<style>
/* Add your styles here */
</style>