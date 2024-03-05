<template>
  <form @submit.prevent="submit">
    <div class="mb-3">
      <v-text-field label="Title" v-model="title" />
    </div>
    <div class="mb-3">
      <v-textarea label="Description" v-model="description" />
    </div>
    <div class="mb-3">
      <v-text-field label="Image" v-model="image" />
    </div>
    <div class="mb-3">
      <v-text-field label="Price" type="number" min="0" v-model="price" />
    </div>
    <v-btn color="primary" type="submit">Save</v-btn>
  </form>
</template>

<script>
import { apiClient } from "@/clients";

export default {
  name: "Create",
  created() {},
  data() {
    return {
      title: "",
      description: "",
      image: "",
      price: 0,
    };
  },
  async mounted() {
    if (this.$route.params.id) {
      const product = await apiClient.products.getOne(this.$route.params.id);
      this.title = product.title;
      this.description = product.description;
      this.image = product.image;
      this.price = product.price;
    }
  },
  methods: {
    async submit() {
      if (this.$route.params.id) {
        await apiClient.products.update({
          title: this.title,
          description: this.description,
          image: this.image,
          price: this.price,
          id: this.$route.params.id,
        });
        await this.$router.push("/products");
        return;
      } else {
        await apiClient.products.create({
          title: this.title,
          description: this.description,
          image: this.image,
          price: this.price,
        });
      }
      await this.$router.push("/products");
    },
  },
};
</script>

<style lang="scss" scoped></style>
