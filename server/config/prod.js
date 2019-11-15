// my production keys
module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY 
};

//heroku config:set GOOGLE_CLIENT_ID=178074774606-pooitk1n18s6jpr6bmhjk0461075ss9r.apps.googleusercontent.com
//heroku config:set GOOGLE_CLIENT_SECRET=sXPaiE23hvu29cO2HfmoGEJb
//heroku config:set MONGO_URI=mongodb+srv://AliciaLivingston:starrpatty@cluster0-1028p.gcp.mongodb.net/test?retryWrites=true&w=majority
//heroku config:set COOKIE_KEY=joesmith 
