<!--
 * @职业: 自由 开发者
 * @Description:
 * @Author: KeHan
 * @Date: 2024-02-19 14:06:04
 * @LastEditTime: 2024-02-19 14:19:09
 * @LastEditors: KeHan
-->
<script setup lang="ts">
import { ref } from 'vue'
const emits = defineEmits(['FatherClick'])
const handelClick = () => {
  emits('FatherClick')
}
const valueTask = ref(null)
const options = [
  {
    label: "Everybody's Got Something to Hide Except Me and My Monkey",
    value: 'song0',
    disabled: true
  },
  {
    label: 'Drive My Car',
    value: 'song1'
  },
  {
    label: 'Norwegian Wood',
    value: 'song2'
  },
  {
    label: "You Won't See",
    value: 'song3',
    disabled: true
  },
  {
    label: 'Nowhere Man',
    value: 'song4'
  },
  {
    label: 'Think For Yourself',
    value: 'song5'
  },
  {
    label: 'The Word',
    value: 'song6'
  },
  {
    label: 'Michelle',
    value: 'song7',
    disabled: true
  },
  {
    label: 'What goes on',
    value: 'song8'
  },
  {
    label: 'Girl',
    value: 'song9'
  },
  {
    label: "I'm looking through you",
    value: 'song10'
  },
  {
    label: 'In My Life',
    value: 'song11'
  },
  {
    label: 'Wait',
    value: 'song12'
  }
]
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
          >Task Info</span
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
        <p style="color: #c4c4c4">当前是任务菜单</p>
      </div>
    </div>
  </div>
  <div class="NeworldscroE" style="width: 100%; height: 540px">
    <div class="accountPmc_Card_P accountPmc_Card_P_task animate__animated animate__flipInX">
      <div class="P_card_hoad">
        <p><span style="color: #c4c4c4">首秀</span></p>
      </div>
      <div>
        <svg
          t="1703569828830"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4287"
          width="34"
          height="34"
        >
          <path
            d="M831.825474 63.940169H191.939717C121.2479 63.940169 63.940169 121.2479 63.940169 191.939717v639.885757C63.940169 902.517291 121.2479 959.825022 191.939717 959.825022h639.885757c70.691817 0 127.999548-57.307731 127.999548-127.999548V191.939717C959.825022 121.2479 902.517291 63.940169 831.825474 63.940169zM895.884854 831.998871A63.835408 63.835408 0 0 1 831.912173 895.884854H192.087827c-17.112123 0-33.270563-6.574639-45.372232-18.67631S127.880338 849.110994 127.880338 831.998871V192.001129A64.236389 64.236389 0 0 1 192.087827 127.880338h639.824346A64.037705 64.037705 0 0 1 895.884854 192.001129v639.997742z"
            fill="#8090c9"
            p-id="4288"
          ></path>
          <path
            d="M791.998335 351.851551h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM791.998335 607.973471h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM344.001722 527.997686c-61.855792 0-111.985607 50.144265-111.985607 111.985606s50.144265 111.985607 111.985607 111.985607 111.985607-50.144265 111.985606-111.985607-50.129815-111.985607-111.985606-111.985606z m33.982213 145.982269a48.045438 48.045438 0 1 1 14.088511-33.982213 47.745605 47.745605 0 0 1-14.088511 33.985826zM417.395643 297.394035L311.999125 402.78694 270.6078 361.392003a31.970084 31.970084 0 1 0-45.213286 45.213285l63.997968 64.001581a31.970084 31.970084 0 0 0 45.213286 0l127.999548-127.999549a31.970084 31.970084 0 0 0-45.209673-45.213285z"
            fill="#8090c9"
            p-id="4289"
          ></path>
        </svg>
      </div>
      <div style="margin-top: 5px">
        <p><span style="color: #c4c4c4">任务状态</span></p>
        <n-select v-model:value="valueTask" :options="options" />
      </div>
    </div>
    <div class="accountPmc_Card_P accountPmc_Card_P_task animate__animated animate__flipInX">
      <div class="P_card_hoad">
        <p><span style="color: #c4c4c4">首秀</span></p>
      </div>
      <div>
        <svg
          t="1703569828830"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4287"
          width="34"
          height="34"
        >
          <path
            d="M831.825474 63.940169H191.939717C121.2479 63.940169 63.940169 121.2479 63.940169 191.939717v639.885757C63.940169 902.517291 121.2479 959.825022 191.939717 959.825022h639.885757c70.691817 0 127.999548-57.307731 127.999548-127.999548V191.939717C959.825022 121.2479 902.517291 63.940169 831.825474 63.940169zM895.884854 831.998871A63.835408 63.835408 0 0 1 831.912173 895.884854H192.087827c-17.112123 0-33.270563-6.574639-45.372232-18.67631S127.880338 849.110994 127.880338 831.998871V192.001129A64.236389 64.236389 0 0 1 192.087827 127.880338h639.824346A64.037705 64.037705 0 0 1 895.884854 192.001129v639.997742z"
            fill="#8090c9"
            p-id="4288"
          ></path>
          <path
            d="M791.998335 351.851551h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM791.998335 607.973471h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM344.001722 527.997686c-61.855792 0-111.985607 50.144265-111.985607 111.985606s50.144265 111.985607 111.985607 111.985607 111.985607-50.144265 111.985606-111.985607-50.129815-111.985607-111.985606-111.985606z m33.982213 145.982269a48.045438 48.045438 0 1 1 14.088511-33.982213 47.745605 47.745605 0 0 1-14.088511 33.985826zM417.395643 297.394035L311.999125 402.78694 270.6078 361.392003a31.970084 31.970084 0 1 0-45.213286 45.213285l63.997968 64.001581a31.970084 31.970084 0 0 0 45.213286 0l127.999548-127.999549a31.970084 31.970084 0 0 0-45.209673-45.213285z"
            fill="#8090c9"
            p-id="4289"
          ></path>
        </svg>
      </div>
      <div style="margin-top: 5px">
        <p><span style="color: #c4c4c4">任务状态</span></p>
        <n-select v-model:value="valueTask" :options="options" />
      </div>
    </div>
    <div class="accountPmc_Card_P accountPmc_Card_P_task animate__animated animate__flipInX">
      <div class="P_card_hoad">
        <p><span style="color: #c4c4c4">首秀</span></p>
      </div>
      <div>
        <svg
          t="1703569828830"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4287"
          width="34"
          height="34"
        >
          <path
            d="M831.825474 63.940169H191.939717C121.2479 63.940169 63.940169 121.2479 63.940169 191.939717v639.885757C63.940169 902.517291 121.2479 959.825022 191.939717 959.825022h639.885757c70.691817 0 127.999548-57.307731 127.999548-127.999548V191.939717C959.825022 121.2479 902.517291 63.940169 831.825474 63.940169zM895.884854 831.998871A63.835408 63.835408 0 0 1 831.912173 895.884854H192.087827c-17.112123 0-33.270563-6.574639-45.372232-18.67631S127.880338 849.110994 127.880338 831.998871V192.001129A64.236389 64.236389 0 0 1 192.087827 127.880338h639.824346A64.037705 64.037705 0 0 1 895.884854 192.001129v639.997742z"
            fill="#8090c9"
            p-id="4288"
          ></path>
          <path
            d="M791.998335 351.851551h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM791.998335 607.973471h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM344.001722 527.997686c-61.855792 0-111.985607 50.144265-111.985607 111.985606s50.144265 111.985607 111.985607 111.985607 111.985607-50.144265 111.985606-111.985607-50.129815-111.985607-111.985606-111.985606z m33.982213 145.982269a48.045438 48.045438 0 1 1 14.088511-33.982213 47.745605 47.745605 0 0 1-14.088511 33.985826zM417.395643 297.394035L311.999125 402.78694 270.6078 361.392003a31.970084 31.970084 0 1 0-45.213286 45.213285l63.997968 64.001581a31.970084 31.970084 0 0 0 45.213286 0l127.999548-127.999549a31.970084 31.970084 0 0 0-45.209673-45.213285z"
            fill="#8090c9"
            p-id="4289"
          ></path>
        </svg>
      </div>
      <div style="margin-top: 5px">
        <p><span style="color: #c4c4c4">任务状态</span></p>
        <n-select v-model:value="valueTask" :options="options" />
      </div>
    </div>
    <div class="accountPmc_Card_P accountPmc_Card_P_task animate__animated animate__flipInX">
      <div class="P_card_hoad">
        <p><span style="color: #c4c4c4">首秀</span></p>
      </div>
      <div>
        <svg
          t="1703569828830"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4287"
          width="34"
          height="34"
        >
          <path
            d="M831.825474 63.940169H191.939717C121.2479 63.940169 63.940169 121.2479 63.940169 191.939717v639.885757C63.940169 902.517291 121.2479 959.825022 191.939717 959.825022h639.885757c70.691817 0 127.999548-57.307731 127.999548-127.999548V191.939717C959.825022 121.2479 902.517291 63.940169 831.825474 63.940169zM895.884854 831.998871A63.835408 63.835408 0 0 1 831.912173 895.884854H192.087827c-17.112123 0-33.270563-6.574639-45.372232-18.67631S127.880338 849.110994 127.880338 831.998871V192.001129A64.236389 64.236389 0 0 1 192.087827 127.880338h639.824346A64.037705 64.037705 0 0 1 895.884854 192.001129v639.997742z"
            fill="#8090c9"
            p-id="4288"
          ></path>
          <path
            d="M791.998335 351.851551h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM791.998335 607.973471h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM344.001722 527.997686c-61.855792 0-111.985607 50.144265-111.985607 111.985606s50.144265 111.985607 111.985607 111.985607 111.985607-50.144265 111.985606-111.985607-50.129815-111.985607-111.985606-111.985606z m33.982213 145.982269a48.045438 48.045438 0 1 1 14.088511-33.982213 47.745605 47.745605 0 0 1-14.088511 33.985826zM417.395643 297.394035L311.999125 402.78694 270.6078 361.392003a31.970084 31.970084 0 1 0-45.213286 45.213285l63.997968 64.001581a31.970084 31.970084 0 0 0 45.213286 0l127.999548-127.999549a31.970084 31.970084 0 0 0-45.209673-45.213285z"
            fill="#8090c9"
            p-id="4289"
          ></path>
        </svg>
      </div>
      <div style="margin-top: 5px">
        <p><span style="color: #c4c4c4">任务状态</span></p>
        <n-select v-model:value="valueTask" :options="options" />
      </div>
    </div>
    <div class="accountPmc_Card_P accountPmc_Card_P_task animate__animated animate__flipInX">
      <div class="P_card_hoad">
        <p><span style="color: #c4c4c4">首秀</span></p>
      </div>
      <div>
        <svg
          t="1703569828830"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="4287"
          width="34"
          height="34"
        >
          <path
            d="M831.825474 63.940169H191.939717C121.2479 63.940169 63.940169 121.2479 63.940169 191.939717v639.885757C63.940169 902.517291 121.2479 959.825022 191.939717 959.825022h639.885757c70.691817 0 127.999548-57.307731 127.999548-127.999548V191.939717C959.825022 121.2479 902.517291 63.940169 831.825474 63.940169zM895.884854 831.998871A63.835408 63.835408 0 0 1 831.912173 895.884854H192.087827c-17.112123 0-33.270563-6.574639-45.372232-18.67631S127.880338 849.110994 127.880338 831.998871V192.001129A64.236389 64.236389 0 0 1 192.087827 127.880338h639.824346A64.037705 64.037705 0 0 1 895.884854 192.001129v639.997742z"
            fill="#8090c9"
            p-id="4288"
          ></path>
          <path
            d="M791.998335 351.851551h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM791.998335 607.973471h-255.999097a31.970084 31.970084 0 0 0 0 63.940169h255.999097a31.970084 31.970084 0 0 0 0-63.940169zM344.001722 527.997686c-61.855792 0-111.985607 50.144265-111.985607 111.985606s50.144265 111.985607 111.985607 111.985607 111.985607-50.144265 111.985606-111.985607-50.129815-111.985607-111.985606-111.985606z m33.982213 145.982269a48.045438 48.045438 0 1 1 14.088511-33.982213 47.745605 47.745605 0 0 1-14.088511 33.985826zM417.395643 297.394035L311.999125 402.78694 270.6078 361.392003a31.970084 31.970084 0 1 0-45.213286 45.213285l63.997968 64.001581a31.970084 31.970084 0 0 0 45.213286 0l127.999548-127.999549a31.970084 31.970084 0 0 0-45.209673-45.213285z"
            fill="#8090c9"
            p-id="4289"
          ></path>
        </svg>
      </div>
      <div style="margin-top: 5px">
        <p><span style="color: #c4c4c4">任务状态</span></p>
        <n-select v-model:value="valueTask" :options="options" />
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
  width: 325px;
  height: 150px;
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
