<script lang="ts" setup>
import {
  ArrowLeftBold,
  ArrowRightBold,
  BrushFilled,
  Menu as IconMenu,
  QuestionFilled,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isCollapse = ref(false)
function handleMenu() {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <el-menu
    :default-active="activePath"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
  >
    <div
      class="menu-toggle"
      @click="handleMenu"
    >
      <el-icon>
        <ArrowRightBold v-if="isCollapse" />
        <ArrowLeftBold v-else />
      </el-icon>
    </div>
    <RouterLink to="/">
      <el-menu-item index="1">
        <el-icon><IconMenu /></el-icon>
        <template #title>
          Dashboard
        </template>
      </el-menu-item>
    </RouterLink>
    <RouterLink to="/blog/list">
      <el-menu-item index="2">
        <el-icon><BrushFilled /></el-icon>
        <template #title>
          Blog
        </template>
      </el-menu-item>
    </RouterLink>
    <RouterLink to="/faq/list">
      <el-menu-item index="3">
        <el-icon><QuestionFilled /></el-icon>
        <template #title>
          Faq
        </template>
      </el-menu-item>
    </RouterLink>
  </el-menu>
</template>

<style scoped>
.el-menu .router-link-active.router-link-exact-active li {
  color: #409eff !important;
}
.el-menu a {
  text-decoration: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}

.el-menu--collapse {
  height: 100%;
}

.menu-toggle {
  background: #409eff;
  color: white;
  text-align: center;
  padding: 12px;
}
</style>
