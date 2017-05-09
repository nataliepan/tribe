<template lang="html">
<div class="create_schedule_wrapper">
<div class="container">
        <HeaderBar :page="page"></HeaderBar>

<div class="flex">
        <section class="add-sessions-venue-type">
            <div class="add-session-button add-sessions-venue-type-section">
                <button class="add-session" @click="make">Add Session</button>
            </div>
            <div class="event-dates add-sessions-venue-type-section">
                <span class="event-dates-title">Event Dates</span>
                <i class="fa fa-calendar-o"></i>
                <span class="event-date">May 5-7, 2017</span>
            </div>
            <div class="add-sessions-venue-type-section">
                <span class="venue-title">Venues</span>
                <i class="fa fa-plus"></i>
                <ul class="venue-list">
                    <li class="venue">Galvanize</li>
                    <li class="venue">Yelp</li>
                    <li class="venue">Pinterest</li>
                </ul>
            </div>
            <div class="add-sessions-venue-type-section">
                <span class="session-type-title">Session Type</span>
                <i class="fa fa-plus"></i>
                <ul class="session-type-list">
                    <li class="session-type"><span>Keynote</span></li>
                    <li class="session-type"><span>Networking</span></li>
                    <li class="session-type"><span>Marketing Panel</span></li>
                    <li class="session-type"><span>Technology Panel</span></li>
                    <li class="session-type"><span>Workshop</span></li>
                </ul>
            </div>
        </section>


        <EventSchedule  :makesession="makesession"></EventSchedule>
</div>
<EventSessionEdit></EventSessionEdit>
    </div>
</div>
</template>

<script type="text/babel">
import HeaderBar from '../../shared-components/HeaderBar';
import EventSchedule from './EventSchedule';
import EventSessionEdit from './EventSessionEdit';

export default {
    name: 'EventMakeSchedule',
    data() {
      return {
        page: {
          title: 'Scheduling'
        },
        makesession: 'false'
      };
    },
   components: {
      HeaderBar,
      EventSchedule,
      EventSessionEdit
    },
    computed: {
     make() {
      this.makesession = 'true';
       },
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
.flex{
  display: flex;
}

.add-sessions-venue-type-section {
  margin: 80px;
}

.add-session-button {
  margin-bottom: 50px;
}

.add-session {
  font-size: 21px;
  width: 200px;
  height: 50px;
  border: 1px solid black;
  border-radius: 100px;
}

.event-dates-title {
  font-size: 30px;
  display: block;
  margin-bottom: 1.5%;
}

.event-date {
  margin-left: 1.5%;
  font-size: 21px;
}

.venue-title,
.session-type-title {
  font-size: 30px;
  margin-right: 1%;
}

.fa-plus {
  cursor: pointer;
}

.venue-list,
.session-type-list {
  padding-left: 3%;
  margin-top: 1.5%;
}

.venue,
.session-type {
  padding: 0.75%;
}

.session-type-list {
  list-style-type: disc;
}

.session-type:first-child {
  color: #7ED321;
}

.session-type:nth-child(2) {
  color: #4990E2;
}

.session-type:nth-child(3) {
  color: #D0011B;
}

.session-type:nth-child(4) {
  color: #BD0FE1;
}

.session-type:nth-child(5) {
  color: #F6A623;
}

.session-type span {
  color: black;
}

</style>
