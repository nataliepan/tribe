<template lang="html">
<div class="session_edit_wrapper">

<section class="event-name-details">
         <el-popover
            class="popoverText"
            placement="top-start"
            trigger="click"
            ref="popoverText"
          >
            <div class="buttonSet"><button class="button button--chromeless u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--highlightMenu " disabled="disabled" data-action="bold" data-action-source="quote_menu"><span class="svgIcon svgIcon--bold svgIcon--21px"><svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21"><path d="M10.308 17.993h-5.92l.11-.894.783-.12c.56-.11.79-.224.79-.448V5.37c0-.225-.113-.336-.902-.448H4.5l-.114-.894h6.255c4.02 0 5.58 1.23 5.58 3.13 0 1.896-1.78 3.125-3.79 3.463v.11c2.69.34 4.25 1.56 4.25 3.57 0 2.35-2.01 3.69-6.37 3.69l.02.01h-.02zm-.335-12.96H8.967V10.5h1.23c1.788 0 2.79-1.23 2.79-2.683 0-1.685-1.004-2.803-3.006-2.803v.02zm-.223 6.36h-.783v5.588l1.225.23h.22c1.67 0 3.01-1.004 3.01-2.792 0-2.122-1.566-3.016-3.69-3.016h.018z" fill-rule="evenodd"></path></svg></span></button><button class="button button--chromeless u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--highlightMenu " disabled="disabled" data-action="italic" data-action-source="quote_menu"><span class="svgIcon svgIcon--italic svgIcon--21px"><svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21"><path d="M9.847 18.04c-.533 0-2.027-.64-1.92-.853l2.027-7.68-.64-.214-1.387 1.494-.427-.427c.534-1.173 1.707-2.667 2.774-2.667.533 0 2.24.534 2.133.854l-2.133 7.786.533.214 1.6-1.067.427.427c-.64 1.066-1.92 2.133-2.987 2.133zm2.347-11.733c-.96 0-1.387-.64-1.387-1.387 0-1.067.747-1.92 1.493-1.92.854 0 1.387.64 1.387 1.493-.107 1.067-.747 1.814-1.493 1.814z" fill-rule="evenodd"></path></svg></span></button><button class="button button--chromeless u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--highlightMenu " data-action="link" data-action-source="quote_menu"><span class="svgIcon svgIcon--link svgIcon--21px"><svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21"><path d="M2.2 13.17c0-.575.125-1.11.375-1.605l.02-.018v-.02c.014 0 .02-.008.02-.02 0-.014 0-.02.02-.02.122-.256.31-.52.576-.805l3.19-3.18c0-.008 0-.015.01-.02.01-.006.01-.013.01-.02.44-.413.91-.7 1.44-.853-.63.71-1.03 1.5-1.19 2.36-.04.24-.06.52-.06.81 0 .14.01.24.02.33L4.67 12.1c-.19.19-.316.407-.376.653a1.33 1.33 0 0 0-.057.415c0 .155.02.314.06.477.075.21.2.403.376.58l1.286 1.31c.27.276.62.416 1.03.416.42 0 .78-.14 1.06-.42l1.23-1.25.79-.78 1.15-1.16c.08-.09.19-.22.28-.4.103-.2.15-.42.15-.67 0-.16-.02-.31-.056-.45l-.02-.02v-.02l-.07-.14c0-.01-.013-.03-.04-.06l-.06-.13-.02-.02c0-.02-.01-.03-.02-.05a.592.592 0 0 0-.143-.16l-.48-.5c0-.042.015-.1.04-.15l.06-.12 1.17-1.14.087-.09.56.57c.023.04.08.1.16.18l.05.04c.006.018.02.036.035.06l.04.054c.01.01.02.025.03.04.03.023.04.046.04.058.04.04.08.09.1.14l.02.02c0 .018.01.03.024.04l.105.197v.02c.098.157.19.384.297.68a1 1 0 0 1 .04.255c.06.21.08.443.08.7 0 .22-.02.43-.06.63-.12.71-.44 1.334-.95 1.865l-.66.67-.97.972-1.554 1.57C8.806 17.654 7.98 18 7.01 18s-1.8-.34-2.487-1.026l-1.296-1.308a3.545 3.545 0 0 1-.913-1.627 4.541 4.541 0 0 1-.102-.88v-.01l-.012.01zm5.385-3.433c0-.183.023-.393.07-.63.13-.737.448-1.362.956-1.87l.66-.662.97-.983 1.56-1.56C12.48 3.34 13.3 3 14.27 3c.97 0 1.8.34 2.483 1.022l1.29 1.314c.44.438.744.976.913 1.618.067.32.102.614.102.87 0 .577-.123 1.11-.375 1.605l-.02.01v.02l-.02.04c-.148.27-.35.54-.6.81l-3.187 3.19c0 .01 0 .01-.01.02-.01 0-.01.01-.01.02-.434.42-.916.7-1.427.83.63-.67 1.03-1.46 1.19-2.36.04-.26.06-.53.06-.81 0-.14-.01-.26-.02-.35l1.99-1.97c.18-.21.3-.42.35-.65.04-.12.05-.26.05-.42 0-.16-.02-.31-.06-.48-.07-.19-.19-.38-.36-.58l-1.3-1.3a1.488 1.488 0 0 0-1.06-.42c-.42 0-.77.14-1.06.41L11.98 6.7l-.79.793-1.157 1.16c-.088.075-.186.21-.294.4-.09.233-.14.46-.14.67 0 .16.02.31.06.452l.02.02v.023l.06.144c0 .006.01.026.05.06l.06.125.02.02c0 .01 0 .013.01.02 0 .005.01.01.01.02.05.08.1.134.14.16l.47.5c0 .04-.02.093-.04.15l-.06.12-1.15 1.15-.1.08-.56-.56a2.31 2.31 0 0 0-.18-.187c-.02-.01-.02-.03-.02-.04l-.02-.02a.375.375 0 0 1-.1-.122c-.03-.024-.05-.043-.05-.06l-.1-.15-.02-.02-.02-.04L8 11.4v-.02a5.095 5.095 0 0 1-.283-.69 1.035 1.035 0 0 1-.04-.257 2.619 2.619 0 0 1-.093-.7v.007z" fill-rule="evenodd"></path></svg></span></button><div class="buttonSet-separator"></div><button class="button button--chromeless u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--highlightMenu is-active is-touched" data-action="h3" data-action-source="quote_menu"><span class="svgIcon svgIcon--tBigger svgIcon--21px"><svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21"><path d="M3 2v4.747h1.656l.383-2.568.384-.311h3.88V15.82l-.408.38-1.56.12V18h7.174v-1.68l-1.56-.12-.407-.38V3.868h3.879l.36.311.407 2.568h1.656V2z" fill-rule="evenodd"></path></svg></span></button><button class="button button--chromeless u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--highlightMenu " data-action="h4" data-action-source="quote_menu"><span class="svgIcon svgIcon--tSmaller svgIcon--21px"><svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21"><path d="M4 5.5v4.74h1.657l.384-2.569.384-.312h2.733v8.461l-.41.38-1.91.12V18h7.179v-1.68l-1.912-.12-.405-.38V7.359h2.729l.36.312.408 2.57h1.657V5.5z" fill-rule="evenodd"></path></svg></span></button><button class="button button--chromeless u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--highlightMenu " data-action="cycle-quote" data-action-source="quote_menu"><span class="svgIcon svgIcon--blockquote svgIcon--21px"><svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21" data-multipart="true"><path d="M15.48 18.024c-2.603 0-4.45-2.172-4.45-4.778 0-3.263 2.498-6.3 6.517-8.803l1.297 1.303c-2.497 1.63-3.91 3.042-3.91 5.214 0 2.824 3.91 3.582 3.91 3.91.11 1.41-1.194 3.15-3.366 3.15h.004v.004z"></path><path d="M6.578 18.024c-2.606 0-4.453-2.172-4.453-4.778 0-3.263 2.497-6.3 6.515-8.803l1.303 1.303c-2.606 1.63-3.907 3.042-3.907 5.106 0 2.823 3.91 3.58 3.91 3.91 0 1.518-1.304 3.257-3.368 3.257z"></path></svg></span></button><div class="buttonSet-separator"></div><button class="button button--chromeless u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--highlightMenu " data-action="highlight" data-action-source="quote_menu"><span class="svgIcon svgIcon--privatenoteFilled svgIcon--25px"><svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><g fill-rule="evenodd"><path d="M17.662 4.552H7.346A4.36 4.36 0 0 0 3 8.898v5.685c0 2.168 1.614 3.962 3.697 4.28v2.77c0 .303.35.476.59.29l3.904-2.994h6.48c2.39 0 4.35-1.96 4.35-4.35V8.9c0-2.39-1.95-4.346-4.34-4.346zM16 14.31a.99.99 0 0 1-1.003.99h-4.994C9.45 15.3 9 14.85 9 14.31v-3.02a.99.99 0 0 1 1-.99v-.782a2.5 2.5 0 0 1 2.5-2.51c1.38 0 2.5 1.13 2.5 2.51v.782c.552.002 1 .452 1 .99v3.02z"></path><path d="M14 9.81c0-.832-.674-1.68-1.5-1.68-.833 0-1.5.84-1.5 1.68v.49h3v-.49z"></path></g></svg></span></button></div>
          </el-popover>


            <input v-popover:popoverText type="text" name="event-name" id="event-name" placeholder="Session Name" v-model="name">
            <textarea name="event-details" id="event-details" cols="50" rows="10" placeholder="Session details..." v-model="description"></textarea>
        </section>

        <section class="event-time-location-new-session">
            <div class="set-event-new-session">
                <div class="start-end-time event-time-section">
                    <div class="session-date-div">
                        <label for="session-date-label">Date</label>
                        <input type="date" name="session-date" id="session-date">
                    </div>
                </div>

                <div class="start-end-time event-time-section">
                    <div class="start-session">
                        <label for="session-start-time">Start Date</label>
                        <input type="time" name="session-start-time" id="session-start-time">
                    </div>
                    <div class="end-session">
                        <label for="session-end-time">End Date</label>
                        <input type="time" name="session-end-time" id="session-end-time">
                    </div>
                </div>
            </div>

            <div class="venue-select">
                <label>Select Venue</label>
                <p>Select Venue<i class="fa fa-chevron-down" aria-hidden="true"></i></p>
                <ul class="venue-dropdown">
                    <li class="venue-item">Galvanize</li>
                    <li class="venue-item">Yelp</li>
                    <li class="venue-item">Pinterest</li>
                </ul>
            </div>

            <div class="session-type-select">
                <label>Session Type</label>
                <p>Select Session Type<i class="fa fa-chevron-down" aria-hidden="true"></i></p>
                <ul class="session-type-dropdown">
                    <li class="session-type-item">Keynote</li>
                    <li class="session-type-item">Networking</li>
                    <li class="session-type-item">Marketing Panel</li>
                    <li class="session-type-item">Technology Panel</li>
                    <li class="session-type-item">Workshop</li>
                </ul>
            </div>

            <div class="new-sessions-add-people-section">
                <span class="add-people-title">People</span>
                <i class="fa fa-plus"></i>
            </div>

            <div class="new-session-btn-div">
                <button class="new-session-btn">Create Session</button>
            </div>

        </section>


</div>
</template>

<script type="text/babel">

</script>

<style>

.session_edit_wrapper{
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	width: 45%;
	background: #fff;
	border-left: 1px solid #999;
    height: 100%;
}

.set-event-new-session {
    margin: 0;
}

.session-date-div label {
    font-size: 21px;
}

#session-date,
#session-start-time,
#session-end-time {
    display: block; 
    margin-top: 10px;   
}

.end-session {
    margin-top: 10px;
}

.event-time-location-new-session {
    padding-top: 70px;
    width: 90%;
    margin: 0 auto;
}

.venue-select p,
.session-type-select p {
    border: 1px solid black;
    width: 241px;
    padding: 2px 10px 2px 30px;
    margin-top: 10px;
}

.venue-select i,
.session-type-select i {
    margin-right: 20%;
}

.venue-dropdown {
    width: 241px;
    height: 41px;
}
.venue-item {
    border: 1px solid black;
    padding: 2px 10px 2px 30px;
}

.venue-dropdown,
.session-type-dropdown {
    display: none;
}

.session-type-select {
    padding-top: 30px;
}

.new-session-btn-div {
    text-align: center;
    margin-top: 30px;
}

.new-session-btn-div {
  margin-bottom: 50px;
}

.new-session-btn {
  font-size: 21px;
  width: 200px;
  height: 50px;
  border: 1px solid black;
  border-radius: 100px;
}

.fa-plus {
  cursor: pointer;
}

.new-sessions-add-people-section {
    margin-top: 20px;
}
  
</style>
