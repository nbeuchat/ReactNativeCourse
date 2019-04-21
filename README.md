# React Native Course

React Native project for the _React Native the practical guide_ Udemy course of Maximilan
Schwarzmüller.

The course can be found [here](https://www.udemy.com/react-native-the-practical-guide).

## Getting started

### Initial setup

The project has been generated using the
[React Native CLI Quickstart](https://facebook.github.io/react-native/docs/getting-started)
in the official React Native documentation by Facebook.

### Running the application on Android

**Virtual device**

- Open Android Studio > Configure > AVD Manager
- Click on the green arrow for the virtual device of your choice
- Run the following from the command prompt: `npm run android`
- To enable Hot Reloading, Ctrl+M and click on _Enable Hot Reloading_

**Real phone**

- Turn off any Virtual Device
- Connect your phone and allow access to your computer (note that USB access must be
  turned on in developer settings on your phone)
- Run `npm run android`
- To enable Hot Reloading, shake your phone and click on _Enable Hot Reloading_

## 3rd party native dependencies

Some libraries require modification of the native Android or iOS projects. This section
tracks down which libraries have been setup in their respective native projects.

You can run `react-native link <package-name>` or manually install the library for Android
and iOS.

- Vector icons: https://github.com/oblador/react-native-vector-icons
  - [x] Android (cli)
  - [x] iOS (cli)
