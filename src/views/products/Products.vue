<template>
  <div>
    <div class="pt-3 pb-2 mb-3 border-bottom">
      <v-btn href="/products/create" variant="contained" color="primary"
        >Add</v-btn
      >
    </div>

    <v-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Image</th>
            <th class="text-left">Title</th>
            <th class="text-left">Description</th>
            <th class="text-left">Price</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in products.slice(
              (page - 1) * perPage,
              page * perPage
            )"
            :key="product.id"
          >
            <td>{{ product.id }}</td>
            <td>
              <v-img :src="product.image" max-height="80" max-width="120" />
            </td>
            <td>{{ product.title }}</td>
            <td>{{ product.description }}</td>
            <td>{{ product.price }}</td>
            <td>
              <v-btn-toggle>
                <v-btn :href="`/products/${product.id}/edit`">Edit</v-btn>
                <v-btn @click="del(product.id)">Delete</v-btn>
              </v-btn-toggle>
            </td>
          </tr>
        </tbody>
      </template>
    </v-table>

    <div class="text-center">
      <v-pagination
        v-model="page"
        total-visible="7"
        :length="lastPage"
      ></v-pagination>
    </div>
  </div>
</template>

<script>
import { apiClient } from "@/clients";

export default {
  name: "Test",
  created() {},
  data() {
    return {
      products: [],
      page: 1,
      perPage: 10,
      lastPage: 0,
    };
  },
  async mounted() {
    const data = await apiClient.products.getAll();
    this.products = data;
    this.lastPage = Math.ceil(this.products.length / this.perPage);
  },
  methods: {
    async del(id) {
      await apiClient.products.delete(id);
      this.products = this.products.filter((product) => product.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped></style>
