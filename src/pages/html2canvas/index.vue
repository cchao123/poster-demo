<template>
  <div id="posterDomWrap">
    <PosterDomContent />
  </div>
</template>

<script setup lang="ts">
import PosterDomContent from './posterDom.vue';
import { convertDOMToImage } from '@/utils/canvas/convertDOMToImage'

const getBase64 = (cb: (base64: string) => void) => {
const DOM: HTMLElement | null = document.getElementById('posterDomWrap');
  if (DOM) {
    convertDOMToImage({
      DOM,
      quality: 0.8,
      callback: (base64: string) => {
        cb(base64)
      }
    });
  }
}

defineExpose({
  getBase64
})
</script>

<style scoped>
#posterDomWrap {
  position: fixed;
  width: 750px;
  height: 1334px;
  left: 9999px;
  white-space: nowrap;
}
</style>
