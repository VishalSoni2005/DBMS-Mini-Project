import { create } from "zustand";
import { toast } from "sonner";
import axios from 'axios';

const serverUrl = "http://localhost:3000";

export const userAuthStore = create((set) => ({
  user: null,
  isLoggedIn: false,

  registerUser: async(userDate) => {
    try {

      const response = axios.post(`${serverUrl}/register`, userDate, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.result;
      set({ user: data, isLoggedIn: true });
      toast.success("Registration successful!");
      
      
    } catch (error) {
      console.error("Error registering user:", error);
      toast.error("Registration failed. Please try again.");
    }
  },



  logout: () => set({ user: null, isLoggedIn: false }),
}));
