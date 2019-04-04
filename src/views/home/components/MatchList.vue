<template lang="pug">
div.match-list(:class="type")
    div.match-list-title
        div.title
            p {{ typeText[type].title + ' ' }}
                span.count {{ matchs.count }}场
    div.match-list-item(v-for="match in matchs.matches" :key="match.matchId" @click="$router.push({name: 'live', params: {id: match.matchId}})")
        div.title
            div.league {{ match.leagueName }}
            div.time {{ util.dateFormate( new Date(match.matchTime), 'hh:mm' ) }}
                span(:class="{tr: type === 'going'}") {{typeText[type].status(match.matchTime)}}
            div.hot 123人
        div.detail
            div.host
                div.name.tr
                    span.event-list
                    |{{ match.hostTeamName }}
                div.logo
                    DefaultImg(:src="match.hostTeamLogo" :defaultUrl="util.defaultNoBgImg")
            div.score.tc {{ `${ match.hostTeamScore }-${ match.guestTeamScore }` }}
            div.guest
                div.logo
                    DefaultImg(:src="match.guestTeamLogo" :defaultUrl="util.defaultNoBgImg")
                div.name
                    |{{ match.guestTeamName }}
                    span.event-list
                div.icon
        div.information.tc(v-if="type === 'going' || type === 'finished'")
            span 半 {{ `${ match.hostHalfScore }-${ match.guestHalfScore }` }}
            span 角 {{ `${ match.hostCorner }-${ match.guestCorner }` }}
</template>

<script>
const typeText = {
    'going': {
        title: '正在进行',
        status: (date) => Math.floor((new Date().getTime() - date) / 1000 / 60) + "'"
    },
    'uncoming': {
        title: '即将开始',
        status: () => '未'
    },
    'finished': {
        title: '完场',
        status: () => '完'
    },
    'unknown': {
        title: '异常',
        status: () => '延期'
    }
}
export default {
    props: ['matchs', 'type'],
    data () {
        return {
            typeText
        }
    }
}
</script>

<style lang="stylus">
.match-list
    margin-top 15px
    &:first-child
        margin-top 0
    &-title
        height 72px
        line-height 72px
        background rgba(58,140,242,0.12)
        color $fc3
        font-size 22px
        text-align center
        border-radius 6px 6px 0 0
        .title
            display inline-block
            padding-left 40px
            background-size 30px
            background-position left center
            background-repeat no-repeat
            line-height 72px
            ^[0].going &
                background-image url('~@/assets/images/home/matchlist/icon-processing.png')
                .count
                    color $red
            ^[0].uncoming &
                background-image url('~@/assets/images/home/matchlist/icon-waiting.png')
                .count
                    color $blue
            ^[0].finished &
                background-image url('~@/assets/images/home/matchlist/icon-over.png')
                .count
                    color #5EC011
            ^[0].unknown &
                background-image url('~@/assets/images/home/matchlist/icon-abnormal.png')
                .count
                    color #FF7200

    &-item
        padding 20px 15px 20px 20px
        background-color #fff
        color $fc2
        display flex
        flex-direction column
        justify-content space-between
        margin-top 5px
        &:nth-child(2)
            margin-top 0
        .title
            display flex
            justify-content space-between
            line-height 40px
            .league
                padding-left 46px
                background url('~@/assets/images/home/matchlist/icon-not-concerned.png') no-repeat
                background-size 40px
                background-position left center
            .time
                padding 0 8px
                background #F4F4F4
                margin-top 3px
                border-radius 5px
                span
                    margin-left 16px
            .hot
                padding-left 46px
                background url('~@/assets/images/home/matchlist/icon-people.png') no-repeat
                background-size 40px
                background-position left center
        .detail
            display flex
            height 90px
            .host, .guest
                color $fc1
                font-size 26px
                width 300px
                display flex
                align-items center
                .name
                    flex 1
                    word-break break-all
                    line-height 28px
                .logo
                    width 50px
                    height 100%
                    text-align right
                    position relative
                    img
                        width 32px
                        position absolute
                        top 50%
                        transform translateY(-50%)
                &.host .logo img
                    right 0
                &.guest
                    .logo img
                        left 0
                    .icon
                        width 60px
            .score
                flex 1
                line-height 90px
        .information
            padding-bottom 10px
            span:first-child
                margin-right 20px
</style>