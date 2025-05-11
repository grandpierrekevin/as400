import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import Pages from 'vite-plugin-pages'
import path from 'path' 

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    Pages({
      importMode: 'async', // active le lazy loading automatique des routes
      dirs: 'src/pages',
      extensions: ['tsx', 'ts', 'js', 'jsx'],
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), 
    },
  },
})