const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/api/services", (req, res) => {
  let arr = [
    { id: 1, name: "ABC" },
    { id: 2, name: "XYZ" },
  ];
  res.json({ data: arr });
});

app.get("/api/services/:id", (req, res) => {
  res.json({ message: "Example route on the backend" });
});

app.post("/api/bookings", (req, res) => {
  res.json({ message: "Example route on the backend" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
