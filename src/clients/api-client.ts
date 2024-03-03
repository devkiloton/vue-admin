const API_URL = process.env.VUE_APP_API_URL;
const headers = new Headers();
headers.append("Accept", "json");
headers.append("Content-Type", "application/json");

export const apiClient = {
  auth: {
    login: async (data: {
      email: string;
      password: string;
      scope: "admin" | "ambassador";
    }) => {
      const { email, password } = data;

      const raw = JSON.stringify({
        email,
        password,
      });

      const requestOptions = {
        method: "POST",
        body: raw,
        headers,
      };

      await fetch(`${API_URL}/api/admin/login`, requestOptions);
    },
    register: async (data: {
      email: string;
      password: string;
      confirmPassword: string;
      firstName: string;
      lastName: string;
      scope: "admin" | "ambassador";
    }) => {
      const { email, password, confirmPassword, firstName, lastName } = data;

      const raw = JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        confirm_password: confirmPassword,
      });

      const requestOptions = {
        method: "POST",
        body: raw,
        headers,
      };

      await fetch(`${API_URL}/api/admin/register`, requestOptions);
    },
  },
};
