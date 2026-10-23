# Taxi API

Simple REST API for managing taxi drivers, built with Node.js and Express. Uses in-memory mock data (a database will be added later).

## Tech Stack

Node.js · Express · CORS · nodemon

## Getting Started

```bash
npm install
node index.js   # http://localhost:5000
```

## API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/drivers` | Get all drivers |
| POST | `/api/drivers` | Add a new driver |
| PATCH | `/api/drivers/:id` | Update a driver (404 if not found) |
| DELETE | `/api/drivers/:id` | Delete a driver |

### Example driver

```json
{
  "id": 1,
  "name": "Elvin Məmmədov",
  "phone": "+994501112233",
  "status": "active",
  "rating": 4.5,
  "car": { "model": "Toyota Prius", "plate": "90-AB-123", "color": "white" }
}
```

### Example request

```bash
curl -X POST http://localhost:5000/api/drivers \
  -H "Content-Type: application/json" \
  -d '{"name":"Aysel","status":"active","rating":5}'
```
