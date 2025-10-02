import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: [
        {
          dir: 'src/views',
          baseRoute: ''
        }
      ],
      extensions: ['vue'],
      extendRoute(route) {
        route.props = false;
        return route;
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 5173,
    host: '0.0.0.0'
  }
})
