const state = {
    userId: ''
};
const mutations = {
    setUserId(state, id) {
        state.userId = id;
        console.log("User ID =>", state.userId);
    }
};
const actions = {
    setUserId({ commit }, payload) {
        commit('setUserId', payload.userId);
    }
};
const getters = {
    getUserId(state) {
        return state.userId;
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}