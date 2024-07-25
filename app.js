import express from 'express';
import helmet from 'helmet';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const port = 3000;

import {
    getActivitiesByUserID,
    getActivitiesByActivityID,
    addNewActivity,
    updateActivity
    } from "./models/activitiesFunctions.js";

app.use(express.json())

app.use(helmet());

app.get('/', (req, res) => {
res.send("Hello world it's meng zi dui!")
});

app.listen(port, () => {
    console.log(`We are now listening on port ${port}`)
})


app.get("/activities/user/:id", async (req,res) => {
   //const { id } = req.params;
   const id = req.params.id; // id from reqest param's object
   try {
            const payload = await getActivitiesByUserID(id);
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


app.get("/activities/:id", async (req,res) => {
    //const { id } = req.params;
    const id = req.params.id; // id from reqest param's object
    try {
        const payload = await getActivitiesByActivityID(id);
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
        user_id: uuidv4(),
        id: uuidv4(),
        activity_submitted: Date.now(),
        ...newActivity,
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

app.put("/activities", async (req, res) => {
    const updates = req.body
    try {
        const payload = await updateActivity(updates);
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



// app.put("/activities/:id", async (req, res) => {
//     const update = req.body
//     try {
//             const payload = await getActivitiesByUserID(id);
//             res.status(200).json({
//                 "success": true,
//                 "payload": payload
//             });
//         } catch (error) {
//             res.status(404).json({
//                 "error": error.message
//             });
//         }
//     const updatedActivity = {
//         activity_submitted: Date.now(),
//         activity_type: update.activity_type,
//         activity_duration: update.activity_duration
//     }
// })
    
//http://localhost:3000/


//Build a request handler function in app.js, including status code, payload and error messaging.