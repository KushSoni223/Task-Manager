# React Native Frontend App

## 📌 Project Overview

This is a React Native app built with Expo for authentication and task management. It connects to a Node.js backend with MongoDB.

---

## 📦 Prerequisites

Ensure you have the following installed before setting up the project:

- **Node.js** (v16 or later) - [Download here](https://nodejs.org/)
- **Yarn** (Recommended) - Install using `npm install -g yarn`
- **Expo CLI** - Install using `npm install -g expo-cli`
- **Android Studio** (For Android development)
- **Xcode** (For iOS development on macOS)
- **VS Code** (Recommended for editing)

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/KushSoni223/Task-Manager.git
cd Task-Manager
```

### 2️⃣ Install Dependencies

```sh
yarn install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add the required variables:

```sh
API_URL='https://task-backend-jfl38gw14-kushsoni223s-projects.vercel.app/api'
```

### 4️⃣ Run the App

#### **For Android**

Start the development server:

```sh
yarn start
```

Then, open another terminal and run:

```sh
yarn android
```

#### **For iOS** (Mac Only)

```sh
yarn ios
```

> Note: You need an Apple Developer account to run on a physical iOS device.

#### **For Web**

```sh
yarn web
```

---

## 🔧 Project Structure

```
react-native-app/
│-- api/
│   ├── components/    # Reusable UI components
│   ├── screens/       # App screens
│   ├── navigation/    # React Navigation setup
│   ├── context/       # Context API (for global state management)
│   ├── services/      # API calls
│   ├── utils/         # Utility functions
│-- app/
│   ├── (auth)/        auth navigation and all navigation and all screens
|-- ├── layout.tsx     all layout files which is mainly used
│-- assets/            # Images, fonts, etc.
│-- components/        # Reusable-Components, buttons, etc.
│-- context/           # Config, etc.
│-- hooks/             # fonts layout updated, etc.
│-- .env               # Environment variables
│-- App.tsx            # Main entry point
│-- package.json       # Dependencies and scripts
```

---

## 🔑 Authentication

This app supports:
✅ Signup & Login (JWT-based authentication)  
✅ Password Reset via OTP  
✅ Secure AsyncStorage for token storage

---

## 🛠 Troubleshooting

### 🔹 Metro Bundler Not Starting

Try clearing cache:

```sh
yarn start --reset-cache
```

### 🔹 Android App Not Running

Ensure an emulator or device is connected:

```sh
adb devices
```

If no device is listed, restart the emulator or connect a real device.

### 🔹 iOS Build Fails

Run:

```sh
cd ios && pod install && cd ..
yarn ios
```

---

## 📜 License

This project is licensed under the MIT License.

Happy Coding! 🚀
