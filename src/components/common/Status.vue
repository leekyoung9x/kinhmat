<template>
  <div class="status" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    styles: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.status {
  padding: 10px;
  font-size: 11px;
  font-weight: normal;
  border-radius: 4px;
  text-align: center;
}
</style>
