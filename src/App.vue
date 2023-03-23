<template>
  <div class="demo">
    <Popup v-model:show="isPopShow"
           @close="closePopup">
      <div class="poster-content">
        <img class="poster-img"
             :src="base64Url">
        <span class="poster-tips">长按保存</span>
      </div>
    </Popup>

    <div class="demo1">
      <PixiDemo ref="pixiRef" />
      <Button
              type="primary"
              @click="showPixi">弹出海报</Button>
    </div>

    <div class="demo2">
      <Html2canvasDemo ref="html2canvasRef" />
      <Button plain
              type="primary"
              @click="showHtml2canvas">弹出海报</Button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import {
  Button,
  Popup,
  Field,
  CheckboxGroup,
  Checkbox,
  showToast,
  showLoadingToast,
  closeToast
} from 'vant'
import 'vant/lib/index.css'
import 'vant/lib/index.css'
import PixiDemo from '@/pages/pixi/index.vue'
import Html2canvasDemo from './pages/html2canvas/index.vue'
import { useStore } from '@/stores'
const store = useStore()

const isPopShow = ref(false)
const base64Url = computed(() => store.base64Url)
const { setBase64 } = store

const pixiRef = ref()
const showPixi = () => {
  const base64 = pixiRef.value.getBase64();
  setBase64(base64);
  isPopShow.value = true
}

const html2canvasRef = ref()
const showHtml2canvas = () => {
  showLoadingToast({
  message: '加载中...',
  forbidClick: true,
});
  html2canvasRef.value.getBase64((base64: string) => {
    closeToast();
    setBase64(base64);
    isPopShow.value = true;
  })
}

const closePopup = () => {
  setBase64('')
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}

.demo {
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.demo1,
.demo2 {
  position: relative;
  height: 100%;
  font-size: 50px;
}

.demo1 {
  background-color: #eeeeee;
}

.demo1::after {
  color: #fff;
  content: 'PIXIJS';
  position: absolute;
  right: 0;
  bottom: 0;
}

.demo2::after {
  color: #eeeeee;
  content: 'HTML2CANVAS';
  position: absolute;
  right: 0;
  bottom: 0;
}

:deep(.van-popup) {
  background-color: transparent;
}

.poster-content {
  display: flex;
  flex-direction: column;
}

.poster-img {
  height: 80vh;
}

.poster-tips {
  color: #fff;
  text-align: center;
  margin-top: 18px;
  font-size: 18px;
}
</style>
