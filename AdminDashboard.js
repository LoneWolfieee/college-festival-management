import React, { useState, useEffect } from "react";

function AdminDashboard() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    fetch('/api/registrations')
      .then((res) => res.json())
      .then((data) => setRegistrations(data));
  }, []);

  return (
    <div className="admin-dashboard">
      <h2>Registrations</h2>
      <ul>
        {registrations.map((registration) => (
          <li key={registration.id}>{registration.name} registered for {registration.event}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdminDashboard;
