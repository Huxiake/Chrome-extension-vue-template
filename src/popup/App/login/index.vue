<template>
    <div class="login-container">
        <el-row type="flex" justify="start">
            <el-button icon="el-icon-back" style="font-size:20px;border:0px" @click="$router.go(-1)" />
        </el-row>
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

            <div class="title-container">
                <h3 class="title">
                    Login Form
                </h3>
            </div>

            <el-form-item prop="username">
                <span class="svg-container">
                <svg-icon icon-class="user" />
                </span>
                <el-input
                    ref="username"
                    v-model="loginForm.username"
                    placeholder="Username"
                    name="username"
                    type="text"
                    tabindex="1"
                    auto-complete="on"
                />
            </el-form-item>

            <el-form-item prop="password">
                <span class="svg-container">
                <svg-icon icon-class="password" />
                </span>
                <el-input
                    :key="passwordType"
                    ref="password"
                    v-model="loginForm.password"
                    :type="passwordType"
                    placeholder="Password"
                    name="password"
                    tabindex="2"
                    auto-complete="on"
                    @keyup.enter.native="handleLogin"
                />
                <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
                </span>
            </el-form-item>

            <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" icon="el-icon-s-promotion" @click.native.prevent="handleLogin" />

            <div class="tips">
                <span style="margin-right:20px;">username: admin</span>
                <span> password: any</span>
            </div>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginForm: {}
        }
    },
    methods: {
        test() {
            var value = '123'
            // chrome.storage.local.set({key: value}, () => {
            //     console.log('do some storage')
            // })
            // chrome.storage.sync.set({key: value}, function() {
            //     console.log('Value is set to ' + value);
            // });
            chrome.storage.sync.get(['key'], function(result) {
                console.log('result', result)
                console.log('Value currently is ' + result.key);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-container {
        width: 270px;
        height: 300px;
        min-height: 100%;
        overflow: hidden;
    }
</style>
