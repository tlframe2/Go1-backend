const app = require("./app");

const port = process.env.PORT || 5000;

// Starts server and listens for connections on port 5000 by default
app.listen(port, () => console.log(`Listening on port ${port}...`));