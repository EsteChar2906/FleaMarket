const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

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




