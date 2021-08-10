import express from 'express';
import cors from 'cors';
import routes from '@shared/http/routes/index';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
  console.log('Server started on http://localhost:3333, 🏆');
});
