/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_BACKEND_URL: string;
  readonly VITE_ENV: string;
  readonly VITE_USE_BACKEND: number;
  // more env variables...
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
