<template lang="html">
<div class="generic_dashboard_wrapper">
<div class="container">
    <HeaderBar :page="page"></HeaderBar>
   <!--  <header>
      <div class="left">
        <a href="left-logo">
          <span class="logo-image">
            <img src="../../assets/img/tee.jpg" alt="letter T">
          </span>
        </a>
      </div>
      <div class="right">
        <a href="create_event.html" target="_blank" class="right-header"><span class="schedule">Schedule An Event</span></a>
        <i class="fa fa-search right-header" aria-hidden="true"></i>
        <i class="fa fa-bell-o right-header" aria-hidden="true"></i>
        <span class="member-img-main right-header"></span>
      </div>
    </header> -->
    <nav>
      <ul>
        <li><a href="/for-you">For You</a></li>
        <li><a href="/popular">Popular</a></li>
        <li><a href="/technology">Technology</a></li>
        <li><a href="/life">Life</a></li>
        <li><a href="/culture">Culture</a></li>
        <li><a href="/work">Work</a></li>
        <li><a href="/near-you">Near You</a></li>
        <li><a href="/active">Active</a></li>
        <li><a href="/bookmarks">Bookmarks</a></li>
        <li><a href="/More">More</a></li>
      </ul>
    </nav>
    <div class="main-content">
    <section class="main-body">
    <div class="eventPreviews">

    <article v-for="event in events" class="eventPreview-wrapper">
     <EventPreview :event="event"></EventPreview>
    </article>
   </div>
    </section>
     <aside class="main-side">
     </aside>
    <aside>

    </aside>
    </div>
  </div>
</div>
</template>







<script type="text/babel">
import EventPreview from '../../shared-components/EventPreview';
import HeaderBar from '../../shared-components/HeaderBar';
import gql from 'graphql-tag'; // for apollo


// GraphQL query
const postsQuery = gql`
  query allPosts {
    viewer {
      sessions {
            name,
             description,
              date,
                addressLine1,
                  city,
                   state,
                    img


      }
    }
  }
`;



export default {
    name: 'GenericDashBoard',
    components: {
      EventPreview,
      HeaderBar
    },


    data() {

      return {
        page:{
          title:'Schedule An Event',
          createEventButton: true,
        },
     events: [{
          name: 'Angel Hack SF',
          date: 'May 10',
          city: 'San Francisco',
          state: 'California',
          description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
          img: '/static/img/elon_musk.png',
          starttime: '1:00PM',
        },
        {
          name: 'Real Estate Business Conference',
          date: 'May 10',
          city: 'San Francisco',
          state: 'California',
          description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
          img: '/static/img/sunset.jpeg',
          starttime: '4:00PM',
        },
        {
          name: 'Shock Therapy',
          date: 'May 10',
          city: 'San Francisco',
          state: 'California',
          description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
          img: '/static/img/shock.jpg',
          starttime: '2:30PM',


    }, {
      name: 'Road Trip',
      date: 'May 12',
      city: 'San Francisco',
      state: 'California',
      description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
      img: '/static/img/1.png',
      starttime: '5:30PM',


},
{
  name: 'Anger Management',
  date: 'May 12',
  city: 'San Francisco',
  state: 'California',
  description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
  img: '/static/img/2.jpg',
  starttime: '8:30PM',


},

{
  name: 'Know how to Dress Your Man ',
  date: 'May 14',
  city: 'San Francisco',
  state: 'California',
  description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
  img: '/static/img/3.jpg',
  starttime: '2:30PM',


},
{
  name: 'Becoma a poker expert ',
  date: 'May 17',
  city: 'San Francisco',
  state: 'California',
  description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
  img: '/static/img/4.jpg',
  starttime: '12:30PM',


},
{
  name: 'Neighbor Hood Social ',
  date: 'May 15',
  city: 'San Francisco',
  state: 'California',
  description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
  img: '/static/img/5.png',
  starttime: '2:30PM',


},
{
  name: 'Chocolate Foundation ',
  date: 'May 14',
  city: 'San Francisco',
  state: 'California',
  description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
  img: '/static/img/6.png',
  starttime: '5:30PM',


},

{
  name: 'Riot Club',
  date: 'May 14',
  city: 'San Francisco',
  state: 'California',
  description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
  img: '/static/img/7.png',
  starttime: '2:30PM',


},
{
  name: 'Coachella ',
  date: 'May 11',
  city: 'San Francisco',
  state: 'California',
  description: 'Get involved with the best teams from AngelHack\'s Global Series as they go through our pre-accelerator',
  img: '/static/img/8.png',
  starttime: '2:30PM',


}








    ]




      };
    },

    // Apollo GraphQL
    apollo: {
      // Local state 'posts' data will be updated
      // by the GraphQL query result
      viewer: {
        // GraphQL query
        query: postsQuery,
        // Will update the 'loading' attribute
        // +1 when a new query is loading
        // -1 when a query is completed
        loadingKey: 'loading',
      },
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
.main-content{
margin: 10px auto 0;
width: 90%;
}
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

span.logo-image {
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

span.right-header,
span.event-header-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #4990E2;
}

nav {
  margin: 20px auto;
}

nav ul {
  margin: 0 5%;
  padding: 0;
  overflow-y: hidden;
  overflow-x: auto;
  display: flex;
  justify-content: space-between;
}

nav li {
  display: inline-block;
  list-style-type: none;
}

li a {
  color: rgb(143,143,143);
}

.eventPreviews{
  display: -webkit-flex;
    display: flex;
    flex-wrap:wrap;
    margin: 0 -10px 0;
}

.eventPreview-wrapper{
  margin: 10px;
   flex-grow: 1;
    flex-basis: 0;
}


@media (min-width: 800px) {
  .schedule {
    display: inline;
  }
}
</style>
