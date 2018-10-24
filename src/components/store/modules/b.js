const state = {
    count: 10
}

const mutations = {
    add(state, param) {
        state.count += param
    },
    reduce(state, param) {
        state.count -= param
    }
}

const actions = {
    add: ( {commit}, param ) => {
        commit('add', param)
    },
    reduce: ( {commit}, param ) => {
        commit('reduce', param)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}