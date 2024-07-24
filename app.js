import express from 'express';
import helmet from 'helmet';


const app = express();
const port = 3000;

import {
    getActivitiesByID,
    addNewActivity
    } from "./models/activitiesFunctions.js";

app.use(express.json())

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
   try {
            const payload = await getActivitiesByID(id);
            res.status(200).json({
                "success": true,
                "payload": payload
            });
        } catch (error) {
            res.status(404).json({
                "error": error.message
            });
        }
    });


app.post("/activities", async (req, res) => {
    const newActivity = req.body
    const activity = {
        ...newActivity,
        id: uuidv4(),
        activity_submitted: Date.now()
    }
    try {
        const payload = await addNewActivity(activity);
        res.status(200).json({
            "success": true,
            "new_activity": payload
        });
    } catch (error) {
        res.status(404).json({
            "error": error.message
        });
    }
});

    
//http://localhost:3000/


//Build a request handler function in app.js, including status code, payload and error messaging.