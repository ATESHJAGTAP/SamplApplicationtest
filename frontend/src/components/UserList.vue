<template>
  <div>
    <form @submit.prevent="addUser">
      <input v-model="name" placeholder="Name" />
      <input v-model="email" placeholder="Email" />
      <button type="submit">Add User</button>
    </form>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }} ({{ user.email }})</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      name: '',
      email: '',
    };
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/api/users');
    this.users = response.data;
  },
  methods: {
    async addUser() {
      const response = await axios.post('http://localhost:3000/api/users', {
        name: this.name,
        email: this.email,
      });
      this.users.push(response.data);
      this.name = '';
      this.email = '';
    },
  },
};
</script>
