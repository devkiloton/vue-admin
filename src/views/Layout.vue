<template>
  <Nav />

  <div class="container-fluid">
    <div class="row">
      <Menu />

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="table-responsive">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { apiClient } from "@/clients";
import Menu from "@/components/Menu.vue";
import Nav from "@/components/Nav.vue";
import { User } from "@/models/user";

export default {
  name: "Layout",
  components: {
    Menu,
    Nav,
  },
  data() {
    return {
      user: new User(),
    };
  },
  async mounted() {
    this.user = await apiClient.auth.user();

    await this.$store.dispatch("setUser", this.user);
  },
};
</script>

<style lang="scss" scoped></style>
