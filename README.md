# Frontend Mentor - Todo App

![Design preview for the Todo app coding challenge](/cover.jpg)

## The challenge

The challenge was to build out this todo app and get it looking as close to the design as possible.

The users are able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode

## How to Run

1. Install server dependecies with `npm install`
2. `cd front-end` and `npm install` to install front-end dependencies.
3. Create a `.env` file in the project root and add:

```
MONGODB_URI=Your MongoDB Cloud URL
PORT=5000
```

4. In the project root folder run the express server with `npm run server`
5. And `npm run client` for the front-end server.
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tech used:

- Front-End:
  - Create React App
  - Axios
- Back-End:
  - Express
  - Mongoose
