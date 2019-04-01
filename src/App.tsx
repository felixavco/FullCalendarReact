import React from 'react';
import './App.scss';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import CalendarEvents from './components/CalendarEvents';

const App = () =>  {
    return <CalendarEvents />
}

export default App;
