# Chat Web App

This is a chat web application built with React and Firebase. It allows users to communicate with each other in real-time.

## Features

- User authentication: Users can sign up and log in to the chat app using their email and password.
- Real-time messaging: Users can send and receive messages instantly in the chat room.
- User profiles: Users can update their profile information, including their profile picture.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Firebase: A cloud-based platform that provides authentication and real-time database services.
- SCSS: A CSS preprocessor that extends the capabilities of CSS with variables, mixins, nesting, and more.

## Prerequisites

Before running the application, you need to have the following prerequisites installed:

- Node.js: JavaScript runtime environment. You can download it from [here](https://nodejs.org).
- Firebase project: Create a new Firebase project and obtain the Firebase configuration credentials.

## Installation

1. Clone the repository:

git clone [<repository_url>](https://github.com/whiHak/Chat-web-app.git)


2. Navigate to the project directory:

cd chat-web-app


3. Install the dependencies:

npm install


4. Set up Firebase credentials:

   - Create a .env file in the root directory of the project.
   - Add your Firebase configuration credentials to the .env file:

     
     REACT_APP_API_KEY="<your_api_key>"
     REACT_APP_AUTH_DOMAIN="<your_auth_domain>"
     REACT_APP_PROJECT_ID="<your_project_id>"
     REACT_APP_STORAGE_BUCKET="<your_storage_bucket>"
     REACT_APP_MESSAGING_SENDER_ID="<your_messaging_sender_id>"
     REACT_APP_APP_ID="<your_app_id>"
     

## Usage

1. Start the development server:

npm start


2. Open your web browser and access the application at http://localhost:3000.

## Deployment

To deploy the application to a hosting service, follow these steps:

1. Build the production-ready code:

npm run build


2. Deploy the build directory to your hosting service.

## Acknowledgments

- This project was inspired by [Firebase documentation](https://firebase.google.com/docs).
- Special thanks to the React and Firebase communities for their valuable resources.

### Credits

This Chat-web-app was developed by [Betselot Abraham](https://www.linkedin.com/in/betselot-abraham-184753285), based on the Firebase and leveraging ReactJs and Scss.


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
