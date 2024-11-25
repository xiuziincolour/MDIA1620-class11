const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
We will create an application where we will register people into an array. 
We will have a functionat that allows the host to check the registry to see all the user registered.
Use a for loop to go through all the users registered

This application also allows the host add users to the banned list and check them when they need to

CHALLENGE, when adding a user, if the user exist in the ban list, do not add the user
- hint, you will need a boolean to check... let checkBan = false...

CHALLENGE 2, use the settings to allow the adding the go through or not
*/

/* Planning
Register users into a list.
View the list of registered users.
Add users to a banned list.
View the list of banned users.
*/

let users = [];
let banned = [];
let settings = {
  addRegistry:true,
  checkRegistry:true,
  banPerson:true,
  checkBans:true
}

function AddUserToRegistry() {
  //user readline to prompt for the name of the user to be added
  //console.log("This is for register.")
  readline.question("Give me a user name.", _user =>{
    users.push(_user);
    StartApp();
  })
}

function CheckRegistry() {
   //loop through all the users and log them
  console.log("Here are all the registried users.")
  for(let i=0; i<users.length; i++){
    console.log(`The registried users is ${users[i]}`)
}
  StartApp();
}

function BanUser(){
  //use readline to prompt for the name of the user to be banned
  readline.question("Who do you want ban?", _user =>{
    banned.push(_user);
    StartApp();
  })
  }

function CheckBanned(){
  //loop through all the banned users and log them
  console.log("Here are all the banned users.")
  for(let i=0; i<banned.length; i++){
    console.log(`The banned users is ${banned[i]}`)
  }
  StartApp();
}

function StartApp() {
  readline.question("What would you like to do? ", (_command) => {
    if(_command === "register"){
      //add a new user
      AddUserToRegistry();
    }
    else if (_command === "check registry"){
      //show the loop
      CheckRegistry();
    }
    else if(_command === "ban user"){
      //add a banned user name
      BanUser();
    }
    else if (_command === "check banned"){
      //show banned users
      CheckBanned();
    }
    
    else if (_command === "quit") {
      readline.close();}
 
  });
}

StartApp();
