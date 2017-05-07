<template lang="html">
<div class="create_event_wrapper">
<div class="container">
        <header class="create-event-header">
          <div class="left">
            <span class="logo-image">
                <a href="left-logo">
                    <img src="../../assets/img/tee.jpg" alt="letter T">
                </a>
              </span>
              <span class="plan_event_header">Create Event</span>
          </div>
          <div class="right">
            <span class="schedule">Save<i class="fa fa-chevron-down"></i></span>
            <i class="fa fa-bell-o right-header-bell" aria-hidden="true"></i>
            <i class="fa fa-ellipsis-h"></i>
            <div class="member-img-create"><img src="../../assets/img/shock.jpg" alt="Shocked face"></div>
          </div>
        </header>

        <section class="event-name-details">
            <input type="text" name="event-name" id="event-name" placeholder="Event Name">
            <textarea name="event-details" id="event-details" cols="50" rows="10" placeholder="Event details..."></textarea>
        </section>

        <section class="event-time-location">
            <div class="set-event">
                <div class="start-end-time event-time-section">
                    <div class="start">
                        <label for="start-date">Start Date</label>
                        <input type="date" name="start-date" id="start-date">
                    </div>
                    <div class="end">
                        <label for="start-date">End Date</label>
                        <input type="date" name="end-date" id="end-date">
                    </div>
                </div>
                <div class="start-end-time event-time-section">
                    <div class="start">
                        <label for="start-time">Start Date</label>
                        <input type="time" name="start-time" id="start-time">
                    </div>
                    <div class="end">
                        <label for="start-time">End Date</label>
                        <input type="time" name="end-time" id="end-time">
                    </div>
                    <div class="all-day-checkbox">
                        <label for="all-day-checkbox">All Day</label>
                        <input type="checkbox" name="all-day-checkbox" id="all-day-checkbox">
                    </div>
                </div>
                <div class="event-location event-time-section">
                    <label for="event-location">Location Address</label>
                    <input type="text" name="event-location" id="event-location">
                </div>
                <div class="event-tags event-time-section">
                    <label for="event-tags">Tags (Separate by comma)</label>
                    <input type="text" name="event-tags" id="event-tags">
                </div>
                <div class="plan-event-finish-text">Head to the next step!</div>
            </div>
            <div class="schedule-btn">
                <button>Create Schedule</button>
            </div>
        </section>
    </div>
</div>
</template>

<script type="text/babel">

</script>

<style>
span.plan_event_header {
  margin-left: 20px;
  font-size: 21px;
}

i.fa-chevron-down {
  margin-left: 10px;
}

div.member-img-create {
  width: 99px;
  height: 99px;
}

div.member-img-create img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}

header.create-event-header {
  border-bottom: 1px solid #D8D8D8;
}

section.event-name-details,
section.event-time-location {
  padding-top: 50px;
  border-bottom: 1px solid #D8D8D8;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 50px;
}

input#event-name,
textarea {
  margin-left: 20%;
  display: block;
  border: 0;
  color: #9B9B9B;
}

input#event-name {
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 1.5%;
}

input[type="date"],
input[type="time"],
input#event-location,
input#event-tags {
  margin-top: 16px;
  height: 21px;
}

input#event-location,
input#event-tags {
  width: 50%;
}

textarea {
  font-size: 21px;
  resize: none;
  font-weight: 600;
}

#start-date,
#end-date,
#start-time,
#end-time {
  display: block;
}

div.start,
div.end,
div.all-day-checkbox {
  display: inline-block;
}

div.start,
div.end {
  min-width: 170px;
}

input#event-location,
input#event-tags {
  display: block;
}

div.set-event {
  margin-left: 20%;
}

div.event-time-section,
div.plan-event-finish-text {
  padding: 5% 0;
}

.plan-event-finish-text {
  color: #4990E2;
  font-size: 20px;
}

.schedule-btn {
  text-align: center;
}

.schedule-btn button {
  border: 2px solid #9B9B9B;
  border-radius: 100px;
  width: 220px;
  height: 60px;
  background-color: white;
  font-size: 21px;
  color: #9B9B9B;
}

@media (min-width: 800px) {
  .save {
    display: inline;
  }
}
</style>
