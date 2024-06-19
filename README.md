
---

# Weather Dashboard

![Weather Dashboard Logo](public/logo.png)

A responsive and visually appealing weather dashboard built with React and Tailwind CSS. This application allows users to search for the current weather and forecast of any city using the OpenWeather API.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- Search for current weather and 5-day forecast by city name.
- Responsive design for seamless experience across desktop and mobile devices.
- Dynamic background color based on weather conditions.
- Animated weather icons and interactive elements.
- Example weather data for New York displayed on initial load.

## Demo

Check out the live demo of the Weather Dashboard [here](#).

## Technologies Used

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [OpenWeather API](https://openweathermap.org/api)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Axios](https://github.com/axios/axios) for API requests

## Setup and Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/weather-dashboard.git
    cd weather-dashboard
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Get your OpenWeather API key:**
   - Sign up at [OpenWeather](https://home.openweathermap.org/users/sign_up) and get an API key.

4. **Create a `.env` file in the root directory and add your OpenWeather API key:**
    ```env
    VITE_OPENWEATHER_API_KEY=your_api_key_here
    ```

5. **Run the development server:**
    ```sh
    npm run dev
    ```

6. **Open your browser and navigate to:**
    ```sh
    http://localhost:3000
    ```

## Usage

1. **Search for a city:**
   - Enter the city name in the search bar and click the "Search" button to get the current weather and 5-day forecast.

2. **View Weather Information:**
   - The dashboard will display the current weather, including temperature, description, and an icon representing the weather condition.
   - Below the current weather, the 5-day forecast will be displayed with daily temperature, weather description, and icons.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Open a pull request.

Please make sure your code adheres to the project's code style and conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenWeather](https://openweathermap.org/) for the weather data API.
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework.
- [Framer Motion](https://www.framer.com/motion/) for the animation library.
- [Axios](https://github.com/axios/axios) for the promise-based HTTP client.

---
