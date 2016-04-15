import VueRouter from 'vue-router'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import reducer from './redux/reducer'

window.store = applyMiddleware(
        thunkMiddleware,
        logger()
    )(createStore)(reducer)
    console.log(store)

var vueStore = {
    store: {}
}
let unsubscribe = store.subscribe(function(){
   vueStore.store = store.getState()
})

var App = Vue.extend({})
var router = new VueRouter()
router.map({
    '/foo': {
        component: function(res){
            require(['../components/foo.vue'], res)
        },
        data: vueStore
    }
})

router.start(App, '#app')
