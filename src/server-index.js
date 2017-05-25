import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)
Vue.use(VueAxios, axios)
import App from './component/List.vue'
import store from './store/store_index'
import {
    LIST
} from './store/mutation-types'
const app = new Vue({ ...App,
    store
})

export default function (context) {
    return new Promise((resolve, reject) => {
        Vue.axios.get('http://localhost:5000/data').then((response) => {
            // 获取数据
            const list = response.data.data.liveWodList
            // 把数据存到Vuex里面
            store.commit(LIST.GET_DATA, list)
            // 把state存放到context中
            context.state = store.state
            resolve(app)
        })
        // context.state = store.state
        // resolve(app)
    });
};