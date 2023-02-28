import ApiFactory from "/api"
import axios from "axios"

export default defineNuxtPlugin((nuxtApp) => {
  const instant = axios.create({
    baseURL: nuxtApp.$config.public.API_BASE_URL
  })
  const api = ApiFactory(instant)
  return {
    provide: {
      api: api,
    },
  };
});
