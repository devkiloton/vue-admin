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
};
