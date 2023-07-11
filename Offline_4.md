# 1. Tạo cấu trúc folders:

- src
  |-controllers
  |-routes
  |-app.js

# 2. Edit package.json:

```json
  "name": "onclass",
  "version": "1.0.0",
  "description": "",
  "main": "src/app.js",
  "type": "module",
  "scripts": {
    "start": "nodemon app.js",
    "server": "json-server -w db.json --port 3000",
    "dev": "concurrently \"json-server -w db.json --port 3000\" \"nodemon --experimental-specifier-resolution=node src/app.js\""
  },
```

# 3 Tái cấu trúc lại controllers, routes theo source code có sẵn trong github.
