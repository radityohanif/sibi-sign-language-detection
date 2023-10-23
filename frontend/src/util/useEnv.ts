const baseUrl = (path: string) => {
  return import.meta.env.VITE_BASE_URL + path;
};

const backendUrl = (path: string) => {
  return import.meta.env.VITE_BACKEND_URL + path;
};

const isNoBackend = () => {
  if (import.meta.env.VITE_USE_BACKEND == 0) {
    return true;
  }
  return false;
};

export const useEnv = {
  baseUrl,
  backendUrl,
  isNoBackend,
};
