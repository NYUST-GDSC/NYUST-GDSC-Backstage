<template>
  <EventStatistic></EventStatistic>
  <CalendarEvents></CalendarEvents>
</template>
<script>
import CalendarEvents from "@/components/index/CalendarEvents.vue";
import EventStatistic from "@/components/index/EventStatistic.vue";

export default {
  components: {EventStatistic, CalendarEvents}
}
</script>

<style scoped>

</style>