const db = require('./database/setup'); // Do not edit/remove this line


// Create todo with name and priority (done = false by default)
function createTodo(name, priority) {
    const newtodo = new db({
        name: name,
        priority: priority,
        done: false
    });
       
    newtodo.save().then(() => {
        db.find().then(data => {
          console.log(data);
        });
              
    });
}
       
       
createTodo("courses", 2)



// Complete one todo by name (update property done = true)
function completeTodo(name) {
    db.updateOne(
        { name: name },
        { done: true }
       ).then(() => {
        
        db.find().then(data => {
          console.log(data);
        });
       
       });
}

completeTodo('Pay taxes')




// Delete one todo by name
function deleteTodo(name) {
 db.deleteOne({ name: name}).then(() => {
    db.find().then(data => {
        console.log(data)

    })
 })  
}

deleteTodo('Walk the dog')


module.exports = { createTodo, completeTodo, deleteTodo }; // Do not edit/remove this line
