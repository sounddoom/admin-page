# Test Assignment for Sigma Software

Single Page Application that inculde Sign in and User list pages.
22/03/2019

### contacts

E-mail: avangardsv@gmail.com

## General usage notes

### Technology and libraries

The logic of this project is based on the technologies react and redux.

Also in this project are used the technologies as redux-form, redux-thunk, redux-router, axios, axios-mock-adapter. 

## Working principles

### Component Form

### Login

By click button 'submit' calling function handleSubmit, than mail, password and login function receiving from

props and destructuring, after that email and password directing to login function and

sending to Mock and receiving JWT. JWT recording in local storage and history changes to the user list.

### Component UserList

### Receive user list

After authorization componentDidMount calling function getUserData wherein request is sending in Mock

than Mock send user list. After that user list dispatching to store.

### Add users

By click button 'Add user' calling function handleSubmit, then values passing validation,

directing to add function and sanding to Mock.After that values will be added to user list

array and modified user list will be dispatched to store.

### Delete users

By click button 'Delete' calling function handleDelete, then by event target is taken items id which sending to Mock,

where it by splice method deleting selected user. After that modified array directing back and dispatching to store.

### Logout

By click button 'Logout' calling function handleLogout which calling function log out, then tokin deleting and 

dispatching action that changing reducers property isAuth to false.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.



### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

