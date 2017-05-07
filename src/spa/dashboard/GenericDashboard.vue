<template lang="html">
<div class="generic_dashboard_wrapper">
<div class="container">
    <header>
      <div class="left">
        <a href="left-logo">
          <span class="logo-image">
            <img src="tee.jpg" alt="letter T">
          </span>
        </a>
      </div>
      <div class="right">
        <a href="create_event.html" target="_blank"><span class="schedule">Schedule An Event</span></a>
        <i class="fa fa-search right-header" aria-hidden="true"></i>
        <i class="fa fa-bell-o right-header" aria-hidden="true"></i>
        <span class="member-img-main"></span>
      </div>
    </header>
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
    <section>
      <article>
        <div class="event-header">
          <span class="event-header-img"></span>
          <span class="event-header-company">Tesla</span>
          <span class="event-date">May 10</span>
        </div>
        <div class="event-hero-image">
          <img src="elon_musk.png">
        </div>
        <h3>Test Drive The Newest Model 3</h3>
        <span class="event-description">TL;DR It's pretty awesome</span>

      </article>
    </section>
    <aside>
      
    </aside>
    </div>
  </div>   
</div>
</template>

<script type="text/babel">

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

article {
  margin: 0 auto;
  width: 95%;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04); 
  border: 1px solid rgba(0,0,0,0.09);
}

.event-hero-image {
  width: 100%;
  margin: 0 auto;
}

.event-hero-image img {
  max-height: 100%;
  max-width: 100%;
}

h3 {
  margin: 5px 0;
  padding: 0;
}

.event-description {
  color: rgb(143,143,143);
}
</style>
