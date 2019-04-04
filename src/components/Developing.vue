<template lang="pug">
div.container
  img(src="~@/assets/images/icon_kong.png")
  h3(v-if="!text") 暂无内容
  p(v-if="text") {{ this.text ? this.text : this.defaultText }}
</template>

<script>
export default {
    props: ['text'],
    data () {
        return {
            defaultText: '攻城狮们正在努力研发中，敬请期待哦~'
        }
    }
}
</script>

<style lang="stylus" scoped>
.container
    text-align center
    padding-top 182px
    img
        width 288px
        height 288px
    h3
        font-size 30px
        color $fc1
        margin 18px 0
    p
        font-size 26px
        color $fcolor
</style>
