<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<script setup lang="ts">
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import Account from '../components/Account.vue'
import Merchant from '../components/merchant.vue'
import Task from '../components/Task.vue'
import Hideout from '../components/Hideout.vue'
import Skill from '../components/Skill.vue'
import Weapon from '../components/weapon.vue'
import articleX from '../components/article.vue'
import warehouse from '../components/warehouse.vue'
import clothing from '../components/clothing.vue'
import { ChevronForward as ChevronForward } from '@vicons/ionicons5'
const message = useMessage()

const viewSite = ref('v1')
/**
 * @description 特权执行
 */
function privilegeSuccess(): void {
  viewSite.value = 'v2'
  message.success('个人信息菜单', {
    keepAliveOnHover: true
  })
}
/**
 * @description 商家
 */
function privilegeSuccessShang(): void {
  viewSite.value = 'v3'
  message.success('商家信息菜单', {
    keepAliveOnHover: true
  })
}
/**
 * @description 任务信息菜单
 */
function privilegeSuccessTask(): void {
  viewSite.value = 'v4'
  message.success('任务信息菜单', {
    keepAliveOnHover: true
  })
}
/**
 * @description 藏生处信息菜单
 */
function privilegeSuccessHideout(): void {
  viewSite.value = 'v5'
  message.success('藏生处信息菜单', {
    keepAliveOnHover: true
  })
}
/**
 * @description 技能菜单
 */
function privilegeSuccessSkill(): void {
  viewSite.value = 'v6'
  message.success('技能菜单', {
    keepAliveOnHover: true
  })
}
/**
 * @description 技能菜单
 */
function privilegeSuccessWeapon(): void {
  viewSite.value = 'v7'
  message.success('武器菜单', {
    keepAliveOnHover: true
  })
}
/**
 * @description 物品检视菜单
 */
function privilegeSuccessArticle(): void {
  viewSite.value = 'v8'
  message.success('物品检视菜单', {
    keepAliveOnHover: true
  })
}
/**
 * @description 仓库菜单
 */
function privilegeSuccessWarehouse(): void {
  viewSite.value = 'v9'
  message.success('仓库菜单', {
    keepAliveOnHover: true
  })
}
/**
 * @description 衣服菜单
 */
function privilegeSuccessClothing(): void {
  viewSite.value = 'v10'
  message.success('衣服菜单', {
    keepAliveOnHover: true
  })
}
//显示主页
const FatherClick = () => {
  viewSite.value = 'v1'

  console.log('@父组件----我被调用了')
}
</script>

<template>
  <Account v-if="viewSite == 'v2'" @FatherClick="FatherClick"></Account>
  <Merchant v-if="viewSite == 'v3'" @FatherClick="FatherClick"></Merchant>
  <Task v-if="viewSite == 'v4'" @FatherClick="FatherClick"> </Task>
  <Hideout v-if="viewSite == 'v5'" @FatherClick="FatherClick"></Hideout>
  <Skill v-if="viewSite == 'v6'" @FatherClick="FatherClick"></Skill>
  <Weapon v-if="viewSite == 'v7'" @FatherClick="FatherClick"></Weapon>
  <articleX v-if="viewSite == 'v8'" @FatherClick="FatherClick"></articleX>
  <warehouse v-if="viewSite == 'v9'" @FatherClick="FatherClick"></warehouse>
  <clothing v-if="viewSite == 'v10'" @FatherClick="FatherClick"></clothing>
  <div class="div2_Layout" v-if="viewSite == 'v1'">
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
          <span
            style="font-style: oblique; font-weight: bold; font-size: 24px; font-family: fantasy"
            >Phoenix</span
          >
        </div>
      </div>
    </div>
    <div class="NeworldscroE" style="width: 100%; height: 580px">
      <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
        <div
          class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
          style="justify-content: flex-start"
          @click="privilegeSuccess"
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between">
            <p style="color: #c4c4c4">角色信息</p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <chevron-forward />
              </n-icon>
            </n-button>
          </div>
        </div>
      </div>
      <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
        <div
          class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
          style="justify-content: flex-start"
          @click="privilegeSuccessShang"
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between">
            <p style="color: #c4c4c4">商人信息</p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <chevron-forward />
              </n-icon>
            </n-button>
          </div>
        </div>
      </div>
      <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
        <div
          class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
          style="justify-content: flex-start"
          @click="privilegeSuccessTask"
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between">
            <p style="color: #c4c4c4">任务</p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <chevron-forward />
              </n-icon>
            </n-button>
          </div>
        </div>
      </div>
      <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
        <div
          class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
          style="justify-content: flex-start"
          @click="privilegeSuccessHideout"
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between">
            <p style="color: #c4c4c4">藏身处</p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <chevron-forward />
              </n-icon>
            </n-button>
          </div>
        </div>
      </div>
      <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
        <div
          class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
          style="justify-content: flex-start"
          @click="privilegeSuccessSkill"
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between">
            <p style="color: #c4c4c4">角色技能</p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <chevron-forward />
              </n-icon>
            </n-button>
          </div>
        </div>
      </div>
      <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
        <div
          class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
          style="justify-content: flex-start"
          @click="privilegeSuccessWeapon"
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between">
            <p style="color: #c4c4c4">武器熟练度</p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <chevron-forward />
              </n-icon>
            </n-button>
          </div>
        </div>
      </div>
      <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
        <div
          class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
          style="justify-content: flex-start"
          @click="privilegeSuccessArticle"
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between">
            <p style="color: #c4c4c4">检视物品</p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <chevron-forward />
              </n-icon>
            </n-button>
          </div>
        </div>
      </div>
      <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
        <div
          class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
          style="justify-content: flex-start"
          @click="privilegeSuccessWarehouse"
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between">
            <p style="color: #c4c4c4">仓库库存</p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <chevron-forward />
              </n-icon>
            </n-button>
          </div>
        </div>
      </div>
      <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
        <div
          class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
          style="justify-content: flex-start"
          @click="privilegeSuccessClothing"
        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between">
            <p style="color: #c4c4c4">角色衣服</p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <chevron-forward />
              </n-icon>
            </n-button>
          </div>
        </div>
      </div>
      <div class="accountPmc_Card accountPmc_Card_row animate__animated animate__backInLeft">
        <div
          class="accountPmc_Card_P accountPmc_Card_P_Hideout setup_button_height"
          style="justify-content: flex-start"

        >
          <div style="display: flex; align-items: flex-start; justify-content: space-between">
            <p style="color: #c4c4c4">武器预设定</p>
            <n-button text style="font-size: 24px">
              <n-icon>
                <chevron-forward />
              </n-icon>
            </n-button>
          </div>
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
.accountPmc_Card_P {
  width: 230px;
  height: 220px;
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
//Preprocessor dependency "less" not found. Did you install it? Try `npm install -D less`.
