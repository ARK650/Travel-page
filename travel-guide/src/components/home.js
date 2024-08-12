import React from "react";
import "./Home.css"; // We'll add this CSS file for styling

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="menu-icon">&#9776;</div>
        <h1 className="header-title">HOME</h1>
        <a href="/login" className="login-link">
          Login/Sign Up
        </a>
      </header>

      <section className="featured-section">
        <img
          src="https://i0.wp.com/discotech.me/wp-content/uploads/2020/04/Screen-Shot-2020-04-16-at-4.16.46-PM.png?resize=1030%2C563&ssl=1"
          alt="Featured"
          className="featured-image"
        />
        <div className="featured-text">NIGHT OUT CLUB</div>
      </section>

      <section className="section">
        <h2 className="section-title">Trending Places</h2>
        <div className="trending-grid">
          <div className="trending-item">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/f5/9b/62/photo1jpg.jpg?w=600&h=400&s=1"
              alt="Cafe Dispensary"
              className="trending-image"
            />
            <div className="trending-text">Cafe Dispensary</div>
            <span className="trending-category">Restaurant</span>
          </div>
          <div className="trending-item">
            <img
              src="https://cafeesme.com/wp-content/themes/CafeEsme/img/cafe-esme-5.jpg"
              alt="Cafe Dispensary"
              className="trending-image"
            />
            <div className="trending-text">Cafe Dispensary</div>
            <span className="trending-category">Restaurant</span>
          </div>
          <div className="trending-item">
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/36/2f/f5/jazz-playing.jpg?w=600&h=400&s=1"
              alt="Cafe Dispensary"
              className="trending-image"
            />
            <div className="trending-text">Cafe Dispensary</div>
            <span className="trending-category">Restaurant</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Restaurant Near Me</h2>
        <div className="trending-grid">
          <div className="trending-item">
            <img
              src="https://images.otstatic.com/prod/25886358/1/large.jpg"
              alt="Cafe Dispensary"
              className="trending-image"
            />
            <div className="trending-text">Cafe Dispensary</div>
            <span className="trending-category">Restaurant</span>
          </div>
          <div className="trending-item">
            <img
              src="https://p.sharinpix.com/3/038bb0f/YXBwLnNoYXJpbnBpeC5jb20vaW1hZ2VfZXh0ZXJuYWxfdXJscy85ODQyMzJkYS03NzgyLTQwMTQtODBkZS00NWZiNGI2M2NmMmM/984232da-7782-4014-80de-45fb4b63cf2c.jpg"
              alt="Cafe Dispensary"
              className="trending-image"
            />
            <div className="trending-text">Cafe Dispensary</div>
            <span className="trending-category">Restaurant</span>
          </div>
          <div className="trending-item">
            <img
              src="https://www.calacademy.org/sites/default/files/styles/manual_crop_square_460px/public/uploads/2279/images/academy-cafe.jpg?itok=lZK1JZCy&c=efb67acb32a83f930be4e87592bd3e98"
              alt="Cafe Dispensary"
              className="trending-image"
            />
            <div className="trending-text">Cafe Dispensary</div>
            <span className="trending-category">Restaurant</span>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Events Near Me</h2>
        <div className="trending-grid">
          <div className="trending-item">
            <img
              src="https://s3-media0.fl.yelpcdn.com/bphoto/40eRHezB6bm4m2f0xBZbSQ/348s.jpg"
              alt="Event"
              className="trending-image"
            />
            <div className="trending-text">Night Event</div>
            <span className="trending-category">Entertainment</span>
          </div>
          <div className="trending-item">
            <img
              src="https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_640,q_80,w_640/v1/clients/toronto/horseshoe_tavern_toronto_band_on_stage_b6a054e5-25a6-4472-bc84-10678c5ab625.jpg"
              alt="Event"
              className="trending-image"
            />
            <div className="trending-text">Concert</div>
            <span className="trending-category">Music</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
