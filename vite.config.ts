import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Publicado em https://lucasandradeinf.github.io/modelo2/ — a base precisa do nome do repositório.
export default defineConfig({
  base: '/modelo2/',
  plugins: [react()],
  build: { target: 'es2020', assetsInlineLimit: 0 },
})
