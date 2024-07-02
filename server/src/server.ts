import App from "./app";

const PORT = Number(process.env.PORT) || 8080;
const app = new App();

app.start(PORT);