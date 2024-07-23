import express from 'express';
import helmet from 'helmet';

const app = express();
const port = 3000;

app.use(helmet());

app.get('/', (req, res) => {
res.send("Hello world it's meng zi dui!")
});

app.listen(port, () => {
    console.log(`We are now listening on port ${port}`)
})

app.get("/activities/:id", (req,res) => {

    //const { activity } = res.body

    res.send(
        {
            "id": "54321234", // UUID
            "activity_submitted": "1719486190058", // simple Epoc timestamp (Date.now() in JS)
            "activity_type": "run", // choose some standard types
            "activity_duration": "30", // choose standard unit type (minutes probably)
        }
        )
    });

//http://localhost:3000/

