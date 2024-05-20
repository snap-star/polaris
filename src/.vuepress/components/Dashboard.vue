<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome, {{ user.email }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const auth = getAuth();
    const user = ref(auth.currentUser);
    const router = useRouter();

    const logout = () => {
      signOut(auth).then(() => {
        router.push('/login');
      });
    };

    return {
      user,
      logout
    };
  }
};
</script>

<style>
/* Add your styles here */
</style>