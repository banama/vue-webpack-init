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
        component: function(res){
            require(['../components/bar.vue'], res)
        },
        data: {
            page: "bar",
            desc: "This is the page bar."
        },
        subRoutes: {
            '/foo': {
                component: function(res){
                    require(['../components/foo.vue'], res)
                },
                data: {
                    page: "foo",
                    desc: "This is the page foo."
                }
            }
        }
    }
})

router.start(App, '#app')
