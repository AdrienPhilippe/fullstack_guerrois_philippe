<template lang="html">
  <div class="wrapper">
    <button class="change__style" @click="changeStyle()">Dark mode</button>
    <tabs :mode="mode">
      <tab title="Sport">video from Sport
      </tab>
      <tab title="Humour">video from Humour
      </tab>
      <tab title="Wow">video from Wow
      </tab>
      <tab title="Aléatoire">video from Aléatoire
      </tab>

    </tabs>
  </div>
</template>

<script>
/* eslint-disable */
  import Tab from './components/Tab.vue'
  import Tabs from './components/Tabs.vue'


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
      axios.get('localhost:5432/fastapi_db/posts')
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
        }
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
    background-color: #f8f8f8;
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