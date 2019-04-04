<template lang="pug">
div.text-live
    div.container
        div.stat
            div.title.b-1px-b 技术统计
        div.text-live-content
            component(:is="componentName" :matchDetail="matchDetail")
            div.bg-m-10
            div.title.b-1px-b 事件直播
                div.text-list
                    div.text-item(v-for="item in allEvent" :class="`${allEvent.length === 1 ? 'one' : ''} ${item.iconType}`"  :key="item.eventId")
                        div.time {{  }}
                        div.message(v-html="item.content")
                div.default-text {{ allEvent.length ? '本场比赛即将开始,欢迎到时收看小明体育直播' : '本场比赛暂无事件直播' }}
</template>

<script>
import FootballCount from './FootbalCount'
import BasketballCount from './BasketballCount'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('textLive')
export default {
    props: ['matchDetail'],
    data () {
        return {
            
        }
    },
    components: {
        FootballCount,
        BasketballCount
    },
    computed: {
        ...mapState({
            allEvent: state => state.allEvent
        }),
        componentName () {
            return this.matchDetail.sportId === 1
                ? 'FootballCount'
                : 'BasketballCount'
        }
    },
    created () {
        this.getAllEvent(this.matchDetail.matchId)
    },
    methods: {
        ...mapActions([
            'getAllEvent'
        ])
    }
}
</script>

<style lang="stylus" scoped>
.text-live 
    position relative
    display flex
    flex-direction column
    background #fff
    .container 
        min-height 100%
        background #fff
    .title 
        height 88px
        line-height 88px
        padding-left 20px
        font-size 28px
        position relative
        &:before 
            content ""
            width 8px
            height 28px
            position absolute
            top 30px
            left 0
            background $blue
    .text-live-content 
        font-size 28px
        color $fc1
        display flex
        flex-direction column
        .live-status 
            position absolute
            z-index 1
        .text-list 
            padding 0 20px
            position relative
            // padding-top 78px
        .text-live-title 
            display inline-block
            height 58px
            line-height 58px
            padding-left 58px
            padding-right 22px
            border-radius 29px
            color white
            font-size 24px
            position relative
            background-color #4696F8
            background-image url('~@/assets/images/live/clock.png')
            background-size 28px 28px
            background-repeat no-repeat
            background-position 20px 15px
            margin-top 20px
        .text-item 
            font-size 28px
            line-height 42px
            padding-top 30px
            padding-left 52px
            position relative
            display flex
            .time 
                width 88px
                margin-right 12px
            .message 
                flex 1
            &:after 
                content ""
                position absolute
                left 8px
                top 51px
                margin-top -6px
                width 12px
                height 12px
                border-radius 6px
                background-color $blue
                z-index 1
            &.whistle:after 
                background url('~@/assets/images/live/textlive/zhenrong_icon_caipan_gray.png') no-repeat
            &.penalty:after 
                background url('~@/assets/images/live/textlive/icon_dianqiu.png') no-repeat
            &.goal:after 
                background url('~@/assets/images/live/textlive/icon_jinqiu.png') no-repeat
            &.description:after 
                background url('~@/assets/images/live/textlive/icon_shijian.png') no-repeat
            &.red:after 
                background url('~@/assets/images/live/textlive/icon_hongpai.png') no-repeat
            &.yellowRed:after 
                background url('~@/assets/images/live/textlive/icon_2hh.png') no-repeat
            &.corner:after 
                background url('~@/assets/images/live/textlive/icon_jiaoqiu.png') no-repeat
            &.change:after 
                background url('~@/assets/images/live/textlive/icon_huanren.png') no-repeat
            &.yellow:after 
                background url('~@/assets/images/live/textlive/icon_huangpai.png') no-repeat
            &.whistle:after,
            &.penalty:after,
            &.goal:after,
            &.description:after,
            &.yellow:after,
            &.red:after,
            &.yellowRed:after,
            &.corner:after,
            &.change:after
                width 28px
                height 28px
                left 0
                top 43px
                background-size 28px
            &:before 
                content ""
                position absolute
                left 13px
                top 0
                bottom 0
                width 1PX
                background #E8E9EA
            
            &:first-child:before 
                top 57px
            
            &:last-child:before 
                bottom auto
                height 57px
            
            &.one:before 
                height 0
    .default-text 
        font-size 24px
        color $fcolor
        text-align center
        margin-top 38px
        padding-bottom 78px
    &.noMessage 
        .text-live-content 
            display none
        
        .default-text 
            margin-top 120px
</style>
