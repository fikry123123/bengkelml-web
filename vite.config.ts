import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-information-page-directory-routes',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const incoming = req as { url?: string };
          const route = incoming.url?.match(/^\/(harga|joki|tools|blog|faq)\/?(\?.*)?$/);
          if (route) incoming.url = `/${route[1]}/index.html${route[2] || ''}`;
          next();
        });
      }
    }
  ],
});
