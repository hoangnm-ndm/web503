# Bước 1:

```
npm i json-server concurrently --save-dev
npm i axios
```

- Create a file db.json -> copy contents for db.json
- Configuge package.json

```
  "dev": "concurrently \"json-server -w db.json --port 3000\" \"nodemon app.js\""
```

# Bước 2: CRUD

- Code

```
npm run dev
```
