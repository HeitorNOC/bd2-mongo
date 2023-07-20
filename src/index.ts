import express from 'express';
import { config } from 'dotenv';
import { connect } from './database/mongo'; // Importar a função connect
import dotenv from 'dotenv';
import { router } from './router';

const main = async () => {
  config();
  dotenv.config();

  const app = express();

  app.use(express.json());

  await connect(); // Usar a função connect para estabelecer a conexão

  app.use(router);

  const port = process.env.PORT || 8000;

  app.listen(port, () => console.log(`Listening on port ${port}`));
};

main();
