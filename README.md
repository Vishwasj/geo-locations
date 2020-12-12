## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### About Geo Location Application

1. Application will allow the user to search the geo location of the city.
2. It fetches the data from http://www.geonames.org/export/web-services.html. Account needs to be created to    
   get the geo names.
3. Application requires 2 environment variables to be passed in the application by declaring them in .env file.
   2 variables are:
        a. REACT_APP_USER_NAME - username of the account created above
        b. REACT_APP_MAX_ROWS - indicates the number of rows to be returned from API
4. Details of the geo names which are returned are displayed.
5. The application also displays the last 5 searches user performed.
6. Multiple search requests cannot be made before the previous search result is shown
7. All application related exceptions are handled.
