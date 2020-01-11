const route = require('express').Router()

let todos = [
    {task:"this is task"},
    {task:"this is is another task"}
]
route.get('/',function(req,res){
  res.render('todos' , {todos})  // this todos means todos.js  it return todos array   
})

route.post('/',function(req,res){
    todos.push({   
        task:req.body.newtodo   // it pushes object in todos array
    })
   // res.redirect('.')
    res.redirect('todos')
})
module.exports = route