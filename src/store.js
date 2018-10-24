import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

const state = {
    count: 1
}

const mutations = {
    increament (state) {
        state.count++;
    },
    decreament (state) {
        state.count--;
    }
}

const actions = {
    increament: ({commit}) => {
        commit("increament");
    },
    decreament: ({commit}) => {
        commit("decreament");
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
})