import React from "react";
import "./Search.css"; // You'll define styles in this file

function Search() {
  return (
    <div className="search-container">
      <header className="search-header">
        <input
          type="text"
          placeholder="Search Event..."
          className="search-input"
        />
      </header>

      <div className="search-mood-section">
        <h2>I'm in the Mood for Something...</h2>
        <div className="mood-options">
          <button className="mood-button active">Musical</button>
          <button className="mood-button">Eat & Drink</button>
          <button className="mood-button">Creative</button>
          <button className="mood-button">Social</button>
        </div>
      </div>

      <div className="trending-itineraries-section">
        <h2>Trending Itineraries</h2>
        <div className="itineraries-grid">
          <div className="itinerary-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1661315459644-18297c559777?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Night Out"
            />
            <div className="itinerary-info">
              <h3>Night Out</h3>
              <p>Available at Venue</p>
            </div>
          </div>
          <div className="itinerary-item">
            <img
              src="https://images.unsplash.com/photo-1713651904968-d771b784a9c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Paint the Town Red"
            />
            <div className="itinerary-info">
              <h3>Paint the Town Red</h3>
              <p>Available at Venue</p>
            </div>
          </div>
          <div className="itinerary-item">
            <img
              src="https://images.unsplash.com/photo-1468359601543-843bfaef291a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Solo Vibes"
            />
            <div className="itinerary-info">
              <h3>Solo Vibes</h3>
              <p>Available at Venue</p>
            </div>
          </div>
          <div className="itinerary-item">
            <img
              src="https://images.unsplash.com/photo-1523630389663-56a52388ddd4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Weekend Fun"
            />
            <div className="itinerary-info">
              <h3>Weekend Fun</h3>
              <p>Available at Venue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
