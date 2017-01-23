## farmr (Name WIP)

Farmr is the small farmer's personal agronomist assistant. Simply designed and easy to use, farmr can diagnose crop diseases and conditions with a single picture of the problematic crop. Just by taking a picture of a plant, farmers can receive a basic diagnosis of any issues affecting the plant as well as recommendations on treatments and optimizations for maximum plant growth. 

Farmr is written in React Native and has been tested on Android 6.0.1. iOS is not specifically supported but the app should still work. The backend is powered by Python and runs a image classifier based on Google's [Inception](https://arxiv.org/abs/1409.4842) architecture.

### Quick Start

1. After cloning the repository, run `npm install`.
2. Farmr runs on React Native and requires react-native-cli to be installed for development and deployment. Run `npm install react-native-cli -g`. For Android testing and building, [Android Studio](https://developer.android.com/studio/index.html) must also be installed, with the environment variables `PATH` and `ANDROID_HOME` set to the relevant paths.
3. The native module [react native camera](https://github.com/lwansbrough/react-native-camera) is also used. Native modules must be linked by running `react-native link` before building the app. 
4. Run `react-native run-android` to push a build to a connected Android device or virtual device.
