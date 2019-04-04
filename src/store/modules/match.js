import { todayAll } from '@/api/modules/home'
const defaultValue = {
    count: 0,
    matches: []
}
const resetState = (state) => {
    state.going = { ...defaultValue }
    state.finished = { ...defaultValue }
    state.uncoming = { ...defaultValue }
    state.unknown = { ...defaultValue }
    return state
}
const state = resetState({})
const getters = {
    todayMatchCount (state) {
        return state.going.count + state.finished.count + state.uncoming.count + state.unknown.count
    }
}

const actions = {
    /**
     * 
     * @param {*} param0 
     * @param {Object} playload {sportId: 1, date: '2019'} 
     */
    async getTodayAll ({commit, state}, playload) {
        const res = await todayAll(playload)
        .then(res => res.data)
        .catch(err => console.log(err))
        console.log(res)
        if (res) {
            commit('setTodayAll', res)
        }
    }
}

const mutations = {
    setTodayAll (state, playload) {
        let { going, finished, uncoming, unknown } = playload
        state.going = going
        state.finished = finished
        state.uncoming = uncoming
        state.unknown = unknown
    },
    resetTodayAll (state) {
        resetState(state)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}