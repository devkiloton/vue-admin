import { User } from "@/models/user";
import axios from "axios";

const API_URL = process.env.VUE_APP_API_URL;
const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const apiClient = {
  auth: {
    login: async (data: {
      email: string;
      password: string;
      scope: "admin" | "ambassador";
    }): Promise<void> => {
      const { email, password } = data;

      const raw = JSON.stringify({
        email,
        password,
      });

      await axios.post(`${API_URL}/api/admin/login`, raw, {
        headers,
      });
    },
    logout: async (): Promise<void> => {
      await axios.post(`${API_URL}/api/admin/logout`, undefined, {
        headers,
      });
    },
    register: async (data: {
      email: string;
      password: string;
      confirmPassword: string;
      firstName: string;
      lastName: string;
      scope: "admin" | "ambassador";
    }): Promise<void> => {
      const { email, password, confirmPassword, firstName, lastName } = data;

      const raw = JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        confirm_password: confirmPassword,
      });

      await axios.post(`${API_URL}/api/admin/register`, raw, {
        headers,
      });
    },
    user: async (): Promise<false | User> => {
      return await axios
        .get(`${API_URL}/api/admin/user`, {
          headers,
        })
        .then((res) => res.data)
        .catch(() => false);
    },
  },
  ambassadors: {
    getAll: async (): Promise<User[]> => {
      return await axios
        .get(`${API_URL}/api/admin/ambassadors`, {
          headers,
        })
        .then((res) => res.data);
    },
  },
  links: {
    getByID: async (id: string): Promise<string[]> => {
      return await axios
        .get(`${API_URL}/api/admin/users/${id}/links`, {
          headers,
        })
        .then((res) => res.data);
    },
  },
  products: {
    getAll: async (): Promise<Array<object>> => {
      return await axios
        .get(`${API_URL}/api/admin/products`, {
          headers,
        })
        .then((res) => res.data);
    },
    getOne: async (id: string): Promise<object> => {
      return await axios
        .get(`${API_URL}/api/admin/products/${id}`, {
          headers,
        })
        .then((res) => res.data);
    },
    delete: async (id: string): Promise<void> => {
      await axios.delete(`${API_URL}/api/admin/products/${id}`, {
        headers,
      });
    },
    create: async (data: {
      title: string;
      description: string;
      price: number;
      image: string;
    }): Promise<void> => {
      const { title, description, price, image } = data;

      const raw = JSON.stringify({
        title,
        description,
        price,
        image,
      });

      await axios.post(`${API_URL}/api/admin/products`, raw, {
        headers,
      });
    },
    update: async (data: {
      title: string;
      description: string;
      price: number;
      image: string;
      id: string;
    }): Promise<void> => {
      const { title, description, price, image } = data;

      const raw = JSON.stringify({
        title,
        description,
        price,
        image,
      });

      await axios.put(`${API_URL}/api/admin/products/${data.id}`, raw, {
        headers,
      });
    },
  },
  orders: {
    getAll: async () => {
      return await axios
        .get(`${API_URL}/api/admin/orders`, {
          headers,
        })
        .then((res) => res.data);
    },
  },
  users: {
    update: async (data: {
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    }): Promise<void> => {
      const { email, firstName, lastName } = data;

      const raw = JSON.stringify({
        email,
        first_name: firstName,
        last_name: lastName,
      });

      await axios.put(`${API_URL}/api/admin/users/update`, raw, {
        headers,
      });
    },
    updatePassword: async (data: {
      password: string;
      confirmPassword: string;
    }): Promise<void> => {
      const { password, confirmPassword } = data;

      const raw = JSON.stringify({
        password,
        confirm_password: confirmPassword,
      });

      await axios.put(`${API_URL}/api/admin/users/update-password`, raw, {
        headers,
      });
    },
  },
};
