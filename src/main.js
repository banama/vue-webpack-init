import VueRouter from 'vue-router'

var App = Vue.extend({})
var router = new VueRouter()
router.map({
    '/vuex': {
        component: function(res){
            require(['../components/vuex.vue'], res)
        }
    },
    '/foo': {
        component: function(res){
            require(['../components/foo.vue'], res)
        },
        data: {
            page: "this is /foo",
            desc: "------------."
        }
    },
    '/bar': {
        component: Vue.extend({
            template: "<router-view></router-view>"
        }),
        subRoutes: {
            '/': {
                component: require('../components/bar.vue'),
                data: {
                    page: "this is /bar",
                    desc: "------------."
                }
            },
            '/base': {
                component: function(res){
                    require(['../components/base-com.vue'], res)
                }
            }
        }
    }
})

router.start(App, '#app')
