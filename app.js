import express from 'express';
import helmet from 'helmet';

import getActivitiesByID from "./models/activitiesFunctions.js";

const app = express();
const port = 3000;

app.use(helmet());

app.get('/', (req, res) => {
res.send("Hello world it's meng zi dui!")
});

app.listen(port, () => {
    console.log(`We are now listening on port ${port}`)
})


app.get("/activities/:id", async (req,res) => {
   //const { id } = req.params;
   const id = req.params.id; // id from reqest param's object
   const payload =  await getActivitiesByID(id); // call the function getID
   //if (payload)) {
    res.json(payload);
  }
);

//http://localhost:3000/



//Build a request handler function in app.js, including status code, payload and error messaging.