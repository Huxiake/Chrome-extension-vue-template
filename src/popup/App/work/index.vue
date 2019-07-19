<template>
    <div class="app-container">
        <el-row class="row" :gutter="12">
            <el-col class="col" :span="8">
                <el-card class="card" :body-style="{ padding: '10 15;' }">
                    <img src="../../../assets/icon/jisuan.png" class="image">
                    <div @click="handleItem('/calc')">价格计算</div>
                </el-card>
            </el-col>
            <el-col class="col" :span="8">
                <el-card class="card" :body-style="{ padding: '10 15;' }">
                    <img src="../../../assets/icon/zhaokuan.png" class="image">
                    <div @click="handleItem('/seacher')">查款助手</div>
                </el-card>
            </el-col>
            <el-col class="col" :span="8">
                <el-card class="card">
                    132
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    computed: {
        routes() {
            console.log(this.$router.options.routes)
            return this.$router.options.routes
        }
    },
    handleItem(path) {
        this.$router.push(path)
    }
}
</script>


<style lang="scss" scoped>
    .row {
        .col {
            .card {
                width: 80px;
                height: 80px;
                .image {
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
</style>

<style lang="scss">
    .el-card__body {
        padding: 10px 15px;
    }
</style>