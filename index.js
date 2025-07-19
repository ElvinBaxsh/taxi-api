const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MOCK DATA: Sürücülər (sonra DB ilə əvəz edəcəyik)
let drivers = [
  {
    id: 1,
    name: "Elvin Məmmədov",
    phone: "+994501112233",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    status: "active",
    rating: 4.5,
    car: {
      model: "Toyota Prius",
      plate: "90-AB-123",
      color: "white"
    }
  }
];

// ➕ Get all drivers
app.get("/api/drivers", (req, res) => {
  res.json(drivers);
});

// ➕ Add new driver
app.post("/api/drivers", (req, res) => {
  const newDriver = {
    ...req.body,
    id: Date.now(),
  };
  drivers.push(newDriver);
  res.status(201).json(newDriver);
});

// 📝 Edit driver
app.patch("/api/drivers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = drivers.findIndex(d => d.id === id);
  if (index === -1) return res.status(404).json({ message: "Driver not found" });

  drivers[index] = { ...drivers[index], ...req.body };
  res.json(drivers[index]);
});

// ❌ Delete driver
app.delete("/api/drivers/:id", (req, res) => {
  const id = parseInt(req.params.id);
  drivers = drivers.filter(d => d.id !== id);
  res.json({ message: "Driver deleted" });
});

app.listen(PORT, () => {
  console.log(`🚕 Taxi API running on http://localhost:${PORT}`);
});

