<template lang="html">
<div class="event_schedule">
<div class="time-strip">
	<ul>
	<li>8:00 A</li>	
	<li>9:00 A</li>
	<li>10:00 A</li>
	<li>11:00 A</li>	
	<li>12:00 A</li>
	<li>1:00 P</li>
	<li>2:00 P</li>	
	<li>3:00 P</li>
	<li>4:00 P</li>
	<li>5:00 P</li>	
	<li>6:00 P</li>
	<li>7:00 P</li>
	<li>8:00 P</li>
	</ul>
</div>

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
        		title: 'Fundamentals',
        		starttime: '3:00PM',
        		endtime: '4:30PM',
        		color: ''
        	}
        	]
        }
        ]
      };
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
  .time-strip{
  	width: 100px;
  	text-align: right;
  }
</style>