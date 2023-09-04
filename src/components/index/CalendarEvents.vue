<template>
  <v-container id="calendar-container">
    <v-row justify="center" align="center">
      <v-col cols="12" align="center">
        <h1>{{$t("index.calendarTitle")}}</h1>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <Qalendar
            :selected-date="new Date()"
            :events="jsonProps"
            :config="config"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import "qalendar/dist/style.css";
import { Qalendar } from "qalendar";
export default {
  name: "CalendarEvents",
  props: {
    jsonProps: {
      type: Object,
      required: false
    },
  },
  components:{
    Qalendar,
  },
  data(){
    return{
      config:{
        locale: "zh-TW",
        defaultMode: "month",
        disableModes:["day"],
        style: {
          colorSchemes: {
            meetings: {
              color: "#fff",
              backgroundColor: "#131313",
            },
            sports: {
              color: "#fff",
              backgroundColor: "#ff4081",
            },
          },
        },
        isSilent: false,
        showCurrentTime: true,
        isSmall: false,
        month:{
          showTrailingAndLeadingDates: true,
          showEventsOnMobileView: true,
        }
      },

    }
  }

}
</script>

<style scoped>
  #calendar-container{
  padding: 5%;
}
</style>