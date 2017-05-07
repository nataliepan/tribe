<template lang="html">
<div class="event_schedule">
	<div class="time-strip">
	<div class="date-row"></div>
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
	<div class="days-wrapper">
	<ul class="days-inner-wrapper">
		<li class="day-row" v-for="day in days">
		<div class="date-row">{{day.date}}</div>
			<div v-bind:style="session.style" class="session" v-for="session in day.sessions">
				<div >{{session.title}}</div>
				<div class="starttime">{{session.starttime}}</div>
			</div>
		</li>
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
        	date: 'Friday, May 6',
        	sessions:[{
        		title: 'Yoga Nidra',
        		starttime: '1:00PM',
        		endtime: '2:00PM',
        		style: {
        			top: '245px',
        			height: '40px',
        			backgroundColor: 'rgba(245,166,35,0.20)'
        		}
        		
        	},
        	{
        		title: 'Meditation Yoga',
        		starttime: '9:00AM',
        		endtime: '10:30AM',
        		style: {
        			top: '25px',
        			height: '40px',
        			backgroundColor:  'rgba(208,2,27,0.20)'
        		}
        	},
        	{
        		title: 'Fundamentals',
        		starttime: '2:15PM',
        		endtime: '3:30PM',
        		timescale: '1.5',
        		style: {
        			top: '215px',
        			height: '40px',
        			backgroundColor: 'rgba(74,144,226,0.20)'
        		}
        	},
        	{
        		title: 'Intermediate',
        		starttime: '3:00PM',
        		endtime: '4:30PM',
        		timescale: '1.5',
        		style: {
        			top: '215px',
        			height: '60px',
        			backgroundColor: 'rgba(245,166,35,0.20)'
        		}
        	},
        	]
        },
        {
        	date: 'Saturday, May 7',
		sessions:[{
        		title: 'Yoga Nidra',
        		starttime: '8:00PM',
        		endtime: '2:00PM',
        		timescale: '1.5',
        		style: {
        			top: '0px',
        			height: '60px',
        			backgroundColor: 'rgba(245,166,35,0.20)'
        		}
        	},
        	{
        		title: 'Meditation Yoga',
        		starttime: '1:30AM',
        		endtime: '10:30AM',
        		timescale: '1.5',
        		style: {
        			top: '200px',
        			height: '60px',
        			backgroundColor: 'rgba(189,16,224,0.20)'
        		}
        	}]
        },
        {
        	date: 'Sunday, May 8',
			sessions:[{
        		title: 'Yoga Nidra',
        		starttime: '1:00PM',
        		endtime: '2:00PM',
        		timescale: '1.5',
        		style: {
        			top: '200px',
        			height: '60px',
        			backgroundColor: 'rgba(189,16,224,0.20)'
        		}
        	},
        	{
        		title: 'Meditation Yoga',
        		starttime: '9:00AM',
        		endtime: '10:30AM',
        		timescale: '1.5',
        		style: {
        			top: '250px',
        			height: '60px',
        			backgroundColor: 'rgba(208,2,27,0.20)'
        		}
        	},
        	{
        		title: 'Fundamentals',
        		starttime: '3:00PM',
        		endtime: '4:30PM',
        		timescale: '1.5',
        		style: {
        			top: '150px',
        			height: '60px',
        			backgroundColor: 'rgba(245, 166, 35, 0.2)'
        		}
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

.event_schedule{
	    margin-top: 40px;
}
  .time-strip{
  	padding-top: 10px;
width: 100px;
    text-align: right;
    color: #888;
    position: absolute;
  }

  .time-strip li{
  	margin-bottom: 25px;
    font-size: 17px;
  }

  .days-wrapper{

  	padding-left: 110px;
  }

  .days-wrapper .days-inner-wrapper{
  	display: flex;
  }

  .day-row{

  	position: relative;
  	width: 190px;
  	height: 620px;
  	border-left: 1px solid #888;
  	display: inline-block;
  	
  }


  .session{
	width: 180px;
    position: relative;
    left: 0;
    padding: 5px;
    margin: 0 5px;
    border-radius: 4px;
  }

  .starttime{
  	font-size: 10px;
  	text-transform: uppercase;
  	    line-height: 1em;

  }

  .date-row{
  	    	    text-align: center;
    font-size: 19px;
    height: 20px;
    margin-bottom: 20px;
  }
</style>