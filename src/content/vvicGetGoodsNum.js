import Vue from '../../node_modules/vue/dist/vue.js'

import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' })

var app = document.createElement("div");
app.setAttribute('id', 'app')
document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.btns.j-unbuy.clearfix').appendChild(app);


new Vue({
    el: '#app',
    data: function() {
        return { visible: false }
    }
})

var MyComponent = Vue.extend({
    methods: {
        copyGetGoodsInfo() {
            const marketInfo = document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fr.item-right.mt20 > div.shop-info > div > ul > li:nth-last-child(1) > div.text').innerHTML.replace(/<a\s[\s\S]*/g, '').trim()
            const sectionNum = document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > dl.summary > dd:nth-child(1) > div.value.ff-arial').innerHTML.trim()
            const amount = document.querySelector('#j_iptAmount').value.trim()
            
            let size = document.querySelector('#j-buy > dd:nth-child(2) > div.value > ul > li.selectSize.selected')
            let color = document.querySelector('#j-buy > dd:nth-child(3) > div.value > ul > li.selectColor.selected')
            console.log(size)
            console.log(color)
            if (size === null || color === null) {
                this.$message.error('请先选择sku信息')
            } else {
                size = size.getAttribute('data-size').trim()
                color = color.getAttribute('data-color').trim()
                var copy = document.querySelector('#copyInput') === null ? document.createElement('input') : document.querySelector('#copyInput')
                copy.setAttribute('id', 'copyInput')
                copy.setAttribute('style', 'color:#FFF;border:0px;')
                copy.value = marketInfo + ' ' + sectionNum + ' ' + color + ' ' + size + ' * ' + amount
                document.querySelector('body > div.footer3_wrap > div > div.secur').appendChild(copy);
                copy.select();
                document.execCommand("Copy")
                this.$message.success('复制成功')
            }
        },
        copyShopInfo() {
            const marketInfo = document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fr.item-right.mt20 > div.shop-info > div > ul > li:nth-last-child(1) > div.text').innerHTML.replace(/<a\s[\s\S]*/g, '').replace('国润', 'A').replace('国马', 'B').replace('国投', 'C').replace('非凡', 'D').replace('柏美', 'E').replace('泓发', 'F').replace('宝华', 'G').replace('女人街', 'H').replace('国大', 'I').replace('大时代', 'J').replace('佰润', 'K').replace('三晟', 'L').replace('大西豪', 'M').replace('跨客城', 'N').replace('国泰', 'O').replace('新金马', 'P').replace('金富丽', 'Q').replace('天福居', 'T').replace('楼B区 ', '-B*').replace('楼C区 ', '-C*').replace('楼A区 ', '-A*').replace('楼E区 ', '-E*').replace('楼东侧 ', '-DC*').replace('楼 ', '*').trim()
            const sectionNum = document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > dl.summary > dd:nth-child(1) > div.value.ff-arial').innerHTML.trim()
            var rawPrice = document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.price-time-buyer > div.v-price.d-p > div.p-value > span > strong.d-sale') === null ? document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.price-time-buyer > div > div.p-value > strong.d-sale') : document.querySelector('body > div.w.clearfix > div.item-content.clearfix > div.fl.item-left.mt20 > div.product-detail > div.price-time-buyer > div.v-price.d-p > div.p-value > span > strong.d-sale')
            var price = rawPrice.innerText
            if (price.indexOf(' - ') !== -1){
                price = price.substring(0, price.indexOf(' - '))
            }
            price = price.replace('.00', '')
            var copy = document.querySelector('#copyInput') === null ? document.createElement('input') : document.querySelector('#copyInput')
            copy.setAttribute('id', 'copyInput')
            copy.setAttribute('style', 'color:#FFF;border:0px;')
            copy.value = marketInfo + '##' + sectionNum + '*' + price
            document.querySelector('body > div.footer3_wrap > div > div.secur').appendChild(copy);
            copy.select();
            document.execCommand("Copy")
            this.$message.success('复制成功')
            
            chrome.storage.sync.get(['key'], function(result) {
                console.log('result', result)
                console.log('Value currently is ' + result.key);
            })
        }
    },
    template: `
    <div style="display:inline-block;position:relative;height:40px;width:80px;">
        <el-button id="btn" type="warning" style="height:40px;width:35px;font-size:10px;padding:0" @click="copyGetGoodsInfo">复制<br>拿货</el-button>
        <el-button id="btn" type="warning" style="height:40px;width:35px;margin-left:2px;padding:0" @click="copyShopInfo">复制<br>上货</el-button>
    </div>
    `
})

new MyComponent().$mount('#app')
