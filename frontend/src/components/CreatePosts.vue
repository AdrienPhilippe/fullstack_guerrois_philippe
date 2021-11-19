<template>
  <div>
    <p>My File Selector: <file-select v-model="file"></file-select></p>
    <p v-if="file">{{file.name}}</p>
    
  </div>
</template>

<script>
import FileSelect from './FileSelect.vue'

export default {
  components: {
    FileSelect
  },

  data() {
    return {
      file: null
    }
  }
}

// // import axios from "axios";
// export default {
//   data() {
//     return {
//       user_mail:null,
//       pwd:null,
//       form:{body:null}
//     };
//   },
//   methods: {
//     chooseFiles() {
//         document.getElementById("fileUpload").click()
//     }
  // methods: {

  //   async submit(){
  //     try {
  //       const q = "users/" + this.user_mail + "/posts/"
  //       await axios.post(q,this.form).catch(error => {console.log(error)})
  //       this.form.body = null
  //       this.user_mail = null
  //       this.pwd = null
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
//   },
// };
</script>



<style lang="scss" scoped>
  @import "@/form.scss"; //Here i add extra "./"(current directory)
</style>