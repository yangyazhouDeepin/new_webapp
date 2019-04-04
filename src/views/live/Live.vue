<template lang="pug">
div.live
    div.live-container(:class="{'is-basketball': matchDetail.sportId === 2}")
        div.back(@click="goback")
        RouterView(v-if="matchDetail" :matchDetail="matchDetail")
    div.live-data
        div.nav.b-1px-b
            span.nav-item(v-for="(nav, index) in navs" :class="{active: index === activeIndex}" @click="activeIndex = index") {{ nav }}
        component.tab.api-error-container(v-if="matchDetail" :is="navMap[activeIndex]()" :matchDetail="matchDetail")
</template>

<script>
import TextLive from './textlive/TextLive'
import Lineup from './lineup/Lineup'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('live')
export default {
    components: {
        TextLive,
        Lineup
    },
    data () {
        return {
            navs: ['直播', '阵容', '情报', '数据', '赔率', '聊天室'],
            activeIndex: 0,
            navMap: {
                "0": () => 'TextLive',
                "1": () => "Lineup",
                "2": () => "Developing",
                "3": () => "MatchData",
                "4": () => "Odds",
                "5": () => "Developing"
            }
        }
    },
    computed: {
        ...mapState({
            matchDetail: state => state.matchDetail
        })
    },
    created () {
        let id = this.$route.params.id
        this.getMatchDetail(id)
    },
    methods: {
        ...mapActions([
            'getMatchDetail'
        ]),
        goback () {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="stylus">
.live
    height 100%
    display flex
    flex-direction column
    .live-container
        background-color rgb(14, 14, 14)
        height 422px
        background-image url('~@/assets/images/live/live_bg.png')
        background-size cover
        position relative
        overflow hidden
        &.is-basketball
            background-image url('~@/assets/images/live/basketball.png')
        .back
            width 44px
            height 44px
            background-image url('~@/assets/images/back.png')
            background-size cover
            position absolute
            left 30px
            top 22px
            z-index 9
    .live-data
        .nav
            display flex
            justify-content space-around
            font-size 30px
            padding 0 20px
            color $fc2
            line-height 88px
            height 88px
            span
                padding 0 20px
                position relative
                transition .2s
                &.active
                    color $fc1
                &:before
                    content ""
                    position absolute
                    left 0
                    bottom 1px
                    height 4px
                    width 100%
                    background $blue
                    transform scale(0)
                    transition .2s
                &.active:before
                    transform scale(1)
</style>