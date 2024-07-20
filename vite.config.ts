import { fileURLToPath } from "url";
import { defineConfig, loadEnv, PluginOption } from "vite";
import vue from "@vitejs/plugin-vue";
import { ngrok } from "vite-plugin-ngrok";
// @ts-ignore
import localtunnel from "vite-plugin-localtunnel";
// @ts-ignore
import eruda from "vite-plugin-eruda";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = { ...loadEnv("", process.cwd(), "") };
  let plugins: PluginOption[] = [vue(), eruda({ debug: true })];

  if (env.HTTP_TUNNEL == "ngrok") {
    plugins.push(
      ngrok({
        domain: env.NGROK_DOMAIN,
        authtoken: env.NGROK_AUTH_TOKEN,
        port: parseInt(env.PORT),
      })
    );
  } else if (env.HTTP_TUNNEL == "localtunnel") {
    plugins.push(
      localtunnel({
        subdomain: "dev-tma",
        port: parseInt(env.PORT),
      })
    );
  }
  return {
    base: "/tma-habr/",
    plugins: plugins,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: parseInt(env.PORT),
    },
    preview: {
      port: 8000,
    },
  };
});
