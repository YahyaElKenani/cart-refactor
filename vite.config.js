import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://yahyaelkenani.github.io/cart-refactor/',
  plugins: [react(), tailwindcss()],
})
