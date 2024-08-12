import React from "react";
import "./Account.css"; // You can style it in this CSS file

function Profile() {
  return (
    <div className="account-container">
      <header className="account-header">
        <h1>Settings</h1>
      </header>

      <div className="account-profile">
        <img
          src="https://i.pngimg.me/thumb/f/720/c3f2c592f9.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>

      <div className="account-options">
        <section className="settings-section">
          <h2>Settings</h2>
          <ul>
            <li>Account Settings</li>
            <li>Recent Explanation</li>
            <li>Communication Preferences</li>
            <li>Map Preferences</li>
            <li>Language & Region</li>
          </ul>
        </section>

        <section className="payment-rewards-section">
          <h2>Payment & Rewards</h2>
          <ul>
            <li>Payment Methods</li>
            <li>Rewards</li>
          </ul>
        </section>

        <section className="information-section">
          <h2>Information</h2>
        </section>
      </div>
    </div>
  );
}

export default Profile;
