import { matchEventAll, contrastSoccer, constrastBasketball } from '@/api/modules/textLive.js'
const state = {
    allEvent: [],
     // footballCount -> state
     soccerData: '',
     basketballData: ''
}

const actions = {
    async getAllEvent ({ commit }, playload) {
        let req = await matchEventAll(playload)
        .then(res => res = res.data)
        .catch(err => console.log(err))
        console.log(req)
        if (req) {
            commit('setAllEvent', req.events)
        }
    },
    /**
     * @param {*} param0 
     * @param {String} playload  matchId 
     */
    async getContrastSoccer ({ commit }, playload) {
        let req = await contrastSoccer(playload)
        .then(req => req = req.data)
        .catch(err => console.log(err))
        if (req) {
            commit('setSoccerData', req)
        }
    },
    async getContrastBasketball ({ commit }, playload) {
        let req = await constrastBasketball(playload)
        .then(req => req = req.data)
        .catch(err => console.log(err))
        if (req) {
            commit('setBasketballData', req)
        }
    }
}

const mutations = {
    setAllEvent (state, playload) {
        state.allEvent = playload
    },
    setSoccerData (state, playload) {
        state.soccerData = playload
    },
    setBasketballData (state, playload) {
        state.basketballData = playload
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}