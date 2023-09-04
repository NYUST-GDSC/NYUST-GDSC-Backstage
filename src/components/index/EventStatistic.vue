<template>
    <v-container>
      <v-row>
        <v-col cols="4" align="center">
          <v-card
              color="#385F73"
              theme="dark"
          >
            <v-card-title class="text-h5">
              {{$t("index.all_event_num")}}
              <p class="text-h4 text--primary">
                {{all_event_num}}
              </p>
            </v-card-title>

          </v-card>
        </v-col>
        <v-col cols="4" align="center">
          <v-card
              color="#385F73"
              theme="dark"
          >
            <v-card-title class="text-h5">
              {{$t("index.past_event_num")}}
              <p class="text-h4 text--primary">
                {{ past_event_num }}
              </p>
            </v-card-title>

          </v-card>
        </v-col>
        <v-col cols="4" align="center">
          <v-card
              color="#385F73"
              theme="dark"
          >
            <v-card-title class="text-h5">
              {{$t("index.future_event_num")}}
              <p class="text-h4 text--primary">
                {{future_event_num}}
              </p>
            </v-card-title>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
  name:"EventStatistic",
  data(){
    return{
      all_event_num:0,
      past_event_num:0,
      future_event_num:0,
    }
  },
  beforeMount() {
    const ChapterID = "3153";
    const url = `https://gdsc.community.dev/api/chapter/${ChapterID}/event/`;
    const today = new Date();
    this.axios.get(url)
        .then((res)=>{
          this.all_event_num=res["data"]["count"];
          res["data"]["results"].forEach((result)=>{
            let date = new Date(result["end_date"]) ;
            if( date > today){
              this.future_event_num+=1;
            }else{
              this.past_event_num+=1;
            }
          })
        })
        .catch((err)=>{
          console.log(err)
        })
  }
}
</script>
<style scoped>

</style>