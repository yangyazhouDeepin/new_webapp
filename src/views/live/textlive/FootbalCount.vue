<template lang="pug">
div.container
    div.team.b-1px-b
        div.host-team
            DefaultImg.team-logo.mr-20(:src="matchDetail.hostTeamLogo" :defaultUrl="util.defaultNoBgImg")
            span.name.ellipsis {{ matchDetail.hostTeamName }}
        div VS
        div.guest-team.b-1px-b
            span.name.ellipsis {{ matchDetail.guestTeamName }}
            DefaultImg.team-logo.ml-20(:src="matchDetail.guestTeamLogo" :defaultUrl="util.defaultNoBgImg")
    div.comparison-container(v-if="soccerData")
        Comparison(v-if="soccerData.possession" :data="{hostScore: soccerData.possession.team1, guestScore: soccerData.possession.team2, util: `'`, text: '控球时间'}")
        Comparison(v-if="soccerData.attack" :data="{hostScore: soccerData.attack.team1, guestScore: soccerData.attack.team2, text: '进攻'}")
        Comparison(v-if="soccerData.dangerAttack" :data="{hostScore: soccerData.dangerAttack.team1, guestScore: soccerData.dangerAttack.team2, text: '危险进攻'}")
        Comparison(v-if="soccerData.shootOnGoal" :data="{hostScore: soccerData.shootOnGoal.team1, guestScore: soccerData.shootOnGoal.team2, text: '射正球门'}")
        Comparison(v-if="soccerData.shootOffGoal" :data="{hostScore: soccerData.shootOffGoal.team1, guestScore: soccerData.shootOffGoal.team2, text: '射偏球门'}")
        div.icon-list(:class="{'no-message': JSON.stringify(soccerData) === '{}'}")
            div.left.tr
                span.corner(v-if="soccerData.cornerKicks") {{ soccerData.cornerKicks.team1 }}
                    i.icon
                span.red-card(v-if="soccerData.redCards") {{ soccerData.redCards.team1 }}
                    i.icon
                span.yellow-card(v-if="soccerData.yellowCards") {{ soccerData.yellowCards.team1 }}
                    i.icon
            div.right
                span.yellow-card(v-if="soccerData.yellowCards") {{ soccerData.yellowCards.team2 }}
                    i.icon
                span.red-card(v-if="soccerData.redCards") {{ soccerData.redCards.team2 }}
                    i.icon
                span.corner(v-if="soccerData.cornerKicks") {{ soccerData.cornerKicks.team2 }}
                    i.icon
    div.margin-bg-10
</template>

<script>
import Comparison from '@/components/Comparison'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('textLive')
export default {
    components: {
        Comparison
    },
    props: ['matchDetail'],
    computed: {
        ...mapState({
            soccerData: state => state.soccerData
        })
    },
    created () {
        this.getContrastSoccer(this.matchDetail.matchId)
    },
    methods: {
        ...mapActions([
            'getContrastSoccer'
        ])
    }
}
</script>

<style lang="stylus" scoped>
.comparison-container
    padding 0 20px
    padding-bottom: 30px
    .icon-list
      height 28px;
.no-message
    &:after
      content "暂无数据"
      position absolute
      color $fcolor
      top 0
      left 50%
      transform translateX(-50%)
      font-size 22px
.icon-list
    margin-top 30px
    display flex
    position relative
    .left, .right
      flex 1
    .left
      padding-right 40px
    .right
      padding-left 40px
    span
        display inline-block
        height 28px
        line-height 28px
        padding-left 38px
        position relative
        vertical-align middle
        margin-right 20px
    .icon
        position absolute
        left 0
        top 0
        width 28px
        height 28px
    .red-card, .yellow-card
        &:before
            content ""
            width 21px
            height 28px
            border-radius 3px
            position absolute
            left 3px
            top 0
        &.red-card:before
            background $red2
        &.yellow-card:before 
            background #FC9925
    .corner .icon
      &:before
        content ""
        position absolute
        left 8px
        top 0
        border-left 14px solid #37CF37
        border-top 10px solid transparent
        border-bottom 10px solid transparent
      &:after
        content ""
        position absolute
        left 4px
        top 0
        width 4px
        height 28px
        background #37CF37
.team
    display flex
    padding 0 20px
    height 88px
    line-height 88px
    .guest-team, .host-team
        font-size 24px
        flex 1
        img
            vertical-align middle
            height 48px
        .name
            display inline-block
            width 250px
            vertical-align middle
    .guest-team
        text-align right
    div:nth-child(2)
        width 60px
        text-align center
        color $fcolor
</style>