# Holden's Personal Website Frontend

### Author: Holden Gjuka

## About this Application
&nbsp;&nbsp;&nbsp;This application uses React and Material UI (MUI) to create the frontend of my full-stack personal website application. This full-stack app relies on a RESTful API to supply data such as blog posts and website images. The backend is written in Django and is located in a separate GitHub repository called personal-website-backend. It is not public yet.

## Project Structure
&nbsp;&nbsp;&nbsp;This is a React app, and as such important files like `App.js`, `index.css`, and `index.js` are located in the root of the `src/` folder. The rest of the project is broken into discrete sections, also located inside the src folder. The two most important directories inside `src/` are `components/` and `styles/`. The `components/` directory contains subfolders, each named after an essential React Component. There are up to three javascript files in each of these folders, `index.js` being the default file that is ran. This is present in every component's named subdirectory. There may be an additional two files of the form `\[componentname]Desktop.js` or `\[componentname]Mobile.js` that are referred to by `index.js` for the case of the site being loaded as a desktop or a mobile site. The `styles/` folder contains the theme for the custom MUI components found in the component files and are imported into the component from the correspondingly named subdirectory in `styles/`, for example the theme for appbar is found in the file `index.js` located in the directory `styles/appbar`.
&nbsp;&nbsp;&nbsp;The other directory inside `src/` is pretty self-explanatory, `images/` is a collection of images used by the site. It will likely be deleted once the database hookup is linked back in to the project.

## Available Scripts

In the project directory, you can run:

 `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.