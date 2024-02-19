<!--
 * @职业: 自由 开发者
 * @Description:
 * @Author: KeHan
 * @Date: 2024-02-05 15:04:44
 * @LastEditTime: 2024-02-06 15:40:41
 * @LastEditors: KeHan
-->
<script setup lang="ts">
// import Versions from './components/Versions.vue'
import Layout from './components/Layout.vue'
import { darkTheme } from 'naive-ui'
// const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-message-provider>
      <Layout></Layout>
    </n-message-provider>
  </n-config-provider>
</template>
<style>
.n-config-provider {
  width: 100% !important;
}
</style>
