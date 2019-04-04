import Vue from 'vue'
import Vuex from 'vuex'
import match from './modules/match'
import live from './modules/live'
import textLive from './modules/textLive'
import lineup from './modules/lineup'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        match,
        live,
        textLive,
        lineup
    }
})