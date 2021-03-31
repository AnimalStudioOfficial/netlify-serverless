<h1 align="center">NETLIFY SERVERLESS</h1>
<p align="center"><i>A serverless Backend application developed with Express.js and deployed 🚀 in Netlify functions.</i></p>
<div align="center">
  <a href="https://github.com/TheWorstOne/airlines-backend/stargazers"><img src="https://img.shields.io/github/stars/TheWorstOne/airlines-backend" alt="Stars Badge"/></a>
<a href="https://github.com/TheWorstOne/airlines-backend/network/members"><img src="https://img.shields.io/github/forks/TheWorstOne/airlines-backend" alt="Forks Badge"/></a>
<a href="https://github.com/TheWorstOne/airlines-backend/pulls"><img src="https://img.shields.io/github/issues-pr/TheWorstOne/airlines-backend" alt="Pull Requests Badge"/></a>
<a href="https://github.com/TheWorstOne/airlines-backend/issues"><img src="https://img.shields.io/github/issues/TheWorstOne/airlines-backend" alt="Issues Badge"/></a>
<a href="https://github.com/TheWorstOne/airlines-backend/graphs/contributors"><img alt="GitHub contributors" src="https://img.shields.io/github/contributors/TheWorstOne/airlines-backend?color=2b9348"></a>
<a href="https://github.com/TheWorstOne/airlines-backend/blob/master/LICENSE"><img src="https://img.shields.io/github/license/TheWorstOne/airlines-backend?color=2b9348" alt="License Badge"/></a>
</div>
<br>
<p align="center"><i>Interested in the project? Please visit my <a href="https://awesome-github-readme-profile.netlify.app">website</a></i></p>
<br>

<!-- ABOUT THE PROJECT -->
_It is a good software engineering practice to separate portions of your code function to work independently of other parts. Since your codes are made up of functions basically, serverless functions allow you to deploy those functions without the complexity of managing a server to run them_ [(Olutunmbi Banto, 2020)](https://itnext.io/how-to-build-and-deploy-serverless-functions-to-netlify-d37418f6f7be). This repository was created as part of a Big Data project in which services must be consumed from a database made in MondoDB with the historical information of the `flights of US airlines`. The APIs will be consumed by a [SimpleMongoCRUD](https://github.com/TheWorstOne/SimpleMongoCRUD) Frontend developed in Angular.

<p align="center">
  <a href="#">
    <img src="assets/netlifybanner.png" alt="Logo" width="" height="">
  </a>
</p>
<br>

If you like this Repo, Please click the :star:

<!-- TABLE OF CONTENTS -->
## **Contents**
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Deployment](#deployment)
  - [License](#license)
  - [Contact](#contact)

  <!-- GETTING STARTED -->
## **Getting Started**

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps. Also, you can check this [tutorial](https://itnext.io/how-to-build-and-deploy-serverless-functions-to-netlify-d37418f6f7be).

### **Prerequisites**

List of things you need to use this project and how to install them.
* netlify CLI
  ```sh
  npm install -g netlify-cli
  ```

### **Installation**

1. Clone the repo
   ```sh
   git clone https://github.com/TheWorstOne/netlify-serverless.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Enter your MONGO URI in `.env` in the root directory for local deployment
   ```SH
   MONGO_DB_CONNECTION="mongodb+srv://<username>:<password>@<database>.n5qog.mongodb.net/<collection>?retryWrites=true&w=majority"
   ```

<!-- USAGE EXAMPLES -->
## **Usage**

To use this project in your local environment, follow the steps below.

_For a more detailed explanation you can check this [guide](https://itnext.io/how-to-build-and-deploy-serverless-functions-to-netlify-d37418f6f7be)_

1. To initialize the root folder with netlify
   ```sh
   netlify init
   ```
2. For local deployment you can use both commands
   ```sh
   npm start
   netlify dev
   ```
3. To access serverless functions in the browser, use the URL
   ```sh
   http:localhost:PORT/.netlify/functions/app/
   ```
4. You can check all the functions in the `src/routes/flights.js`
   ```JS
    router.post("/new", FlightController.createFlight);
    router.get("/number/:FlightNum", FlightController.getFlightByNumber);
    router.get("/search/:flightId", FlightController.getFlightById);
    router.get("/numbers", FlightController.getFlightNumbers);
    router.put("/update/:_id", FlightController.updateFlight);
    router.delete("/delete/:flightId", FlightController.deleteFlight);
   ```
    To access these services you must use the following URI `http:localhost:PORT/.netlify/functions/app/flights/<serverless function>`


<!-- DEPLOYMENT -->
## **Deployment**

If you want to deploy your own serverless on netlify, follow the next steps. Make sure your github repository is `linked to your project on the netlify website`
1. Deploy to production
   ```sh
   netlify deploy --prod
   ```
2. If you have problems with environment variables at deployment time, you can use the interface provided by the netlify website. In your site overview go to `Site settings > Build & deploy > Environment > Edit variables`

<p align="center">
  <a href="#">
    <img src="assets/env.png" alt="Logo" width="" height="">
  </a>
</p>

<!-- LICENSE -->
## **License**

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## **Contact**

Miguel Ángel Macías - 👨‍💻[Linkedin](https://www.linkedin.com/in/mangelladev/)

My Personal Website: ✨[TBD](https://github.com/TheWorstOne/)

