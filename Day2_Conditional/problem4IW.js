//Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

// In database data stored is...

let data_user = "xyz@gamil.com";

let data_pass = "123xyz";

//for login
let user = "xyza@gamil.com";

let pass = "123xyz";

if (data_user == user) {
  if (data_pass == pass) {
    console.log("Login Successfully.");
  } else {
    console.log("Incorrect Password.");
  }
}else{
  console.log("Invailid Username.");
}
