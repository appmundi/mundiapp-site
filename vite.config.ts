import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  preview: {
    // Permite o host especificado (pode ser um array com vários hosts)
    allowedHosts: ['mundiapp.com.br']
  }
})
