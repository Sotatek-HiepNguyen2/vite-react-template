/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PORT: string
  readonly VITE_API_BASE_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
