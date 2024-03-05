<template>
  <div>
    <v-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">#</th>
            <th class="text-left">Name</th>
            <th class="text-left">Email</th>
            <th class="text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users.slice((page - 1) * perPage, page * perPage)"
            :key="user.id"
          >
            <td>{{ user.id }}</td>
            <td>{{ user.first_name }} {{ user.last_name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <v-btn
                :href="`/users/${user.id}/links`"
                color="primary"
                elevation="2"
                >View</v-btn
              >
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
  name: "Users",
  data() {
    return {
      users: [],
      page: 1,
      perPage: 10,
      lastPage: 0,
    };
  },
  async mounted() {
    const users = await apiClient.ambassadors.getAll();

    this.users = users;
    this.lastPage = Math.ceil(users.length / this.perPage);
  },
};
</script>

<style lang="scss" scoped></style>
