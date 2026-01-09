import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow dev server when accessed via this host (e.g., reverse proxy, tunnels)
    allowedHosts: [
      'ai.arcanor.com',
      'ai-panel.arcanor.com',
    ],
    // Enable listening on all addresses to support external access if needed
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    // Ensure proper handling of network requests
    hmr: {
      clientPort: 5173,
    },
    // Proxy configuration to avoid CORS issues
    proxy: {
      // Proxy authentication API requests to the auth backend
      '/api/v1/auth': {
        target: 'http://3.149.222.41:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
        configure: (proxy, options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            // Add CORS headers to the response
            proxyRes.headers['Access-Control-Allow-Origin'] = req.headers.origin || '*';
            proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
            proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
            proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requested-With';
          });
        },
      },
      // Proxy profile API requests to the auth backend
      '/api/v1/profile': {
        target: 'http://3.149.222.41:8080',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path,
        configure: (proxy, options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            // Add CORS headers to the response
            proxyRes.headers['Access-Control-Allow-Origin'] = req.headers.origin || '*';
            proxyRes.headers['Access-Control-Allow-Credentials'] = 'true';
            proxyRes.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
            proxyRes.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization, X-Requested-With';
          });
        },
      },
    },
  },
  // Ensure base path is relative for proper asset loading
  base: '/',
  build: {
    // Ensure assets are loaded correctly
    assetsDir: 'assets',
  },
})
