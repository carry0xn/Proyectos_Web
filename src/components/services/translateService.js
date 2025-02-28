import axios from 'axios'

const API_URL = 'https://libretranslate.com/translate'

export const translateText = async (text, targetLang) => {
  try {
    const response = await axios.post(API_URL, {
      q: text,
      source: 'auto',
      target: targetLang,
      format: 'text'
    })
    return response.data.translatedText
  } catch (error) {
    console.error('Error translating text:', error)
    return text // Devuelve el texto original si hay un error
  }
}
