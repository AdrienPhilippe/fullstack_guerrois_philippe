<template lang="html">
  <div class="wrapper">
    <button class="change__style" @click="changeStyle()">Dark mode</button>
    <tabs :mode="mode">
      <tab title="Sport">
        <p>post from Sport</p>
        <img src="../assets/sport.jpeg">
      </tab>
      <tab title="Humour">
        <p>post from Humour</p>
        <img src="../assets/Humour.jpg">
      </tab>
      <tab title="Wow">
        <p>post from Wow</p>
        <img src="../assets/lotr.png">
      </tab>
      <tab title="Aléatoire">
        <p>post from Aléatoire</p>
        <button onclick="random()">Random</button>
        <p id="demo"></p>
      </tab>
    </tabs>
  </div>
</template>

<script>
/* eslint-disable */
  import Tab from './Tab.vue'
  import Tabs from './Tabs.vue'

  export default {
    components: {
      Tab,
      Tabs
    },
    data () {
      return {
        mode: 'dark',
        img: '',
        loading: true,
        error: false
      }
    },
    mounted() {
      axios.get('http://localhost:8080')
      .then(response => {
        this.img = response
      })
      .catch(error => {
        console.log(error)
        this.error = true
      })
      .finally(() => {
        this.loading = false
      })
    },
    
    methods: {
      changeStyle () {
        if (this.mode === 'dark') {
          this.mode = 'light'
        } else {
          this.mode = 'dark'
        }
      },

      showImages () {
        },
    }
  }
</script>

<style lang="css">
  * {
    margin: 0;
    padding: 0;
    font-family: 'Karla', sans-serif;
  }
  .wrapper {
    width: 100%;
    min-height: 100vh;
    /* background-color: #f8f8f8; */
    margin: 0;
    padding: 20px;
  }

  .change__style {
    background-color: #eee;
    font-size: 1em;
    margin-bottom: 10px;
    padding: 5px;
  }
</style>
