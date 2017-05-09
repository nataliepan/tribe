<template lang="html">
<div class="header_wrapper">
 <header class="create-event-header">
          <div class="left">
            <span class="logo-image">
                <a class="left-logo" href="">
                    <svg width="72px" height="73px" viewBox="0 0 72 73" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Artboard-2" stroke-width="11" stroke="#4990E2" fill="#50E3C2">
                                <polygon id="Triangle" points="36 13 63 67 9 67"></polygon>
                            </g>
                        </g>
                    </svg>
                </a>
              </span>
              <span class="plan_event_header">{{page.title}}</span>
          </div>
          <div class="right">
          <template v-if="page.createEventButton">
          	<a href="" @click.end="startEventCreation">Create An Event</a>
          	</template>
          	<template v-else>
            <a class="save">Save<i class="fa fa-chevron-down"></i></a>
            </template>
            <i class="fa fa-bell-o right-header-bell" aria-hidden="true"></i>
            <i class="fa fa-ellipsis-h"></i>
            <div class="member-img-create"><img :src="user.img" alt="Shocked face"></div>
          </div>
        </header>
</div>
</template>

<script type="text/babel">

export default {
    name: 'HeaderBar',
    data() {
      return {
        user: {
        	name: 'Natalie',
        	img: '/static/img/natalie.png'
        }
      };
    }, 
    props: ['page'],
    computed: {
      // pageName() {
      //   return this.$route.name;
      // },
    },
    methods: {
      startEventCreation() {
        this.$router.push({ path: '/eventcreate' });
      },
    },
  };
</script>

<style>
  span.plan_event_header {
  margin-left: 20px;
  font-size: 21px;
}

i.fa-chevron-down {
  margin-left: 10px;
}

.fa{
	margin-right: 10px;
}
div.member-img-create {
  width: 40px;
  height: 40px;
}

div.member-img-create img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}

header.create-event-header {
	padding: 10px 0 10px;
  border-bottom: 1px solid #D8D8D8;
}

@media (min-width: 800px) {
  .save {
    display: inline;
  }
}
</style>