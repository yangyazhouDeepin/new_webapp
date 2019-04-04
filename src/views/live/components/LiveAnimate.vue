<template lang="pug">
div.live-animate
  div.self(@click.self="show")
    div.go-back-container(:class="animateClass + ' ' + initClass")
      span.back(@click="$router.go(-1)")
      |{{ title }}
      span.fr {{ startTime }}
  iframe( v-if="matchDetail.animUrl" :src="matchDetail.animUrl" width="100%" height="100%" frameborder="0" scrolling="no")
</template>

<script>
export default {
    props: ['matchDetail'],
    data () {
        return {
            initClass: 'hide',
            animateClass: ''
        }
    },
    computed: {
        title () {
            return (this.matchDetail.leagueName ? this.matchDetail.leagueName : '赛事') + (this.matchDetail.round ? this.matchDetail.round : '')
        },
        startTime () {
            return this.util.dateFormate(new Date(this.matchDetail.matchTime), 'hh:mm yyyy-MM-dd')
        }
    },
    methods: {
        show () {
            this.initClass = ''
            if (!this.animateClass) {
                this.animateClass = 'animated fadeInDown'
            } else {
                this.animateClass == 'animated fadeInDown'
                ? this.animateClass = 'animated fadeOutUp'
                : this.animateClass = 'animated fadeInDown'
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
.live-animate
    position absolute
    width 100%
    height 100%
    z-index 10
    .self
        position absolute
        width 100%
        height 100%
        z-index 10
        left 0
        top 0
    .go-back-container
        position absolute
        top 0
        left 0
        width 100%
        height 88px
        line-height 88px
        color #fff
        font-size 24px
        box-sizing border-box
        padding-left 100px
        padding-right 20px
        background rgba(0, 0, 0, .3)
        .back
            width 44px
            height 44px
            background-image url('~@/assets/images/back.png')
            background-size cover
            position absolute
            left 30px
            top 22px
</style>
