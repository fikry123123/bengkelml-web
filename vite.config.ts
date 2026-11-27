import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-information-page-directory-routes',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const route = req.url?.match(/^\/(harga|joki|tools|blog|faq)\/?(\?.*)?$/);
          if (route) req.url = `/${route[1]}/index.html${route[2] || ''}`;
          next();
        });
      }
    }
  ],
});
