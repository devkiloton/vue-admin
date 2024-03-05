<template>
  <div>
    <h3>Account Information</h3>
    <form @submit.prevent="infoSubmit">
      <div class="mb-3">
        <v-text-field label="First Name" v-model="user.first_name" />
      </div>
      <div class="mb-3">
        <v-text-field label="Last Name" v-model="user.last_name" />
      </div>
      <div class="mb-3">
        <v-text-field label="Email" type="email" v-model="user.email" />
      </div>
      <v-btn color="primary" type="submit">Save</v-btn>
    </form>

    <h3 class="mt-4">Change Password</h3>
    <form @submit.prevent="passwordSubmit">
      <div class="mb-3">
        <v-text-field label="Password" v-model="password" />
      </div>
      <div class="mb-3">
        <v-text-field label="Password Confirm" v-model="password_confirm" />
      </div>
      <v-btn color="primary" type="submit">Save</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      password: "",
      password_confirm: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
