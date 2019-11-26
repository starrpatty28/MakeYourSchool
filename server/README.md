# MAKE YOUR SCHOOL

#### Description

This is a Webapp the Highschool's  Administration can use to get feedback from students on making a safer and better learning environment.


# Installation

1. Fork and Clone the Repo 
```
git clone https://github.com/starrpatty28/MakeYourSchool.git
```

2. Create a file .env file in the root folder 
```
GOOGLE_CLIENT_ID: <your_google_client_key>
GOOGLE_CLIENT_SECRET: <your_google_client_secret_key>

mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[database][?options]]
COOKIE_KEY: <your_choice>

STRIPE_PUBLISHABLE_KEY: <pk_test_publishable_key>
STRIPE_SECRET_KEY: <sk_test_secret_key>

SEND_GRID_KEY: <sendgrid_api_key>

```
3. Install Dependencies <br>

 Server:  ``` npm install ``` <br>
 
 Client:  ``` npm run client-install```
 
 4. Run the Application
 
 Server: ``` nodemon index.js ``` <br>
 
 Client: ``` npm start ```

# BUILT WITH

* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com)
* [Mongoose](https://mongoosejs.com/) 
* [Axios](https://www.npmjs.com/package/axios)
* [React](https://reactjs.org/)
* [React-Redux](https://react-redux.js.org/)   
* [Materialize](https://materializecss.com/) 

# API's USED

* [Google API](https://developers.google.com/)
* [Stripe API](https://stripe.com/docs/api)
* [Twilio Sendgrid](https://www.twilio.com/sendgrid)

## License
[MIT](https://choosealicense.com/licenses/mit/)
