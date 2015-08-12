## Run the app ##
  >$ npm start
  
  >Then navigate to http://localhost:3000/ in your browser. You will see the "Welcome to Express" text.

Proposed donar/shelter objects expected during sign up and sign in
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
```
