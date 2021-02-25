# TodoApp
A simple Todo App build using React Native.

# Installing Dependencies
[Node](https://nodejs.org/en/download/), the React Native command line interface, [Java SE Development Kit (JDK)](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html), and [Android Studio](https://developer.android.com/studio).

# Install Android Studio
Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:
-Android SDK
-Android SDK Platform
-Android Virtual Device

## Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Open the **Windows Control Panel**.
Click on **User Accounts**, then click **User Accounts** again
Click on **Change my environment variables**
Click on **New...** to create a new ANDROID_HOME user variable that points to the path to your Android SDK:

```C:\Users\ACCOUNT-NAME\AppData\Local\Android\Sdk```

## Add platform-tools to Path
Open the **Windows Control Panel.**
Click on **User Accounts**, then click **User Accounts** again
Click on **Change my environment variables**
Select the **Path** variable.
Click **Edit.**
Click **New** and add the path to platform-tools to the list.

The default location for this folder is:

```%LOCALAPPDATA%\Android\Sdk\platform-tools```

# React Native Command Line Interface
React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using npx, which ships with Node.js. With npx react-native <command>, the current stable version of the CLI will be downloaded and executed at the time the command is run.

# Running your app on Android devices

## Enable Debugging over USB
Most Android devices can only install and run apps downloaded from Google Play, by default. You will need to enable USB Debugging on your device in order to install your app during development.

To enable USB debugging on your device, you will first need to enable the "Developer options" menu by going to Settings → About phone → Software information and then tapping the Build number row at the bottom seven times. You can then go back to Settings → Developer options to enable "USB debugging".

## Plug in your device via USB
Let's now set up an Android device to run our React Native projects. Go ahead and plug in your device via USB to your development machine.

Now check that your device is properly connecting to ADB, the Android Debug Bridge, by running adb devices.

```$ adb devices
List of devices attached
emulator-5554 offline   # Google emulator
14ed2fcc device         # Physical device
```
Seeing device in the right column means the device is connected. You must have only one device connected at a time.

# Running your React Native application
## Step 1: Start Metro
First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."

```npx react-native start```

## Step 2: Start your application
Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:

```npx react-native run-android```

If everything is set up correctly, you should see your new app running in your Android emulator shortly.
