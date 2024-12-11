import express from 'express';
import taskRoutes from './routes/tasks';

const app = express();

app.use(express.json());
app.use('/task', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});