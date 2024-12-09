const express = require('express');
const app = express()


const PORT = process.env.PORT || 23224


app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server started in port ${PORT}`);
});
