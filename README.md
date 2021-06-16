# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:



### `rails api backend`

The backend database is provided in sqlite and built by running 'rails new backend-api --api' 

### `running the rails server`

After "cd'ing" into the backend-api folder, to start the proper rails server, you will have to run 'rails s -p 3010' as port 
3010 is the call that is made from the front end. 

### `prepping the rails server`

You will need to do the following for the rails server to work properly:

* bundle install
* rails db:migrate
* rails db:seed
* rails s -p 3010

This will seed some data as well as start the server for you in the correct port. 

### `frontend server`

You will need to run 'npm install' to load the proper packages as well as followed by 'npm start' to start the server. 
This will open the window in your browser and display the application. 

## Contributing

I owe a lot of thanks to Annabel Wilberding for her teaching, the other students in FlatIron schools
as well as Clever Programmer for teaching me the css I desired for this project. 

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)