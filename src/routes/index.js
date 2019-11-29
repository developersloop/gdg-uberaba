import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWord from '../components/HelloWorld.vue';

Vue.use(VueRouter); // midleware (estou dizendo para o vue utilizar o vue-router)


const router = new VueRouter({
    routes:[
                {
                    path:"/",
                    component:HelloWord,
                    name:'Hello-World'
                },
    ]
});


export default router;



