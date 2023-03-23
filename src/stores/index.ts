import { defineStore } from 'pinia';

export const useStore = defineStore('easyPoster', {
  state: () => ({
    base64Url: '',
  }),
  actions: {
    setBase64(base64: string) {
      this.base64Url = base64;
    },
  }
});