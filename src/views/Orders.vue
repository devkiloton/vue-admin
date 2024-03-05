<template>
  <v-expansion-panels>
    <v-expansion-panel v-for="order in orders" :key="order.id">
      <v-expansion-panel-title>
        {{ order.name }} ${{ order.total }}
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <v-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">#</th>
                <th class="text-left">Product Title</th>
                <th class="text-left">Price</th>
                <th class="text-left">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.order_items" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.product_title }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.quantity }}</td>
              </tr>
            </tbody>
          </template>
        </v-table>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { apiClient } from "@/clients";

export default {
  name: "Orders",
  async mounted() {
    this.orders = await apiClient.orders.getAll();
  },
  data() {
    return {
      orders: [],
    };
  },
  methods: {
    async infoSubmit() {
      await apiClient.users.update(this.user);
    },
    async passwordSubmit() {
      await apiClient.users.updatePassword(this.password);
    },
  },
};
</script>

<style lang="scss" scoped></style>
