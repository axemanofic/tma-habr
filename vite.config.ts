import { fileURLToPath } from "url";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { ngrok } from "vite-plugin-ngrok";

const { NGROK_AUTH_TOKEN, NGROK_DOMAIN } = loadEnv("", process.cwd(), "NGROK");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ngrok({
      domain: NGROK_DOMAIN,
      authtoken: NGROK_AUTH_TOKEN,
    }),
    vue(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 3000,
  },
});
