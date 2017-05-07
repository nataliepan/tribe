<template lang="html">
<div class="create_schedule_wrapper">
<div class="container">
        <HeaderBar :page="page"></HeaderBar>

        <section class="add-sessions-venue-type">
            <div class="add-session-button">
                <button class="add-session">Add Session</button>
            </div>
            <div class="event-dates">
                <span class="event-dates-title">Event Dates</span>
                <i class="fa fa-calendar-o"></i>
                <span class="event-dates"></span>
            </div>
        </section>


        <EventSchedule></EventSchedule>

    </div>
</div>
</template>

<script type="text/babel">
import HeaderBar from '../../shared-components/HeaderBar';
import EventSchedule from './EventSchedule';

export default {
    name: 'EventMakeSchedule',
    data() {
      return {
        page: {
          title: 'Scheduling'
        }
      };
    }, 
   components: {
      HeaderBar, 
      EventSchedule,
    },
    computed: {
      // pageName() {
      //   return this.$route.name;
      // },
    },
    methods: {
      // toggleSidenav() {
      //   this.$refs.sidenav.toggle();
      // },
    },
  };

</script>

<style>
  .container {
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
}

header {
  display: flex;
  margin: 10px auto 0;
  width: 90%;
  height: 10%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgb(243,243,243);
}

a {
  text-decoration: none;
  color: black;
}

.logo-image {
  display: inline-block;
  height: 100%;
}

.left {
  justify-content: flex-start;
  display: flex;
  align-items: center;
}

.right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.right-header {
  margin: 10px;
}
.schedule {
  cursor: pointer;
  color: #4990E2;
  display: none;
  font-size: 21px;
}

.right-header-bell {
  margin: 0 10px;
}

.right-header,
.event-header-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #4990E2;
}

.add-sessions-venue-type {
  max-width: 35%;
  border: 1px solid black;
  border-radius: 100px;
}

.add-session {

}

</style>
