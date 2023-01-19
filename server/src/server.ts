import Fastify from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fastify();

/*
Aqui declaramos quais clients 
podem acessar nossa aplicação 
e consuma os dados


app.register(cors, {
  origin: ['http://localhost:3000']
});
*/

app.register(cors);

app.register(appRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => console.log(`Http Server running in http://localhost:3333`));
