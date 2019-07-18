<template>
    <el-card class="box-card">
        <div
          slot="header"
          class="clearfix"
        >
        <span>APP1</span>
        <el-button
            style="float: right; padding: 3px 0"
            type="text"
        >
            操作按钮
        </el-button>
      </div>
    </el-card>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.box-card {
  width: 300px;
}
</style>
