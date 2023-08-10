# Google Ads Campaign Cost Retriever

This Node.js application retrieves campaign cost data from Google Ads using the Google Ads API and provides options to filter and format the data based on specified criteria.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Filtering Options](#filtering-options)
- [Contributing](#contributing)
- [Contact](#contact)

## Features

- Retrieve campaign cost data from Google Ads API.
- Filter campaigns based on start and end dates.
- Option to apply strict filter to exclude campaigns with distant and undefined end dates.

## Getting Started

These instructions will help you set up and run the Google Ads Campaign Cost Retriever on your local machine.

### Prerequisites

- Node.js installed
- Google Ads API credentials (client ID, client secret, developer token, and refresh token)

### Installation

1. Clone the repository: `git clone https://github.com/mironovisa/adsAPIintegration.git`
2. Navigate to the project directory: `cd adsAPIintegration`
3. Install dependencies: `npm install`
4. Use your own credentials in the `.env` file.

## Usage

1. Open `app.js` and replace the placeholder values in with your desired parameters.
2. Run the application: `npm start`.
3. The retrieved campaign id/label/cost data will be displayed in the console.

### Filtering Options

The Google Ads Campaign Cost Retriever provides a filtering option called `strictFilter` which allows you to control whether campaigns with the default Google Ads end date (2037-12-30) should be included in the results.


- `strictFilter: false` (default): All campaigns within the specified date range will be included in the results.
- `strictFilter: true`  Campaigns with the default end date will be excluded from the results.

To use the `strictFilter` option, open `app.js` and set the `strictFilter` variable to `true` or `false` based on your preference.

## Contributing

Contributions are welcome! To contribute to the Google Ads Campaign Cost Retriever, follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

## Contact

For any questions or support, contact Andrei at mironovisa@gmail.com.
