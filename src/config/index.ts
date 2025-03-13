const throwIfUndefined = (env?: string) => {
  if (!env) {
    throw new Error("ENV variable not defined");
  }
  console.log("env", env);
  return env;
};

export const config = {
  PEXELS_API_KEY: throwIfUndefined(import.meta.env.VITE_PEXELS_API_KEY),
  PEXELS_BASE_URL: throwIfUndefined(import.meta.env.VITE_PEXELS_BASE_URL),
};
