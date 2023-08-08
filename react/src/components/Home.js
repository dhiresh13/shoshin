import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home({ id, name }) {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  function handleBooking() {
    if (text) {
      fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        body: JSON.stringify({ test: text }),
        headers: {
          "content-type": "Application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("The booking is successful");
          setText("");
        });
    }
  }

  return (
    <div>
      Data:
      {data &&
        data.map((d, i) => {
          return (
            <Link key={i} to={`/items/${d.name}`}>
              <div>{d.name}</div>
            </Link>
          );
        })}
      <div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button onClick={() => handleBooking()}>Submit</button>
      </div>
    </div>
  );
}

export default Home;
