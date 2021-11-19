// App.vue
<template>
  <div id="nav" Align=Center>
    <h1 style="color:black;font-family:Verdana, sans-serif;"> THRIVE </h1>
    <p/>
    <button><router-link to="/">Home</router-link></button>
    <button><router-link to="/create_post">Write new text</router-link></button>
    <button><router-link to="/thrive">Thrive</router-link></button>
    <button><router-link to="/Login">Login</router-link></button>
    <button><router-link to="/create_user">Register</router-link></button>
    <p/>
    <router-view/>
  </div>
</template>


<style lang="scss" scoped>
  @import "@/form.scss";
</style>