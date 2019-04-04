<template lang="pug">
div.lineup(:class="{'white-bg': !this.matchDetail}")
    Developing(v-if="!lineupData" text="本场比赛暂无阵容信息")
    div.lineup(v-if="lineupData")
        div.first-lineup
            h2(v-if="lineupData && hasFormation") 首发阵容
            Formation.lineup-formation(v-if="lineupData && hasFormation" :lineupData="lineupData")
            NoFormation(v-if="lineupData && !hasFormation" :lineupData="lineupData")
</template>

<script>
import Developing from '@/components/Developing'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('lineup')
export default {
    components: {
        Developing
    },
    props: ['matchDetail'],
    
    computed: {
        ...mapState({
            lineupData: state => state.lineupData
        }),
        hasFormation () {
            return this.lineupData.guestFormation && this.lineupData.hostFormation
        }
    },
    created () {
        this.getMatchLineup(this.matchDetail.matchId)
    },
    methods: {
        ...mapActions([
            'getMatchLineup'
        ])
    }
}
</script>

<style lang="stylus">
.white-bg
    height 100%
    background #fff
.lineup
    .msg
        height 46px
        line-height 46px
        padding 0 20px
        box-sizing border-box
        .referee, .site
            padding-left 38px
            background-position left center
            background-size 28px
            background-repeat no-repeat
        .referee
            background-image url('~@/assets/images/live/formation/zhenrong_icon_caipan_gray.png')
        .site
            background-image url('~@/assets/images/live/formation/zhenrong_icon_location_gray.png')
    .lineup-formation
        margin-bottom 30px
    .substitute
        margin-top 10px
    .first-lineup, .substitute, .event-list
        color $fc1
        background #fff
        h2
            padding 0 20px
            font-size 28px
            height 88px
            line-height 88px
            position relative
            font-weight bold
            &:before
                content ""
                display inline-block
                width 8px
                height 28px
                background $blue
                position absolute
                left 0
                top 50%
                margin-top -14px
        
.player-detail
    border-top 1px solid $borderColor
    .player-container, .no-more 
        width: 100%
        float: left
        .host-team, .guest-team 
            width: 50%;
    .no-more
        text-align center
        color $fc2
        height 88px
        line-height 88px
        position relative
        border-bottom 1px solid $borderColor
        &:after, &:before
            content ""
            height 1px
            width 146px
            background-color $borderColor
            position absolute
            top 50%
        &:before
            left 135px
        &:after
            right 135px
    .host-team-detail, .guest-team-detail
        width 100%
        float left
        font-weight bold
        .item
            padding-left 20px
    > div
        width 50%
        box-sizing border-box
        &:first-child 
            border-right 1px solid $borderColor
            .item 
                padding-left 20px
        &:last-child
            .item
                padding-right 20px
        .item, .player
            height 88px
            line-height 88px
            font-size 24px
            box-sizing border-box
            border-bottom 1px solid $borderColor
        .item
            img
                height 48px
                vertical-align middle
                transform translateY(-2px)
        .host
            img
                margin-right 10px
        .guest
            text-align right
            img
                margin-left 10px
        .player
            position relative
            .name-event
                display inline-block
                width 240px
                line-height 1.4
                position absolute
                top 50%
                transform translateY(-50%)
                .event-list
                    font-size 20px
                    color $fcolor
                    .event
                        margin-right 10px
                        vertical-align middle
                    .up
                        line-height 24px
                        .icon
                            display inline-block
                            width 12px
                            height 16px
                            position relative
                            margin-right 2px
                            &:after
                                content ""
                                border-left 6px solid transparent
                                border-right 6px solid transparent
                                border-bottom 6px solid #37cf37
                                position absolute
                                left 0
                                top 0
                            &:before
                                content ""
                                width 3px
                                height 10px
                                background #37cf37
                                position absolute
                                left 4px
                                top 5px
            .has-position
                width 240px
                display inline-block
                .name-box
                    display flex
                    flex-wrap nowrap
                .nick
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    vertical-align middle
                    flex 1
                .position
                    color $fcolor
                    white-space nowrap
            .name
                width 240px
                display inline-block
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
            .player-logo 
                width 50px
                height 50px
                display inline-block
                border-radius 50%
                background-repeat no-repeat
                background-position center
                background-size cover
                position absolute
                top 50%
                margin-top -25px
                border 1px solid $borderColor
                img
                    width 100%
                    border-radius 50%
                &:after
                    content attr(data-num)
                    font-size 20px
                    position absolute
                    width 32px
                    height 32px
                    line-height 32px
                    text-align center
                    top 50%
                    margin-top -16px
                    border-radius 50%
                    box-sizing border-box
    .host-team .player
        padding-left 120px
        .player-logo
            left 50px
            &:after
                left 0
                margin-left -28px
                background $fc1
                color white

    .guest-team
        .player
            padding-right 120px
            text-align right
            .name-box
                justify-content flex-end
        
            .player-logo
                right 50px
                &:after 
                    right 0
                    margin-right -28px
                    border 1PX solid $fc1
                    color $fc1
                    background white
            .name-event
                right 120px
    
    .event-time
        display inline-block
        width 82px
        text-align center
        position absolute
        right -36px
        padding-left 6px
        .icon
            width 12px
            height 16px
            position absolute
            top 50%
            transform translateY(-8px)
            &:after
                content ""
                border-left 6px solid transparent
                border-right 6px solid transparent
                position absolute
                left 0
            &:before
                content ""
                width 4px
                height 10px
                position absolute
        .icon:first-child 
            left 0
            &:after
                top 0
                border-bottom 6px solid #37cf37
            &:before
                top 5px
                left 50%
                transform translateX(-50%)
                background #37cf37
        .icon:last-child
            right: 0
            &:after
                bottom 0
                border-top 6px solid #fb425c
            &:before 
                bottom 5px
                left 50%
                transform translateX(-50%)
                background #fb425c
.event-list
    .player-detail
        > div:first-child
            border-right none
        > div
            .player
                .name
                    width 190px
.yellow-card, .red-card, .yellow-red-card
    white-space nowrap
    display inline-block
    height 24px
    line-height 24px
    text-align center
    border-radius 50%
    position relative
    &:before
        content ""
        display inline-block
        width 12px
        height 16px
        border-radius 2px
        background #FC9925
        margin-right 5px
.player-goal
    white-space nowrap
    display inline-block
    height 24px
    line-height 24px
    text-align center
    padding-left 20px
    background url('~@/assets/images/live/formation/icon_jinqiu.png')
    background-repeat no-repeat
    background-position left center
    background-size 16px
.red-card:before
    background #F22F74
.yellow-red-card
    padding-left: 24px
    &:after, &:before
        content ""
        border-radius 2px
        width 12px
        height 16px
        position absolute
    &:after
        top 6px
        left 8px
        background #FC9925
    &:before
        top 4px
        left 4px
        background #F22F74
.substitute .player-detail .player .player-logo img
    height 100%
    width 100%
.player-detail .host-team-detail + .player-container .guest-team .player .player-logo:after
    background $fc1
    color white
    border none
.player-detail .guest-team-detail + .player-container .host-team .player .player-logo:after
    border 1PX solid $fc1
    color $fc1
    background white

</style>