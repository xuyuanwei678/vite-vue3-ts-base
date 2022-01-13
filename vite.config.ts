
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  },
  css: {
    // css预处理器
    preprocessorOptions: {
      less: {
        charset: false,
        additionalData: '@import "./src/assets/style/global.less";',
      },
    },

  },
  //开发服务器选项
  server: {
    proxy: {
      '/apo': {
        target: 'http://192.168.0.9:9001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/apo/, '')
      }
    }
  },
  //构建选项
  build: {

  }
})

