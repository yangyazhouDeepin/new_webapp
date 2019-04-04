<template lang="pug">
div.match-detail
    h3 {{ `${ matchDetail.leagueNick } ${ matchDetail.round }` }}
    div.team
        div.host-team
            div.logo
                DefaultImg(:src="matchDetail.hostTeamLogo" :defaultUrl="util.defaultNoBgImg")
            p.name.ellipsis {{ matchDetail.hostTeamName }}
        div.score-container
            div.score.num {{ `${ matchDetail.hostTeamScore }-${ matchDetail.guestTeamScore }` }}
            div.time(v-if="!showTime") {{ matchStatus }}
            div.time(v-if="showTime && time != ''") {{ `第${ time }'` }}
        div.guest-team
            div.logo
                DefaultImg(:src="matchDetail.guestTeamLogo" :defaultUrl="util.defaultNoBgImg")
            p.name.ellipsis {{ matchDetail.guestTeamName }}
    div.bottons(:class="{ 'has-two': matchDetail.liveM3u8Url && matchDetail.animUrl }")
        div.btn.btn-video(v-if="matchDetail.liveM3u8Url" @click="$router.push({name: 'liveVideo'})") 视频直播
        div.btn.btn-animate(v-if="matchDetail.animUrl" @click="$router.push({name: 'liveAnimate'})") 动画直播
</template>

<script>
export default {
    props: ['matchDetail'],
    data () {
        return {
            time: '',
            timer: null
        }
    },
    created () {
        if (this.matchDetail.matchStatus === 2) {
            this.startTime()
        }
    },
    destroyed () {
        clearInterval(this.timer)
    },
    computed: {
        matchStatus () {
            let status = this.matchDetail.matchStatus
            if (status === 1 || status === 4) return '即将开始'
            if (status === 3) return '已结束'
            return '未知'
        },
        showTime () {
            return this.matchDetail.matchStatus === 2
        }
    },
    methods: {
        startTime () {
            clearInterval(this.timer)
            let useTime = Math.floor((new Date().getTime() - this.matchDetail.matchTime) / 1000 / 60)
            if (useTime < 0) useTime = 0
            this.time = useTime
            this.timer = setInterval(() => {
                this.time += 1
            }, 60000)
        }
    }
}
</script>

<style lang="stylus">
.match-detail
    margin-top 90px
    text-align center
    padding 0 40px
    h3
        color $fc3
        margin-bottom 15px
    .team
        display flex
        color #fff
        .host-team, .guest-team
            width 210px
            .logo
                img
                    height 128px
            .name
                width 210px
                margin-top 15px
        .score-container
            flex 1
            .score
                height 128px
                line-height 128px
                font-size 88px
            .time
                margin-top 15px
    .bottons
        margin-top 28px
        .btn
            display inline-block
            width 162px
            height 58px
            line-height 58px
            color #fff
            border-radius 8px
            font-size 23px
        .btn-video
            background $red
        .btn-animate
            background $blue
        &.has-two
            .btn:first-child
                margin-right 20px
</style>