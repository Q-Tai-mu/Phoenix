<!--
 * @职业: 自由 开发者
 * @Description:
 * @Author: KeHan
 * @Date: 2024-02-19 13:43:43
 * @LastEditTime: 2024-02-19 14:04:31
 * @LastEditors: KeHan
-->
<script setup lang="ts">
const emits = defineEmits(['FatherClick'])
const handelClick = () => {
  emits('FatherClick')
}
</script>

<template>
  <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__pulse">
    <div
      class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
      style="
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2px;
        height: 45px !important;
      "
    >
      <div>
        <svg
          t="1707200352412"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6642"
          width="24"
          height="24"
        >
          <path
            d="M896 337.066667l123.733333-25.6-123.733333 136.533333z"
            fill="#4B369D"
            p-id="6643"
          ></path>
          <path
            d="M409.6 580.266667s187.733333-268.8 123.733333-328.533334-106.666667-34.133333-81.066666-64c25.6-29.866667 209.066667-76.8 405.333333 38.4s-59.733333 486.4-179.2 571.733334-358.4 196.266667-516.266667 170.666666-89.6-89.6-76.8-89.6 209.066667-98.133333 324.266667-298.666666z"
            fill="#A7ADFF"
            p-id="6644"
          ></path>
          <path
            d="M392.533333 332.8s-157.866667-42.666667-204.8-85.333333-85.333333-102.4-145.066666-93.866667C-25.6 162.133333 12.8 349.866667 106.666667 384s102.4 38.4 72.533333 72.533333-51.2 81.066667-8.533333 85.333334 51.2 4.266667 59.733333 51.2c4.266667 46.933333 76.8 21.333333 93.866667 38.4s51.2 110.933333 162.133333 76.8c106.666667-34.133333 162.133333-93.866667 157.866667-136.533334s-42.666667-153.6-251.733334-238.933333z"
            fill="#978CFF"
            p-id="6645"
          ></path>
          <path
            d="M776.533333 311.466667m-29.866666 0a29.866667 29.866667 0 1 0 59.733333 0 29.866667 29.866667 0 1 0-59.733333 0Z"
            fill="#4B369D"
            p-id="6646"
          ></path>
        </svg>
      </div>
      <div>
        <span style="font-style: oblique; font-weight: bold; font-size: 24px; font-family: fantasy"
          >merchant Info</span
        >
      </div>
    </div>
  </div>
  <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
    <div
      class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
      style="
        justify-content: flex-start;
        height: 30px !important;
        padding: 5px;
        margin: 3px;
        font-size: 12px;
      "
      @click="handelClick"
    >
      <div style="display: flex; align-items: flex-end; justify-content: space-between">
        <p style="color: #c4c4c4">《返回上一级</p>
        <p style="color: #c4c4c4">当前是商家菜单</p>
      </div>
    </div>
  </div>
  <div class="NeworldscroE" style="width: 100%; height: 540px">
    <div class="accountPmc_Card accountPmc_Card_layout">
      <div class="accountPmc_Card_P merchant_accountPmc_Card_P animate__animated animate__flipInX">
        <div class="P_card_hoad">
          <p><span style="color: #c4c4c4">Prapor</span></p>
        </div>
        <div>
          <img src="../assets/59b91ca086f77469a81232e4.png" />
          <!-- <img src="../assets/59b91cab86f77469aa5343ca.png" /> -->
        </div>
        <div style="margin-top: 5px">
          <p><span style="color: #c4c4c4">商人等级</span></p>
          <p><n-input-number :max="4" :min="1"></n-input-number><br /></p>
          <p><span style="color: #c4c4c4">出售总量</span></p>
          <p><n-input></n-input><br /></p>
          <p><span style="color: #c4c4c4">好感度</span></p>
          <p><n-input-number step="0.01"></n-input-number><br /></p>
        </div>
      </div>
      <div class="accountPmc_Card_P merchant_accountPmc_Card_P animate__animated animate__flipInX">
        <div class="P_card_hoad">
          <p><span style="color: #c4c4c4">Therapist</span></p>
        </div>
        <div>
          <img src="../assets/59b91cab86f77469aa5343ca.png" />
          <!-- <img src="../assets/59b91cab86f77469aa5343ca.png" /> -->
        </div>
        <div style="margin-top: 5px">
          <p><span style="color: #c4c4c4">商人等级</span></p>
          <p><n-input-number :max="4" :min="1"></n-input-number><br /></p>
          <p><span style="color: #c4c4c4">出售总量</span></p>
          <p><n-input></n-input><br /></p>
          <p><span style="color: #c4c4c4">好感度</span></p>
          <p><n-input-number step="0.01"></n-input-number><br /></p>
        </div>
      </div>
      <div class="accountPmc_Card_P merchant_accountPmc_Card_P animate__animated animate__flipInX">
        <div class="P_card_hoad">
          <p><span style="color: #c4c4c4">Fence</span></p>
        </div>
        <div>
          <img src="../assets/579dc571d53a0658a154fbec.png" />
        </div>
        <div style="margin-top: 5px">
          <p><span style="color: #c4c4c4">商人等级</span></p>
          <p><n-input-number :max="4" :min="1"></n-input-number><br /></p>
          <p><span style="color: #c4c4c4">出售总量</span></p>
          <p><n-input></n-input><br /></p>
          <p><span style="color: #c4c4c4">好感度</span></p>
          <p><n-input-number step="0.01"></n-input-number><br /></p>
        </div>
      </div>
      <div class="accountPmc_Card_P merchant_accountPmc_Card_P animate__animated animate__flipInX">
        <div class="P_card_hoad">
          <p><span style="color: #c4c4c4">Peacekeeper</span></p>
        </div>
        <div>
          <img src="../assets/59b91cbd86f77469aa5343cb.png" />
        </div>
        <div style="margin-top: 5px">
          <p><span style="color: #c4c4c4">商人等级</span></p>
          <p><n-input-number :max="4" :min="1"></n-input-number><br /></p>
          <p><span style="color: #c4c4c4">出售总量</span></p>
          <p><n-input></n-input><br /></p>
          <p><span style="color: #c4c4c4">好感度</span></p>
          <p><n-input-number step="0.01"></n-input-number><br /></p>
        </div>
      </div>
      <div class="accountPmc_Card_P merchant_accountPmc_Card_P animate__animated animate__flipInX">
        <div class="P_card_hoad">
          <p><span style="color: #c4c4c4">Skier</span></p>
        </div>
        <div>
          <img src="../assets/59b91cb486f77469a81232e5.png" />
        </div>
        <div style="margin-top: 5px">
          <p><span style="color: #c4c4c4">商人等级</span></p>
          <p><n-input-number :max="4" :min="1"></n-input-number><br /></p>
          <p><span style="color: #c4c4c4">出售总量</span></p>
          <p><n-input></n-input><br /></p>
          <p><span style="color: #c4c4c4">好感度</span></p>
          <p><n-input-number step="0.01"></n-input-number><br /></p>
        </div>
      </div>
      <div class="accountPmc_Card_P merchant_accountPmc_Card_P animate__animated animate__flipInX">
        <div class="P_card_hoad">
          <p><span style="color: #c4c4c4">Mechanic</span></p>
        </div>
        <div>
          <img src="../assets/5a7c2ebb86f7746e324a06ab.png" />
        </div>
        <div style="margin-top: 5px">
          <p><span style="color: #c4c4c4">商人等级</span></p>
          <p><n-input-number :max="4" :min="1"></n-input-number><br /></p>
          <p><span style="color: #c4c4c4">出售总量</span></p>
          <p><n-input></n-input><br /></p>
          <p><span style="color: #c4c4c4">好感度</span></p>
          <p><n-input-number step="0.01"></n-input-number><br /></p>
        </div>
      </div>
      <div class="accountPmc_Card_P merchant_accountPmc_Card_P animate__animated animate__flipInX">
        <div class="P_card_hoad">
          <p><span style="color: #c4c4c4">Jaeger</span></p>
        </div>
        <div>
          <img src="../assets/5c06531a86f7746319710e1b.png" />
        </div>
        <div style="margin-top: 5px">
          <p><span style="color: #c4c4c4">商人等级</span></p>
          <p><n-input-number :max="4" :min="1"></n-input-number><br /></p>
          <p><span style="color: #c4c4c4">出售总量</span></p>
          <p><n-input></n-input><br /></p>
          <p><span style="color: #c4c4c4">好感度</span></p>
          <p><n-input-number step="0.01"></n-input-number><br /></p>
        </div>
      </div>
      <div class="accountPmc_Card_P merchant_accountPmc_Card_P animate__animated animate__flipInX">
        <div class="P_card_hoad">
          <p><span style="color: #c4c4c4">Lightkeeper</span></p>
        </div>
        <div>
          <img src="../assets/638f541a29ffd1183d187f57.png" />
        </div>
        <div style="margin-top: 5px">
          <p><span style="color: #c4c4c4">商人等级</span></p>
          <p><n-input-number :max="4" :min="1"></n-input-number><br /></p>
          <p><span style="color: #c4c4c4">出售总量</span></p>
          <p><n-input></n-input><br /></p>
          <p><span style="color: #c4c4c4">好感度</span></p>
          <p><n-input-number step="0.01"></n-input-number><br /></p>
        </div>
      </div>
      <div class="accountPmc_Card_P merchant_accountPmc_Card_P animate__animated animate__flipInX">
        <div class="P_card_hoad">
          <p><span style="color: #c4c4c4">Ragman</span></p>
        </div>
        <div>
          <img src="../assets/5ac3b86a86f77461491d1ad8.png" />
        </div>
        <div style="margin-top: 5px">
          <p><span style="color: #c4c4c4">商人等级</span></p>
          <p><n-input-number :max="4" :min="1"></n-input-number><br /></p>
          <p><span style="color: #c4c4c4">出售总量</span></p>
          <p><n-input></n-input><br /></p>
          <p><span style="color: #c4c4c4">好感度</span></p>
          <p><n-input-number step="0.01"></n-input-number><br /></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.NeworldscroE {
  /* height: 430px; */
  overflow-y: auto;
}

.NeworldscroE::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0px;
  /*高宽分别对应横竖滚动条的尺寸*/
  height: 0px;
}

.NeworldscroE::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 0px;
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  background: #ebeef0;
}

.NeworldscroE::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(235, 238, 240, 0.2);
  border-radius: 0px;
  background: #f1f6fa;
}
.accountPmc_Card_layout {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  /* margin: 0 10px; */
}
.accountPmc_Card_P {
  width: 230px;
  height: 380px;
  background-color: rgb(39, 39, 39);
  border: 1px solid rgb(28, 28, 28);
  border-radius: 5px;
  margin: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  flex: 1 1 auto;
  padding: 10px;
  text-align: center;
  transition:
    transform 0.3s,
    box-shadow 0.3s !important;
}
.accountPmc_Card_P:hover {
  /* box-shadow: 0 16px 32px 0 rgba(48, 55, 66, 0.15); */

  /* transition-delay: 0s !important; */
  /* border: 1px solid #78a4fa; */

  /* transform: translateY(-10px)  !important; */
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  /* animation: sparkle 0.5s infinite; */
}
.setup_button_height {
  height: 55px !important;
}
.accountPmc_Card_P_Hideout {
  height: 40px !important;
}
.accountPmc_Card_row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
.accountPmc_Card {
  margin-top: 3px;
  flex: 1 1 auto;
}
.div2_Layout {
  flex: 1 0 100%;
  padding: 5px;
  background-color: #1c1c1c;
  border-top-left-radius: 5px;
  color: #eaeaea;
}
</style>
