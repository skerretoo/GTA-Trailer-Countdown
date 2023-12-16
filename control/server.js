const express = require('express');
const app = express();

// Your existing routes or middleware go here

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + '/404/index.html');
});

// Listen on the specified port
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});