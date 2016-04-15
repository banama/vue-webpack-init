import VueRouter from 'vue-router'

var App = Vue.extend({})
var router = new VueRouter()
router.map({
    '/foo': {
        component: function(res){
            require(['../components/foo.vue'], res)
        },
        data: {
            page: "foo",
            desc: "This is the page foo."
        }
    },
    '/bar': {
        component: Vue.extend({
            template: "<router-view></router-view>"
        }),
        subRoutes: {
            '/foo': {
                component: function(res){
                    require(['../components/foo.vue'], res)
                },
                data: {
                    page: "/bar/foo",
                    desc: "This is the page /bar/foo."
                }
            }
        }
    }
})

router.start(App, '#app')
