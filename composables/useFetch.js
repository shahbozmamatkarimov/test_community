import { useRuntimeConfig } from '@nuxtjs/composition-api'

const { apiBaseUrl } = useRuntimeConfig()

export const getFetch = (url) => {
    const { data, pending, error } = useFetch(`${apiBaseUrl}/${url}`)

    return {
      data,
      pending,
      error
    }
}

export const postFetch = (url, data) => {
    const requestOptions = {
        method: 'POST',
        headers: {},
        body: JSON.stringify(data),
      };
      
    const { data, pending, error } = useFetch(`${apiBaseUrl}/${url}`)

    return {
      data,
      pending,
      error
    }
}