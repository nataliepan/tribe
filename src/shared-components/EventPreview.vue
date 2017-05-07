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
	        </div>
           <footer class="event-article-footer">
            <a href="" class="svgIcon svgIcon--heart svgIcon--25px is-flushLeft"><svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><path d="M12.5 21a.492.492 0 0 1-.327-.122c-.278-.24-.61-.517-.978-.826-2.99-2.5-7.995-6.684-7.995-10.565C3.2 6.462 5.578 4 8.5 4c1.55 0 3 .695 4 1.89a5.21 5.21 0 0 1 4-1.89c2.923 0 5.3 2.462 5.3 5.487 0 3.97-4.923 8.035-7.865 10.464-.42.35-.798.66-1.108.93a.503.503 0 0 1-.327.12zM8.428 4.866c-2.414 0-4.378 2.05-4.378 4.568 0 3.475 5.057 7.704 7.774 9.975.243.2.47.39.676.56.245-.21.52-.43.813-.68 2.856-2.36 7.637-6.31 7.637-9.87 0-2.52-1.964-4.57-4.377-4.57-1.466 0-2.828.76-3.644 2.04-.1.14-.26.23-.43.23-.18 0-.34-.09-.43-.24-.82-1.27-2.18-2.03-3.65-2.03z" fill-rule="evenodd"></path></svg></a>

            <a href="" class="svgIcon subscribeSvg">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="25px" height="25px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve">
<g>
  <path d="M422.953,176.019c0.549-0.48,1.09-0.975,1.612-1.498l21.772-21.772c12.883-12.883,12.883-33.771,0-46.654
    l-40.434-40.434c-12.883-12.883-33.771-12.883-46.653,0l-21.772,21.772c-0.523,0.523-1.018,1.064-1.498,1.613L422.953,176.019z"/>
  <polygon points="114.317,397.684 157.317,440.684 106.658,448.342 56,456 63.658,405.341 71.316,354.683  "/>
  <polygon points="349.143,125.535 118.982,355.694 106.541,343.253 336.701,113.094 324.26,100.653 81.659,343.253 
    168.747,430.341 411.348,187.74  "/>
</g>
</svg>
            </a>
          </footer>
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
const imagePath = require.context('../assets/img', true);

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

.event-article-footer{
  padding:5px;
   border-top: 1px solid rgba(0,0,0,0.09);
}

.svgIcon{
  fill: #666;
}
.svgIcon:hover{
  fill: blue;
}


.subscribeSvg{
  float: right;
}
</style>