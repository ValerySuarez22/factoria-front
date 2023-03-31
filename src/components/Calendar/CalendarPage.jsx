import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import DatePicker from "react-datepicker";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AddEventForm from './AddEventForm';

const localizer = momentLocalizer(moment);

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          start: new Date(),
          end: new Date(moment().add(1, 'days')),
          title: 'Prueba de evento',
        },
      ],
    };
  }

  handleAddEvent = (event) => {
    const { events } = this.state;
    this.setState({ events: [...events, event] });
  }

  render() {
    return (
      <div>
        <h1>Calendario</h1>
        <div style={{ height: '500px' }}>
          <Calendar
            localizer={localizer}
            events={this.state.events}
            defaultDate={new Date()}
          />
        </div>
        <AddEventForm onAddEvent={this.handleAddEvent} />
      </div>
    );
  }
}

export default CalendarPage;