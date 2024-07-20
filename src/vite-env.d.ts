/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly NGROK_AUTH_TOKEN: string;
    readonly NGROK_DOMAIN: string;
    readonly HTTP_TUNNEL: string;
    readonly PORT: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }