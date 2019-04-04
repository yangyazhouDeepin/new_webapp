import { matchDetail, contrastSoccer, constrastBasketball } from '@/api/modules/live'
const state = {
    // live -> state
    matchDetail: '',
    // 默认进入直播页面显示赛事详情
    componentName: 'MatchDetail',
   
}

const actions = {
    /**
     * @param {*} param0 
     * @param {String} playload  matchId 
     */
    async getMatchDetail ({commit, state}, playload) {
        let req = await matchDetail(playload)
        .then(req => req = req.data)
        .catch(err => console.log(err))
        if (req) {
            commit('setMatchDetail', req)
        }
    },
    
}

const mutations = {
    setMatchDetail (state, playload) {
        state.matchDetail = playload
    },
    setComponentName (state, playload) {
        state.componentName = playload
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}