import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Import required modules directly from 'swiper'
import { EffectCoverflow, Pagination } from "swiper";

function Explore() {
  const [map, setMap] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedItinerary, setSelectedItinerary] = useState(null);

  useEffect(() => {
    const platform = new window.H.service.Platform({
      apikey: "kI0ecskW_Q5AbhmS8pUl2Qy-vCIJuo4UTLx0SLctbnY",
    });

    const defaultLayers = platform.createDefaultLayers();

    const mapInstance = new window.H.Map(
      document.getElementById("mapContainer"),
      defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 },
      }
    );

    window.addEventListener("resize", () => mapInstance.getViewPort().resize());

    const mapEvents = new window.H.mapevents.MapEvents(mapInstance);
    new window.H.mapevents.Behavior(mapEvents);

    window.H.ui.UI.createDefault(mapInstance, defaultLayers);

    setMap(mapInstance);

    return () => {
      mapInstance.dispose();
    };
  }, []);

  const handleSearch = async (e) => {
    setQuery(e.target.value);

    if (e.target.value.length >= 1) {
      const AUTOCOMPLETION_URL =
        "https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json";
      const params = new URLSearchParams({
        query: e.target.value,
        maxresults: 5,
        apikey: "kI0ecskW_Q5AbhmS8pUl2Qy-vCIJuo4UTLx0SLctbnY",
      });

      try {
        const response = await fetch(
          `${AUTOCOMPLETION_URL}?${params.toString()}`
        );
        const data = await response.json();
        setSearchResults(data.suggestions || []);
      } catch (error) {
        console.error();
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleResultClick = (result) => {
    const { locationId } = result;

    const geocoder = map.getPlatform().getGeocodingService();

    geocoder.geocode({ locationId }, (result) => {
      const location =
        result.Response.View[0].Result[0].Location.DisplayPosition;
      const coords = { lat: location.Latitude, lng: location.Longitude };

      map.setCenter(coords);

      const marker = new window.H.map.Marker(coords);
      map.addObject(marker);
    });

    setSearchResults([]);
    setQuery(result.label);
  };

  const itineraries = [
    {
      id: 1,
      title: "Location 1",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/40eRHezB6bm4m2f0xBZbSQ/348s.jpg",
    },
    {
      id: 2,
      title: "Location 2",
      image:
        "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_640,q_80,w_640/v1/clients/toronto/horseshoe_tavern_toronto_band_on_stage_b6a054e5-25a6-4472-bc84-10678c5ab625.jpg",
    },
    {
      id: 3,
      title: "Location 3",
      image:
        "https://www.calacademy.org/sites/default/files/styles/manual_crop_square_460px/public/uploads/2279/images/academy-cafe.jpg?itok=lZK1JZCy&c=efb67acb32a83f930be4e87592bd3e98",
    },
    {
      id: 4,
      title: "Location 4",
      image:
        "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Location 5",
      image:
        "https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Location 6",
      image:
        "https://plus.unsplash.com/premium_photo-1663932464735-e0946d833749?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Location 7",
      image:
        "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const handleItineraryClick = (itinerary) => {
    setSelectedItinerary(itinerary);
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          zIndex: 1000,
        }}
      >
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for a location..."
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "15px",
            border: "1px solid #ccc",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
          }}
        />
        {searchResults.length > 0 && (
          <ul
            style={{
              listStyleType: "none",
              margin: 0,
              padding: "10px",
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
              position: "absolute",
              top: "45px",
              width: "100%",
              zIndex: 1000,
            }}
          >
            {searchResults.map((result) => (
              <li
                key={result.locationId}
                onClick={() => handleResultClick(result)}
                style={{
                  padding: "10px 0",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                }}
              >
                {result.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        style={{
          position: "absolute",
          top: "80px",
          left: "10px",
          right: "10px",
          zIndex: 1000,
          height: "180px",
          borderRadius: "15px", // Optional: rounded corners for a softer look
          backgroundColor: "rgba(0, 0, 0, 0.2)", // Slight dark background to enhance contrast
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)", // Shadow added
        }}
      >
        {itineraries.map((itinerary) => (
          <SwiperSlide key={itinerary.id}>
            <div
              style={{
                height: "100%",
                borderRadius: "10px",
                background: `url(${itinerary.image}) center/cover no-repeat`,
                display: "flex",
                alignItems: "flex-end",

                cursor: "pointer",
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "30px",
                color: "white",
              }}
              onClick={() => handleItineraryClick(itinerary)}
            >
              <h3>{itinerary.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        id="mapContainer"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>

      {selectedItinerary && (
        <div
          style={{
            position: "absolute",
            bottom: "150px",
            left: "10px",
            width: "60%",
            background: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)",
            padding: "15px",
            zIndex: 1000,
          }}
        >
          <h2 style={{ fontFamily: "'Bebas Neue', cursive" }}>
            {selectedItinerary.title}
          </h2>
          <p style={{ fontFamily: "'Abel', sans-serif" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button
            style={{
              fontFamily: "'Abel', sans-serif",
              padding: "8px 12px",
              borderRadius: "5px",
              backgroundColor: "#AF0106",
              color: "#FFFBEB",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => setSelectedItinerary(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Explore;
