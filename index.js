import app from './app.js';

app.listen(process.env.PORT || 4002, () => {
  // port 4002
  console.log(`Server is running on port ${process.env.PORT || 4002}`)
});