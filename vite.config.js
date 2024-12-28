import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy:{
      '/api': 'https://videotube-backend-cz5h.onrender.com'
    }
  },
  plugins: [react()],
})
