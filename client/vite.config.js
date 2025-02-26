import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
 plugins: [react()],
  server: {
    // Proxy API requests to the backend
    proxy: {
      '/api': 'https://lrnr-app-team-2.onrender.com', 
    },
  },
})