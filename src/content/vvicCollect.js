import Vue from '../../node_modules/vue/dist/vue.js'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' })

var app = document.createElement("div");
app.setAttribute('id', 'app')
document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > dl.summary.clearfix > dd:nth-child(1) > div.value.ff-arial').appendChild(app);

new Vue({
    el: '#app',
    data: function() {
        return { visible: false }
    }
})

var MyComponent = Vue.extend({
    methods: {
        collectGoods() {
            const imgArr = []
            const colorArr = []
            const sizeArr = []
            let spuName = ''
            let price = ''
            let price_sale = ''
            // let getGoodsNum = ''
            // 获取图片
            let rawImgArr = document.querySelectorAll('#thumblist > div.owl-stage-outer > div > div')
            for (let i = 1, len = rawImgArr.length; i < len + 1 && i < 9; i++) {
                let img_item = document.querySelector('#thumblist > div.owl-stage-outer > div > div:nth-child(' + i + ') > div > a > img').getAttribute('src').replace('?x-oss-process=image/resize,mfit,h_60,w_60', '').replace('_60x60.jpg', '').replace('//', '')
                imgArr.push(img_item)
            }
            console.log(imgArr)

            // 获取标题、价格
            spuName = document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.d-name > strong').innerText
            var rawPrice = document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.price-time-buyer > div.v-price.d-p > div.p-value > span > strong.d-sale') === null ? document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.price-time-buyer > div > div.p-value > strong.d-sale') : document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.price-time-buyer > div.v-price.d-p > div.p-value > span > strong.d-sale')
            price = rawPrice.innerText
            // price = Number(document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.price-time-buyer > div.v-price.d-p > div.p-value > span > strong.d-sale').innerText)
            // console.log(document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.price-time-buyer > div > div.p-value > strong.d-sale'))
            price_sale = '1' // 售价公式
            console.log(spuName, price, price_sale)

            // 获取color
            let rawColorArr = document.querySelectorAll('#j-buy > dd:nth-child(3) > div.value > ul > li')
            for (let i = 1, len = rawColorArr.length; i < len + 1; i++) {
                let color_item = document.querySelector('#j-buy > dd:nth-child(3) > div.value > ul > li:nth-child(' + i + ')').getAttribute('data-color').trim()
                colorArr.push(color_item)
            }
            console.log(colorArr)
            
            // 获取size
            let rawSizeArr = document.querySelectorAll('#j-buy > dd:nth-child(2) > div.value > ul > li')
            for (let i = 1, len = rawSizeArr.length; i < len + 1; i++) {
                let size_item = document.querySelector('#j-buy > dd:nth-child(2) > div.value > ul > li:nth-child(' + i + ')').getAttribute('data-size').trim()
                sizeArr.push(size_item)
            }
            console.log(sizeArr)
        }
    },
    template: `
    <div style="display:inline-block;position:relative;height:40px;width:80px;">
        <el-button id="btn" type="primary" size="small" style="height:20px;width:35px;font-size:10px;padding:0" @click="collectGoods">采集</el-button>
    </div>
    `
})

new MyComponent().$mount('#app')
