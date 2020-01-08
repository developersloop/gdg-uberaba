<template>
    <div>
       Edit/{{id}}
    </div>
</template>

<script>
export default {
    data(){
          return{
              id:''
          }
    },

    mounted(){
           const id = this.$route.params.id;
          // eslint-disable-next-line no-console
           console.log(id);
           this.id = id;
    }
}
</script>