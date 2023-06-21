  
  import {v4 as uuidv4} from 'uuid';
import router from '../routes/user.js';

let users = [
  
]

  
  export const createUser =(req,res)=>{

    const user = req.body;
     
    users.push({ ...user, id: uuidv4()});

    res.send(`user with the name ${user.firstName} and added to db..`);

}
  export const getUsers= (req,res)=>{
    console.log(users);

    res.send(users);
    
}
 export const getUser = (req,res)=>
 {
     const {id}=req.params;
 
     const foundUsers=users.find((user)=>user.id===id)
    res.send(foundUsers);
 }
 export const deleteUsers = (req,res)=>{
    const {id}=req.params;
    users=users.filter((user)=> user.id!==id)

res.send(`user with id ${id} deleted from the database.`);

}
export const updateUsers = (req,res)=>{
    const {id} = req.params;

    const {firstName,lastName,age} = req.body
    const userToBeUpdated = users.find((user)=>user.id===id);

    if(firstName) users.firstName=firstName;

    if(lastName)    users.lastName = lastName;
    
    if(age)    users.age = age;
    

    res.send(`user with the id ${id} had been updated`);
}
