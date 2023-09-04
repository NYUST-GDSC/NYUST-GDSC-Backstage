<template>
  <div id="team-shell-container">
    <v-container fluid id="team-container">
      <v-row justify="center" align="center">
        <v-col cols="6">
          <h1>Team</h1>
        </v-col>
        <v-col cols="6" align="right">
          <v-btn>
            Add Core Team Member
          </v-btn>
        </v-col>
      </v-row>
      <v-row justify="center" align="center">
        <v-col cols="2.5">Picture</v-col>
        <v-col cols="2.5">First Name</v-col>
        <v-col cols="2.5">Last Name</v-col>
        <v-col cols="2.5">Title</v-col>
        <v-col cols="2">Actions</v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <hr>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2.5">{{picture}}</v-col>
        <v-col cols="2.5">{{first_mame}}</v-col>
        <v-col cols="2.5">{{last_name}}</v-col>
        <v-col cols="2.5">Title</v-col>
        <v-col cols="2">Actions</v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name:'TeamView',
  data(){
    return {
      selectMember:{
        title:"",
        user:"",
        email:"",
        chapter:"",
        role:"",
        visible:"",
        order:"",
        first_name:"",
        last_name:"",
      },
      all_member:[],
    }
  },
  methods:{
    createTeamMember(){
      const ChapterID = "3153"
      const url = `https://gdsc.community.dev/api/chapter/${ChapterID}/team`
      this.axios.post(url)
          .then((res)=>{
            console.log(res.data)
          })
          .catch((err)=>{
            console.log(err)
          })
    },
  },
  beforeMount() {
    const ChapterID = "3153"
    const url = `https://gdsc.community.dev/api/chapter/${ChapterID}/team`

    this.axios.get(url)
        .then((res)=>{
          console.log(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
  }
}
</script>
<style scoped>
#team-shell-container{
  padding: 2%;
}
#team-container{
  padding: 2%;
  border-radius: 25px;
  background-color: white;
}
</style>