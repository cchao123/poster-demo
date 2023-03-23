<template>
  <div id="pixiContainer"></div>
</template>

<script setup lang="ts">
import { onMounted, ref, defineExpose } from 'vue'
import PIXI from '@/utils/canvas/pixi'

const createSprite = (assetsUrl: string, defaultParams: any) => {
  const newSprite: any = PIXI.Sprite.from(assetsUrl)
  Object.keys(defaultParams).forEach((key: string) => (newSprite[key] = defaultParams[key]))
  return newSprite
}

const getBase64 = () => {
  // 转换方法1：快，renderer会裁剪透明区域
  // app.renderer.plugins.extract.image(app.stage, 'image/png', 0.8).src

  // 导出方法2：可以保留透明区域
  const renderTexture: any = PIXI.RenderTexture.create(app.screen.width, app.screen.height)
  app.renderer.render(app.stage, renderTexture)
  return app.renderer.plugins.extract.base64(renderTexture)
}

defineExpose({
  getBase64
})

const app = new PIXI.Application({
  width: 750,
  height: 1444,
  antialias: true,
  transparent: true
})

const initApp = (cb: () => void) => {
  const container = document.getElementById('pixiContainer')
  if (!app?.view) return
  container?.appendChild(app.view)
  cb()
}

onMounted(() => {
  initApp(() => {
    initPoster()
  })
})

const initPoster = () => {
  const background0 = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/poster-bg-new.png',
    {
      width: 750,
      height: 1444,
      x: 0,
      y: 0
    }
  )

  const image_MF6 = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/poster-text1.png',
    {
      width: 130,
      height: 32,
      x: 66,
      y: 140
    }
  )

  const image_AGU = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/poster-text2.png',
    {
      width: 324,
      height: 32,
      x: 254,
      y: 140
    }
  )

  const head_HNI: PIXI.Container = new PIXI.Container()
  head_HNI.x = 64
  head_HNI.y = 62
  const userHead_HNI = createSprite('https://avatars1.githubusercontent.com/u/24643401', {
    width: 54,
    height: 54
  })
  const graphics_HNI = new PIXI.Graphics()
  graphics_HNI.beginFill(0xe20d3f)
  graphics_HNI.drawCircle(91, 89, 27)
  graphics_HNI.endFill()
  head_HNI.mask = graphics_HNI
  head_HNI.addChild(userHead_HNI)

  const text_WK0 = new PIXI.Text('20', {
    fontSize: 36,
    fill: 'rgba(70, 53, 37, 1)',
    fontWeight: 'bold'
  })
  text_WK0.x = 176
  text_WK0.y = 298

  const text_RMY = new PIXI.Text('解锁景点', {
    fontSize: 24,
    fill: 'rgba(126, 84, 42, 1)',
    fontWeight: 'bold'
  })
  text_RMY.x = 158
  text_RMY.y = 354

  const text_IEJ = new PIXI.Text('7.8', {
    fontSize: 36,
    fill: 'rgba(70, 53, 37, 1)',
    fontWeight: 'bold'
  })
  text_IEJ.x = 534
  text_IEJ.y = 300

  const text_ACW = new PIXI.Text('里程(公里)', {
    fontSize: 24,
    fill: 'rgba(126, 84, 42, 1)',
    fontWeight: 'bold'
  })
  text_ACW.x = 504
  text_ACW.y = 354

  const image_B6B = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/poster-map-bg.png',
    {
      width: 666,
      height: 780,
      x: 42,
      y: 418
    }
  )

  const image_AEE = createSprite('https://www.cchao.cc/images/poster-btm-1.png', {
    width: 668,
    height: 168,
    x: 41,
    y: 1230
  })

  const image_KOD = createSprite('https://www.cchao.cc/images/poster-btm-2.png', {
    width: 214,
    height: 120,
    x: 330,
    y: 1236
  })

  const qrcode_BLM = createSprite(
    'data:image/png;base64,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',
    {
      width: 120,
      height: 120,
      x: 576,
      y: 1234
    }
  )

  const text_3KS = new PIXI.Text('游客', {
    fontSize: 28,
    fill: '#000',
    fontWeight: 'normal'
  })
  text_3KS.x = 136
  text_3KS.y = 70

  const image_PQK = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/poster-text3.png',
    {
      width: 135,
      height: 32,
      x: 66,
      y: 198
    }
  )

  const image_9EG = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/poster-title-hj.png',
    {
      width: 170,
      height: 32,
      x: 218,
      y: 198
    }
  )

  const text_G35 = new PIXI.Text('20', {
    fontSize: 32,
    fill: '#E52E34',
    fontWeight: 'bold'
  })
  text_G35.x = 208
  text_G35.y = 138

  const image_9QR = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-gulou.png',
    {
      width: 19,
      height: 58,
      x: 392,
      y: 444
    }
  )

  const image_EPZ = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-zhonglou.png',
    {
      width: 19,
      height: 59,
      x: 314,
      y: 508
    }
  )

  const image_VBK = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-wanningqiao.png',
    {
      width: 19,
      height: 70,
      x: 416,
      y: 582
    }
  )

  const image_PRH = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-neidajie.png',
    {
      width: 19,
      height: 112,
      x: 296,
      y: 596
    }
  )

  const image_Q4P = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-gugong.png',
    {
      width: 19,
      height: 62,
      x: 440,
      y: 744
    }
  )

  const image_P3D = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-shejitan.png',
    {
      width: 19,
      height: 72,
      x: 162,
      y: 752
    }
  )

  const image_GZS = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-duanmen.png',
    {
      width: 19,
      height: 58,
      x: 310,
      y: 764
    }
  )

  const image_X88 = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-tiananmen.png',
    {
      width: 19,
      height: 72,
      x: 440,
      y: 818
    }
  )

  const image_EVU = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-zhengyangmen.png',
    {
      width: 19,
      height: 78,
      x: 298,
      y: 916
    }
  )

  const image_09K = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-tiananmengc.png',
    {
      width: 19,
      height: 105,
      x: 398,
      y: 880
    }
  )

  const image_IKV = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-qianmen.png',
    {
      width: 19,
      height: 87,
      x: 274,
      y: 1004
    }
  )

  const image_YY9 = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-xiannongtan.png',
    {
      width: 19,
      height: 68,
      x: 194,
      y: 1060
    }
  )

  const image_54T = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-yongdingmen.png',
    {
      width: 38,
      height: 86,
      x: 292,
      y: 1096
    }
  )

  const image_YP9 = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-nandajie.png',
    {
      width: 19,
      height: 102,
      x: 438,
      y: 1058
    }
  )

  const image_03G = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-tiantan.png',
    {
      width: 19,
      height: 60,
      x: 558,
      y: 1064
    }
  )

  const image_4R2 = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-jingshan.png',
    {
      width: 20,
      height: 60,
      x: 408,
      y: 652
    }
  )

  const image_7BQ = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-jinshuiqiao.png',
    {
      width: 24,
      height: 85,
      x: 278,
      y: 850
    }
  )

  const image_9BL = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-taimiao.png',
    {
      width: 19,
      height: 60,
      x: 590,
      y: 760
    }
  )

  const image_P56 = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-ydm.png',
    {
      width: 19,
      height: 67,
      x: 404,
      y: 1118
    }
  )

  const image_E1E = createSprite(
    'https://mat1.gtimg.com/qqcdn/tnewsh5/short-term/centralAxis/tag-waidajie.png',
    {
      width: 19,
      height: 111,
      x: 440,
      y: 550
    }
  )

  app.stage.addChild(
    background0,
    image_MF6,
    image_AGU,
    head_HNI,
    text_WK0,
    text_RMY,
    text_IEJ,
    text_ACW,
    image_B6B,
    image_AEE,
    image_KOD,
    qrcode_BLM,
    text_3KS,
    image_PQK,
    image_9EG,
    text_G35,
    image_9QR,
    image_EPZ,
    image_VBK,
    image_PRH,
    image_Q4P,
    image_P3D,
    image_GZS,
    image_X88,
    image_EVU,
    image_09K,
    image_IKV,
    image_YY9,
    image_54T,
    image_YP9,
    image_03G,
    image_4R2,
    image_7BQ,
    image_9BL,
    image_P56,
    image_E1E
  )
}
</script>

<style>
#pixiContainer {
  position: fixed;
  left: -300%;
  background-color: #fff;
}
</style>


