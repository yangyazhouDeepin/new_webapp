<template lang="pug">
div.football-today-match
    MatchList(v-if="going.count" :matchs="going" type="going")
    MatchList(v-if="uncoming.count" :matchs="uncoming" type="uncoming")
    MatchList(v-if="finished.count" :matchs="finished" type="finished")
    MatchList(v-if="unknown.count" :matchs="unknown" type="unknown")
    div.today-count.tc(v-show="todayMatchCount")
        |今日
        span.blue {{ ' ' + todayMatchCount + ' ' }}
        |场
</template>

<script>
import MatchList from './components/MatchList.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('match') 
export default {
    components: {
        MatchList
    },
    computed: {
        ...mapState({
            going: state => state.going,
            finished: state => state.finished,
            uncoming: state => state.uncoming,
            unknown: state => state.unknown
        }),
        ...mapGetters([
            'todayMatchCount'
        ])
    },
    methods: {
        ...mapActions([
            'getTodayAll',
            'resetTodayAll'
        ])
    },
    created () {
        let params = {
            sportType: 1,
            date: this.util.dateFormate(new Date(), 'yyyy-MM-dd')
        }
        this.getTodayAll(params)
    }
}
</script>

<style lang="stylus">
.today-count
    height 70px
    line-height 70px
    font-size 22px
</style>