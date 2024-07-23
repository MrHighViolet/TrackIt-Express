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

//http://localhost:3000/