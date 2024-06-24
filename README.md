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
- Database was added (Firebase) -  I had very little clue how to do it, so used Google. The only thing that I wanted to show that I am able to learn fast and implement some challenging task and also wanted to be transparent about.

## Setup and Installation

### Prerequisites
- Node.js
- npm or yarn

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/hacker-news-crawler.git
    cd hacker-news-crawler
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Start the application:
    ```sh
    npm start
    # or
    yarn start
    ```

## Usage
- The application fetches the latest entries from Hacker News on load.
- Use the filter buttons to filter entries by comments or points.
- Filter usage data is stored in local storage.

## Project Structure
- `src/`
    - `components/`: React components
    - `hooks/`: Custom hooks
    - `services/`: API calls and filtering logic
    - `utils/`: Utility functions
    - `types/`: TypeScript types

    
