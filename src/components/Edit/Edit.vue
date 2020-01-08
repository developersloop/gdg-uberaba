<template>
    <div>
        edit
        <router-link :to="{ name:'ProfileID', params:{id:2}}">Edit profiles</router-link>
         <router-view></router-view> 
    </div>
</template>

<script>
export default {
    
}
</script>