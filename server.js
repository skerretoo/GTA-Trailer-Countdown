const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname)));
app.use((req, res) => {
  if (req.url.endsWith('.css')) {
    res.sendFile(path.join(__dirname, 'app', '404', '404.css'));
  } else {
    res.status(404).sendFile(path.join(__dirname, 'app', '404', '404.html'));
  }
});
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
