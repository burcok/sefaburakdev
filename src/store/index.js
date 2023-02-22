import { createStore } from "vuex";
import user from '../store/modules/user'
import 'tw-elements';

const store = createStore({
    modules:{
        user,
    }
})

export default store