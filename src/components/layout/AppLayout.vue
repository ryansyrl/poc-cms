<script setup lang="ts">
import Sidebar from './Sidebar.vue'
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-aside>
          <Sidebar />
        </el-aside>
        <el-main><slot /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
  .el-aside {
  width: max-content !important;
  min-height: 100vh;
}
</style>
