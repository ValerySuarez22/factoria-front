import React from 'react';
import './App.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarPage from './components/Calendar/CalendarPage';
// import AddEventForm from './components/Calendar/AddEventForm';

function App() {
  return (
    <div className="App">
      <CalendarPage />
        {/* <AddEventForm /> */}
    </div>
  );
}

export default App;
