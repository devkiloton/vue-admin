<template>
  <main class="form-signin">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Please register</h1>

      <div class="form-floating">
        <input
          v-model="firstName"
          class="form-control"
          placeholder="First Name"
        />
        <label>First Name</label>
      </div>

      <div class="form-floating">
        <input
          v-model="lastName"
          class="form-control"
          placeholder="Last Name"
        />
        <label>Last Name</label>
      </div>

      <div class="form-floating">
        <input
          v-model="email"
          type="email"
          class="form-control"
          placeholder="name@example.com"
        />
        <label>Email address</label>
      </div>

      <div class="form-floating">
        <input
          v-model="password"
          type="password"
          class="form-control"
          placeholder="Password"
        />
        <label>Password</label>
      </div>

      <div class="form-floating">
        <input
          v-model="passwordConfirm"
          type="password"
          class="form-control"
          placeholder="Password Confirm"
        />
        <label>Password Confirm</label>
      </div>

      <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
    </form>
  </main>
</template>

<script>
import { apiClient } from "@/clients";

export default {
  name: "Register",
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  methods: {
    async submit() {
      await apiClient.auth.register({
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        confirmPassword: this.passwordConfirm,
        scope: "admin",
      });
      await this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
