<template>
    <div class="app-wrapper">
        <div class="main-container">
            <div class="fixed-header">
                <navbar />
            </div>
            <app-main />
        </div>
    </div>
</template>

<script>
import { Navbar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    AppMain
  }
}
</script>

<style lang="scss">
  @import "@/styles/mixin.scss";

    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        padding: 0;
        .main-container {
            height: 300px;
            min-height: 100%;
            transition: margin-left .28s;
            position: relative;
        }
    }
    .fixed-header {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 9;
        width: 100%;
        transition: width 0.28s;
    }
</style>
