const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const env = require('./env');

const app = express();
const port = env.PORT;

app.use(morgan('tiny'));

app.use(express.static(path.join(__dirname, '/public')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'views/index.html'));
// });

app.get('/', (req, res) => {
  res.render('index', { list: ['a', 'b'], title: 'Geeks Corner' });
});

app.listen(port).on('listening', () => {
  debug(`Server is listening on ${chalk.green(port)}`);
});
