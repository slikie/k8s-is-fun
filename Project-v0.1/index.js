const express = require('express');
const app = express()


const PORT = process.env.PORT || 23224



app.listen(PORT, 'localhost', () => {
  console.log(`Server started in port ${PORT}`);
});
