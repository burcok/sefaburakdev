export default{
    state: () => ({
        name:'Buster',
        surname: 'Mr.',
        lang:'0'
    }),
    getters: {
        totalName(state){
            return `${state.surname} ${state.name}`;
        }
    },
    mutations:{
        SET_NAME(state,payload){
            state.name = payload
        },
        SET_LANG(state,payload){
            state.lang = payload
        }
    },
    actions:{
        saveName({commit},data){
            commit('SET_NAME', data)
        },
        saveLang({commit},data){
            commit('SET_LANG',data)
        }
    },
}