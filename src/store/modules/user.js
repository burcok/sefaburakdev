import trLang from '../languages/trLanguageJson.json'
import engLang from '../languages/engLanguageJson.json'
import deLang from '../languages/deLanguageJson.json'
export default{
    state: () => ({
        currentLang: engLang,
        trLang: trLang,
        engLang: engLang,
        deLang: deLang,
    }),
    getters: {
        
    },
    mutations:{
        SET_LANG(state,payload){
            state.lang = payload
        }
    },
    actions:{

        saveLang({commit},data){
            commit('SET_LANG',data)
        }
    },
}