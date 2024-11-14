<template>
    <v-form @submit.prevent="submit">
      <v-text-field v-model="user.name" label="Full Name" required></v-text-field>
      <v-text-field v-model="user.phone" label="Phone" required></v-text-field>
      <v-text-field v-model="user.address" label="Address" required></v-text-field>
      <v-file-input v-model="profilePicture" label="Profile Picture" accept="image/*"></v-file-input>
      <v-btn type="submit" color="primary">Update Profile</v-btn>
    </v-form>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          name: '',
          phone: '',
          address: '',
        },
        profilePicture: null,
      }
    },
    async mounted() {
      const response = await this.$axios.get('/profile')
      this.user = response.data
    },
    methods: {
      async submit() {
        const formData = new FormData()
        formData.append('name', this.user.name)
        formData.append('phone', this.user.phone)
        formData.append('address', this.user.address)
        if (this.profilePicture) {
          formData.append('profile_picture', this.profilePicture)
        }
  
        try {
          await this.$axios.put('/profile', formData)
          this.$store.dispatch('user/getProfile') // Atualizar os dados no Vuex
        } catch (error) {
          console.error('Error updating profile', error)
        }
      },
    },
  }
  </script>
  