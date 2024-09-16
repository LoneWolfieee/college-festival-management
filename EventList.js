import React, { useState, useEffect } from "react";

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <div className="event-list">
      {events.map((event) => (
        <div key={event.id} className="event">
          <h2>{event.name}</h2>
          <p>{event.description}</p>
          <p>Schedule: {event.date}, {event.time}</p>
          <p>Venue: {event.venue}</p>
          <p>Prerequisites: {event.prerequisites}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;
