# Hacker News Web Crawler

## Overview
This project is a web crawler that extracts entries from [Hacker News](https://news.ycombinator.com/) and provides filtering functionality based on the number of words in the title, comments, and points.

## Features
- Extracts the first 30 entries from Hacker News.
- Filters entries by:
    - Titles with more than five words, ordered by the number of comments.
    - Titles with five or fewer words, ordered by points.
- Stores and retrieves entries from local storage.
- Tracks filter usage data with timestamps.

## Setup and Installation

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:

   ```bash
   git clone <repository_url>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


