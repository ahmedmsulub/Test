const express = require('express')
const router = express.Router();
const {v4: uuidv4}= require('uuid')

//everything will stored
let users=[]

//getting all the stored api

router.get('/', (req,res)=> {
res.send(users)
});
//sending new objects to the array
router.post('/',(req,res)=> {
    const user= req.body;
    // const userId = uuidv4();
    const userWithId = {...user, id: uuidv4()}
    users.push(userWithId)
    res.send(`user with the name ${user.firstName} added to the database `)
})
// deleting specific id matching the object through uuid
router.delete('/:id',(req,res)=> {
    const {id} = req.params;

    users = users.filter((user)=> user.id!==id)
    res.send(`user name with ${id} deleted from the database`)
})

//updating specific id thats matching the object through the uuid

router.patch('/:id', (req,res)=> {
    const {id} = req.params;
    const {firstName, lastName, age}= req.body;
    const user = users.find((user)=> user.id===id);
    if(firstName) {
        user.firstName=firstName;
    }
    if(lastName) {
        user.lastName=lastName;
    }
    if(age) {
        user.age=age;
    }

    res.send(`user with the id ${id} have been updated`)

})

module.exports=router;