const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//set static path
app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());

const publicVapidKey = 'BPtJFghYdlELpwQ_HmeYwvldW4IvE520Ngb7DAtm9qehb1KYsEzSDB4XE6Fnt1WpHLvm2U3P56dij6o6KO2RhgU';
const privateVapidKey = 'J7gIQqHqNbtN3fsr5evR7vI4uJ5VIH77-2aDp02BCqk';

webpush.setVapidDetails('mailto:test@test.com', publicVapidKey, privateVapidKey);

//Subscribe Route
app.post('/subscribe', (req, res)=>{
  //get push subscription object
  const subscription = req.body;

  //Send 201 - Resource was created successfully
  res.status(201).json({});

  //Create Payload
  const payload = JSON.stringify({title: 'Push Test'});

  //Pass object into sendNotification
  webpush.sendNotification(subscription, payload).catch(err => console.error(err));
})

const port = 5000;

app.listen(port, ()=>{
  console.log(`Server started on port:${port}`);
});