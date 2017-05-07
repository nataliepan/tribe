<template lang="html">
<div class="event_schedule">
scheule
</div>
</template>

<script type="text/babel">
export default {
    name: 'EventSchedule',
    data() {
      return {
        days: [{
        	sessions:[{
        		title: 'Yoga Nidra',
        		starttime: '1:00PM',
        		endtime: '2:00PM',
        		color: ''
        	},
        	{
        		title: 'Meditation Yoga',
        		starttime: '9:00AM',
        		endtime: '10:30AM',
        		color: ''
        	},
        	{
        		title: 'Fundamentals',
        		starttime: '3:00PM',
        		endtime: '4:30PM',
        		color: ''
        	},
        	]
        },
        {
		sessions:[{
        		title: 'Yoga Nidra',
        		starttime: '1:00PM',
        		endtime: '2:00PM',
        		color: ''
        	},
        	{
        		title: 'Meditation Yoga',
        		starttime: '9:00AM',
        		endtime: '10:30AM',
        		color: ''
        	},
        	{
        		title: 'Fundamentals',
        		starttime: '3:00PM',
        		endtime: '4:30PM',
        		color: ''
        	},
        	]
        },
        {
			sessions:[{
        		title: 'Yoga Nidra',
        		starttime: '1:00PM',
        		endtime: '2:00PM',
        		color: ''
        	},
        	{
        		title: 'Meditation Yoga',
        		starttime: '9:00AM',
        		endtime: '10:30AM',
        		color: ''
        	},
        	{
        		title: 'Fundamentals'
        		starttime: '3:00PM',
        		endtime: '4:30PM',
        		color: ''
        	},
        	]
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
  
</style>