const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser');
const router = express.Router();
const List = require('./model/ToDoModel');

// Database
const db = require('./config/config');

// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

const app = express();


const PORT = process.env.PORT || 3525;

app.listen(PORT, console.log(`Server started on port ${PORT}`));


// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//home page route and view
// routes to display pages
app.get('/', (req, res) => res.render('index'));

//post route to add workouts to data base
app.post('/', (req, res) => {
    let {todoItem} = req.body;   
    // Validate Fields
    // Insert into table
      List.create({
        todoItem
      })
        .catch(err => console.log(err));
    });
  



