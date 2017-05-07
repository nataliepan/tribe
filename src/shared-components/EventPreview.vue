<template lang="html">
<div>
	<article class="eventPreview">
		     <div class="event-hero-image">
	             <img :src="event.img">
	        </div>
	        <div class="event-body">
	        <div class="event-header">
	          <span class="event-header-img"></span>
	       
	        </div>

	        <div class="event-blurb">
	         <div class="event-date">{{event.date}} {{event.starttime}}</div>
	          <h3 class="event-title">{{event.name}}</h3>
	         
	         <!--  <div class="event-header-company">{{event.name}}</div> -->
	          <!-- <div class="event-description">{{event.description}}</div> -->
	        </div>
	        <div class="event-article-footer">
	        </div>
	        </div>
	</article>

<!-- 	<article class="eventPreview_wrapper">
        <div class="event-header">
          <span class="event-header-img"></span>
          <span class="event-header-company">Tesla</span>
          <span class="event-date">May 10</span>
        </div>
        <div class="event-hero-image">
          <img src="../assets/img/office.jpeg">
        </div>
        <div class="event-blurb">
          <h3>Test Drive The Newest Model 3</h3>
          <span class="event-description">TL;DR It's pretty awesome</span>
        </div>
        <div class="event-article-footer">
        </div>
      </article>

      <article class="eventPreview_wrapper">
        <div class="event-header">
          <span class="event-header-img"></span>
          <span class="event-header-company">Tesla</span>
          <span class="event-date">May 10</span>
        </div>
        <div class="event-hero-image">
          <img src="../assets/img/sunset.jpeg">
        </div>
        <div class="event-blurb">
          <h3>Test Drive The Newest Model 3</h3>
          <span class="event-description">TL;DR It's pretty awesome</span>
        </div>
        <div class="event-article-footer">
        </div>
      </article> -->
</div>
</template>

<script type="text/babel">
const pathToCats = require.context('../assets/img', true);

export default {
    name: 'GenericDashboard',
    props: ['event'],
    // components: {
    //   EventPreview,
    // },
    // computed: {
    //   pageName() {
    //     return this.$route.name;
    //   },
    // },
    // methods: {
    //   toggleSidenav() {
    //     this.$refs.sidenav.toggle();
    //   },
    // },
};


</script>

<style>

.eventPreview {
 /* margin: 0 auto;
  width: 95%;*/
  box-shadow: 0 1px 4px rgba(0,0,0,0.04); 
  border: 1px solid rgba(0,0,0,0.09);
}

.event-header {

}

.event-hero-image {
	height:150px;
	width: inherit;
	overflow: hidden;
}

.event-hero-image img {
  min-height: 150px;
  text-align: center;
}

.event-title {
	display: inline-block;
}

.event-date{
	  color: rgb(143,143,143);
	  font-size: 12px;
	  text-transform: uppercase;
}

.event-body{
	 padding: 10px;
}

.event-description {
  color: rgb(143,143,143);

}
</style>