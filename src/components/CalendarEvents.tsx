import React, { useState } from 'react';
import events_data from '../data/events.json';
import { FullCalendar } from 'primereact/fullcalendar';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import listPlugin from '@fullcalendar/list';



const CalendarEvents = () => {
	let cal_options = {
		plugins: [ dayGridPlugin, timeGridPlugin, interactionPlugin, resourceTimelinePlugin, listPlugin ],
		defaultDate: Date.now(),
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
		},
		editable: true
	};

	const [ events, setEvents ] = useState(events_data);
	const [ options, setOptions ] = useState(cal_options);

	return (
		<div style={{width: "75%", margin: "0 auto", paddingTop: "1rem"}}>
			<FullCalendar events={events} options={options} />
		</div>
	);
};

export default CalendarEvents;
