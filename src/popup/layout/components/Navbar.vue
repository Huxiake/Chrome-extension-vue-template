<template>
    <div class="navbar">
        <el-menu 
            :default-active="activeMenu"
            mode="horizontal"
            router
            active-text-color="#f2c666"
            background-color="#6683f2"
            text-color="#f4f4f4"
            class="menu"
        >
            <el-menu-item index="/work/index">
                工具
            </el-menu-item>
            <el-menu-item index="/shop/index">
                店铺
            </el-menu-item>
            <el-menu-item index="/mine/index">
                我的
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    computed: {
        activeMenu() {
            const route = this.$route
            const { meta, path } = route
            return path
        }
    },
    created() {
        console.log(this.$route)
    }
}
</script>

<style lang="scss" scoped>
.navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background-color: #6683f2;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    .menu {
        height: 50px;
        margin: 0 30px;
        .el-menu-item {
            height: 50px;
            line-height: 50px;
            font-size: 15px;
        }
    }
}
</style>

<style lang="scss">
    .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: 3px solid #f2c666;
        border-bottom-color: #f2c666;
    }
</style>
