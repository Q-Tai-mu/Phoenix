<!--
 * @职业: 自由 开发者
 * @Description:
 * @Author: KeHan
 * @Date: 2024-02-05 15:04:44
 * @LastEditTime: 2024-02-06 11:27:12
 * @LastEditors: KeHan
-->
<script setup lang="ts">
import { reactive } from 'vue'

const versions = reactive({ ...window.electron.process.versions })
</script>

<template>
  <ul class="versions">
    <li class="electron-version">Electron v{{ versions.electron }}</li>
    <li class="chrome-version">Chromium v{{ versions.chrome }}</li>
    <li class="node-version">Node v{{ versions.node }}</li>
  </ul>
</template>
