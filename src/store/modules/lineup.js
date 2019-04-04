import { matchLineup } from '@/api/modules/lineup'

const state = {
    lineupData: ''
}

const actions = {
    async getMatchLineup ({ commit }, playload) {
        let req = await matchLineup(playload)
        .then(res => res = res.data)
        .catch(err => console.log(err))
        console.log(req)
        if (req) {
            commit('setLineupData', req)
        }
    }
}

const mutations = {
    setLineupData (state, playload) {
        state.lineupData = playload
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}