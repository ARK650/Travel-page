import React from "react";

function Profile() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Profile</h1>
      <p>
        Manage your account, view your bookings, and customize your preferences.
      </p>
      <img
        src="https://via.placeholder.com/300x200.png?text=Profile+Image"
        alt="Profile"
        style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}
      />
    </div>
  );
}

export default Profile;
