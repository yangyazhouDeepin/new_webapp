<template lang="pug">
div.basketball-count
    div.table-head
        div.team 主队/客队
        div 一
        div 二
        div 三
        div 四
        div 加时
        div 总分
    div.table-item
        div.team {{ matchDetail.hostTeamName }}
        div(:class="getHostClass(basketballData.Period1)") {{ basketballData.Period1 ? basketballData.Period1.team1 : '-' }}
        div(:class="getHostClass(basketballData.Period2)") {{ basketballData.Period2 ? basketballData.Period2.team1 : '-' }}
        div(:class="getHostClass(basketballData.Period3)") {{ basketballData.Period3 ? basketballData.Period3.team1 : '-' }}
        div(:class="getHostClass(basketballData.Period4)") {{ basketballData.Period4 ? basketballData.Period4.team1 : '-' }}
        div(:class="getHostClass(basketballData.Overtime)") {{ basketballData.Overtime ? basketballData.Overtime.team1 : '-' }}
        div(:class="getHostClass(basketballData.Current)") {{ basketballData.Current ? basketballData.Current.team1 : '-' }}
    div.table-item
        div.team {{ matchDetail.guestTeamName }}
        div(:class="getGuestClass(basketballData.Period1)") {{ basketballData.Period1 ? basketballData.Period1.team2 : '-' }}
        div(:class="getGuestClass(basketballData.Period2)") {{ basketballData.Period2 ? basketballData.Period2.team2 : '-' }}
        div(:class="getGuestClass(basketballData.Period3)") {{ basketballData.Period3 ? basketballData.Period3.team2 : '-' }}
        div(:class="getGuestClass(basketballData.Period4)") {{ basketballData.Period4 ? basketballData.Period4.team2 : '-' }}
        div(:class="getGuestClass(basketballData.Overtime)") {{ basketballData.Overtime ? basketballData.Overtime.team2 : '-' }}
        div(:class="getGuestClass(basketballData.Current)") {{ basketballData.Current ? basketballData.Current.team2 : '-' }}
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions } = createNamespacedHelpers('textLive')
export default {
    props: ['matchDetail'],
    computed: {
        ...mapState({
            basketballData: state => state.basketballData
        })
    },
    created () {
        this.getContrastBasketball(this.matchDetail.matchId)
    },
    methods: {
        ...mapActions([
            'getContrastBasketball'
        ]),
        // 主队比分颜色 主队胜 蓝色
        getHostClass (obj) {
            let cName = ''
            if (!obj) return ''
            obj.team1 > obj.team2
            ? cName = 'tb'
            : obj.team1 === obj.team2 
                ? cName = 'fc3'
                : ''
            return cName
        },
        // 客队比分颜色 客队胜 红色
        getGuestClass (obj) {
            let cName = ''
            if (!obj) return ''
            obj.team1 < obj.team2
            ? cName = 'tr'
            : obj.team1 === obj.team2 
                ? cName = 'fc3'
                : ''
            return cName
        }
    }
}
</script>

<style lang="stylus" scoped>
.basketball-count
    line-height 50px
    box-sizing border-box
    padding 0 20px
    .table-head, .table-item 
        display flex
        line-height 60px
        &.table-head
            color $fcolor
        > div 
            min-width 80px
            text-align center
            &.team
                width 250px
                overflow hidden
                text-overflow ellipsis
                text-align left
                display inline-block
                white-space nowrap
</style>