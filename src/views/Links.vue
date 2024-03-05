<template>
  <v-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">Code</th>
          <th class="text-left">Count</th>
          <th class="text-left">Revenue</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="link in links" :key="link.id">
          <td>{{ link.id }}</td>
          <td>{{ link.code }}</td>
          <td>{{ link.orders.length }}</td>
          <td>{{ link.orders.reduce((s, o) => s + o.total, 0) }}</td>
        </tr>
      </tbody>
    </template>
  </v-table>
</template>

<script>
import { apiClient } from "@/clients";

export default {
  name: "Links",
  data() {
    return {
      links: [],
    };
  },
  async mounted() {
    const data = await apiClient.links.getByID(this.$route.params.id);
    this.links = data;
  },
};
</script>
