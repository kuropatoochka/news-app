import axios from "axios";

const BASE_URL=import.meta.env.VITE_NEWS_BASE_API_URL
const API_KEY=import.meta.env.VITE_NEWS_API_KEY

export const getNews = async ({ page_number = 1, page_size = 10, category, region, keywords}) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        region,
        keywords
      }
    })
    return response.data
  } catch (error) {
    console.log(`Ошибка получения данных: ${error}`)
  }
}

export const getLatestNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getCategory = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const getRegion = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/regions`, {
      params: {
        apiKey: API_KEY,
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}
