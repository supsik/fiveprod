import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  // const isOpening = ref(true) //prod
  const isOpening = ref(false) //dev


  const setOpening = (param: boolean) => {
    isOpening.value = param
  }

  return { isOpening, setOpening }
})