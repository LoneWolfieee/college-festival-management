import React, { useState } from "react";

function RegisterEvent({ eventId }) {
  const [formData, setFormData] = useState({ name: "", email: "", team: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/register/${eventId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => alert("Registration successful!"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Team (if applicable)"
        value={formData.team}
        onChange={(e) => setFormData({ ...formData, team: e.target.value })}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterEvent;
