#CHANGE#
[changeis.life](changeis.life)

Have you ever wanted to help someone in need, but didn’t have any spare change on hand? CHANGE lets you to make anonymous payments anytime you want, allowing recipients to visit partner vendors to purchase clothes and food with your donation. 

##How it works##
Every donation recipient has a 4-digit PIN. When donors start CHANGE, they can enter the PIN, the type of donation they’d like to make (food or clothing), and the amount they wish to donate. Recipients can visit partner vendors to redeem their donations and purchase goods. Once a vendor signs in, they can search for a PIN to determine the account balance and make charges.


## Run the app ##
  >$ npm start
  
  >Then navigate to http://localhost:3000/ in your browser. You will see the "Welcome to Express" text.

Proposed donor/shelter objects expected during sign up and sign in
Format: JSON string
```
donor/signup
donor = {
  firstname: string,
  lastname: string,
  username: string
  password: string
  email: string
  // profile image // further extension
  // fb_id   // passport facebook
}

donor/signin
donor = {
    email || username:                
    password:
}

shelter/signup
shelter = {
    orgName: string
    username: string
    password: string
    email: string
    // profile image // further extension
    // fb_id   // passport facebook
}

shelter/signin
shelter = {
    email || username:
    password:
}

userType: donor/organization
```
