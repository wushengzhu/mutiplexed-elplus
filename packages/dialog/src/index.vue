<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    :width="width"
    :close-on-click-modal="false"
    :destroy-on-close="destroyOnClose"
  >
    <template #header>
      <slot name="header"></slot>
    </template>
    <slot></slot>
    <template #footer>
      <slot name="footer">
        <el-button @click="close">{{ closeText }}</el-button>
        <el-button class="ml-2" type="primary" @click="confirm" :loading="loading">
          {{ confirmText }}
        </el-button>
      </slot>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  width: {
    type: String,
    default: '45%'
  },
  destroyOnClose: {
    type: Boolean,
    default: false
  },
  confirmText: {
    type: String,
    default: '确定'
  },
  closeText: {
    type: String,
    default: '关闭'
  }
})

const loading = ref(false)
const showLoading = () => (loading.value = true)
const hideLoading = () => (loading.value = false)

const dialogVisible = ref(false)
const open = () => (dialogVisible.value = true)
const close = () => (dialogVisible.value = false)

const emit = defineEmits(['confirm'])
const confirm = () => emit('confirm')

// 向父组件暴露一下方法
defineExpose({
  dialogVisible,
  open,
  close,
  showLoading,
  hideLoading
})
</script>
<style lang="scss" scoped></style>
