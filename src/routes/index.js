import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWord from '../components/HelloWorld.vue';
import Edit from '../components/Edit/Edit.vue';
import Profile from '../components/Edit/Profile.vue'
Vue.use(VueRouter); // midleware (estou dizendo para o vue utilizar o vue-router)


const router = new VueRouter({
    mode:'history',
    routes:[
                {
                    path:"/",
                    component:HelloWord,
                    // name:'Hello-World'
                },
                {
                    path:"/edit", name:'Edit',component:Edit,
                    children:[
                        {
                            path:':id',
                            component:Profile,
                            name:'ProfileID'
                           
                        }
                  ]
                },

                { path:'*', redirect:"/" }
    ]
});


export default router;



