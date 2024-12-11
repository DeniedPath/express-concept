const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasks');

app.use(express.json());
app.use('/task', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});