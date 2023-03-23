<template>
  <img class="background_C1C"
       src="https://new.inews.gtimg.com/tnews/940fc8aa/b4fa/940fc8aa-b4fa-4a62-8a2b-8e724778db70.jpg">
  <div class="text_5AH">看着我的眼睛 获得英雄卡</div>
  <div class="text_9T6">NO. 2023012345678910</div>
  <img class="head_E0W"
       src="https://bizaladdin-image.baidu.com/0/pic/1080140929_-251358729_-1837083577.jpg">
  <div class="text_UCF">长按二维码</div>
  <div class="text_A7H">揭秘你的冰雪英雄</div>
  <img class="qrcode_QSV"
       src="data:image/png;base64,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">
</template>

<style>
.background_C1C {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 750px;
  height: 1334px;
}
.text_5AH {
  position: absolute;
  width: 316px;
  left: 257px;
  top: 697px;
  color: rgba(255, 220, 165, 1);
  font-size: 28px;
  font-weight: normal;
  font-style: normal;
}
.text_9T6 {
  position: absolute;
  width: 262px;
  left: 8px;
  top: 10px;
  color: rgba(255, 220, 165, 1);
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
}
.head_E0W {
  position: absolute;
  left: 197px;
  top: 695px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
}
.text_UCF {
  position: absolute;
  width: 120px;
  left: 451px;
  top: 1230px;
  color: rgba(255, 220, 165, 1);
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
}
.text_A7H {
  position: absolute;
  width: 96px;
  left: 382px;
  top: 1270px;
  color: rgba(255, 220, 165, 1);
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
}
.qrcode_QSV {
  position: absolute;
  left: 610px;
  top: 1194px;
  width: 110px;
  height: 110px;
}
</style>
          