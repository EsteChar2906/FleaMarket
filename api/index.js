import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(3001, () => {
    console.log('% listening at 3001'); 
  });




