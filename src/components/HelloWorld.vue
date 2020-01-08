<template>
  <div>
       <b>{{msg}}</b>
       <button v-on:click="clicou">Clicou</button>
       <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
     data(){
       return {
          msg:'route specific in component Hello-World'        
       }
     },
     methods:{
        clicou(){
           this.msg = 'adadad';
        }
     }
}
</script>