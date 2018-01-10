School Ready

Run these npm installs on each PC where npm start is run.

Refs:
https://www.npmjs.com/package/react-sound

How to install & Run

Install Node.js  (latest) https://nodejs.org/en/download/

Create app:
 npm install -g create-react-native-app SchoolReady

Downgrade npm to work with React Native:
 npm install npm@4.6.1 -g

Install project modules:
 npm install react-sound --save

Clone from GitHub (App.js, Images/Sound; .gitignore will leave out the large node_modules folder )

Start the app:
 cd <GitHub root>\SchoolReady
 npm start

Make sure firewall allows Node through for phone on same WiFi

Use Expo and USB cable to read the QR code, and select 'a' to run on Android

Additional setup
- Atom:
  - Nuclide (ATOM plugin) for debugging
  - ATOM React plugin (https://orktes.github.io/atom-react/), also need to set env variable, see https://stackoverflow.com/questions/26620312/installing-git-in-path-with-github-client-for-windows
  - language-Babel plugin https://atom.io/packages/language-babel
- GIFcam for capturing animated GIFs (Activity 1), see http://blog.bahraniapps.com/gifcam/#download
- React Devtools extension for Chrome https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
- Android Studio for emulator https://developer.android.com/studio/install.html, https://www.youtube.com/watch?v=KRLLjlpy0r4 for help
