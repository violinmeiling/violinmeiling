import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 5173,
    allowedHosts: ["4864-132-170-35-233.ngrok-free.app"],
  },
})
