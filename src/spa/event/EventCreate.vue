<template lang="html">
<div class="create_event_wrapper">
<div class="container">
       <HeaderBar :page="page"></HeaderBar>

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
                <button @click.stop="createevent">Create Schedule</button>
            </div>
        </section>
    </div>
</div>
</template>
<script src="https://cdn.jsdelivr.net/vue.resource/1.3.1/vue-resource.min.js"></script>
<script type="text/babel">
import HeaderBar from '../../shared-components/HeaderBar';

// import gql from 'graphql-tag';

//   // GraphQL query
//   const postsQuery = gql`
//     query allPosts {
//       viewer {
//         sessions {
//           day,
//           title,
//           speakers,
//           slot
//         }
//       }
//     }
//   `;

  export default {
    created(){
   
          
    },
    components: {
      HeaderBar,
    },
    data() {
      return {
        page: {
          title: 'Create Event'
        }
        // viewer: '',
        // loading: 0,
        // user: '',
        // cnpj: '',
        // password: '',
      };
    }, 
    // // Apollo GraphQL
    // apollo: {
    //   // Local state 'posts' data will be updated
    //   // by the GraphQL query result
    //   viewer: {
    //     // GraphQL query
    //     query: postsQuery,
    //     // Will update the 'loading' attribute
    //     // +1 when a new query is loading
    //     // -1 when a query is completed
    //     loadingKey: 'loading',
    //   },
    // },
    computed: {
      // cnpjError() {
      //   // Exemplo de computed properties
      //   return (this.errors) ? this.errors.first('cnpj') : '';
      // },
      // emailError() {
      //   // Exemplo de computed properties
      //   return (this.errors) ? this.errors.first('email') : '';
      // },
    },
    methods: {
      createevent() {
        //this.$router.push({ path: '/produtos' });
         // POST /someUrl
        const data = {

        }
        this.$http.post('http://localhost:3000/test', data).then(response => {

         // get status
          response.status;

         // get status text
          response.statusText;

         // get 'Expires' header
          response.headers.get('Expires');

         // get body data
          this.someData = response.body;

          this.$router.push({ path: '/eventmakeschedule' });
       }, response => {
          // error callback
        });
        
      },
    },
  };
</script>

<style>
.container {
  margin: 0 auto;
  font-family: 'Open Sans', sans-serif;
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


</style>
