const express = require('express')


const todoroute = require('./routes/todos')

const srv = express();

srv.set('view engine','hbs')
srv.set('views',__dirname + "/views")  // we can omit this it is not required .

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))
//srv.set('view engine','hbs')
// srv.set('views', 'views ')

srv.use('/todos' , todoroute)

srv.listen(3489)
// only backend no api