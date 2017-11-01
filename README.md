# AppWorks Example - AWCamera

## Contents
1. [About appworks.js](#about-appworksjs)
2. [About this example app](#about-this-example)
3. [Usage](#usage)
4. [Installation](#installation)

## About appworks.js

appworks.js is a javascript (TypeScript) library for building feature rich, hybrid enterprise apps. The OpenText AppWorks platform provides mobile and desktop clients that support apps that utilize appworks.js.

In a mobile environment the library provides access to on-device technology, and in the desktop environment some features of the underlying host OS (operating system) are exposed.

For more information, see the appworks.js repository: https://github.com/opentext/appworks-js

## About this example

The purpose of the AWCamera plugin is to provide the access to the device camera and gallery

## Usage

#### takePicture

```javascript
Appworks.AWCamera(successHandler: any, errorHandler: any)
takePicture(options?: any)
```

The takePicture will open the camera and allow the user to take a picture. The File URL will be returned in the success handler.
If there is an error, it will be returned in the error handler.

+ __successHandler__: Called upon successful capture with the camera, returns a file URL by default. Options can be added.
 + See the [Cordova Camera Documentation](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html#module_camera.CameraOptions) for a list of options
+ __errorHandler__: Called if there is an error or the user cancels camera instance, returns a string.

Examples
```javascript
// Create an instance of AWCamera with success and error handlers
var camera = new Appworks.AWCamera(
  function(filepath) {
    // Success, we have a filepath
    var img = "<img src='"+filepath+"' />";
    document.getElementById("result").innerHTML = img;
  }, function(error) {
    // Error
    alert(error);
});

// Call AWCamera.takePicture to open the device camera
camera.takePicture();
```

#### openGallery

```javascript
Appworks.AWCamera(successHandler: any, errorHandler: any)
openGallery(options?: any)
```

The openGallery will open the device gallery and allow the user to select a picture. The File URL will be returned in the success handler.
If there is an error, it will be returned in the error handler.

+ __successHandler__: Called upon successful selection of a picture, returns a file URL by default. Options can be added.
 + See the [Cordova Camera Documentation](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-camera/index.html#module_camera.CameraOptions) for a list of options
+ __errorHandler__: Called if there is an error or the user cancels picture selection, returns a string.

Examples
```javascript
// Create an instance of AWCamera with success and error handlers
var camera = new Appworks.AWCamera(
  function(filepath) {
    // Success, we have a filepath
    var img = "<img src='"+filepath+"' />";
    document.getElementById("result").innerHTML = img;
  }, function(error) {
    // Error
    alert(error);
});

// Call AWCamera.openGallery to open the device gallery
camera.openGallery();
```

#### cleanup

```javascript
cleanup(successHandler: any, errorHandler: any)
```

As takePicture and openGallery use temp files when working with the pictures, it is a good idea to cleanup after we're done. The AWCamera.cleanup function does just that.

+ __successHandler__: Called upon successful cleanup.
+ __errorHandler__: Called if there is an error during cleanup.

Examples
```javascript
  // Create an instance of AWCamera with blank success and error handlers, we don't need them here
var camera = new Appworks.AWCamera(
  function(filepath) {
  }, function(error) {
});

// Call AWCamera.cleanup to perform the cleanup of temporary files
camera.cleanup(
  function() {
    // Success, the temp files were removed
    alert("Temp directory cleared");
  }, function (error) {
    // Error
    alert(error);
  });
```

## Installation

This example app contains 3 important objects:
1. app.properties
2. icon.png
3. mobile.zip

#### app.properties
This files defines the app, with the following properties:
+ __displayName__: The display name of the app
+ __description__: A description of the app
+ __version__: The version of the app, e.g. 0.0.1 or 3.4.5 etc
+ __type__: This can be either app or desktop, or both (app,desktop)
+ __awgPlatformVersion__: The target appworks platform, this should be 16
+ __isAvailableOffline__: Allow this app to be used offline, can be true or false

#### icon.png
An icon that represents the app. This will appear in the gateway and on the device. 48x48px is ideal.

#### mobile.zip

This is your web content, such as html, js, css, images and any other assets.
The only essential file in your mobile.zip is index.html, which will be loaded by the appworks webview. Any other files or structure is up to the developer.

##### index.html

When your app is downloaded and installed in an appworks client, the client will place appworks.js, cordova.js and the cordova plugins in the root of your app.

In your html file, please include the following tags before any other javascript tags:

```html
<script type="text/javascript" src="cordova.js"></script>
<script type="text/javascript" src="appworks.js"></script>
```

#### Zipping and Deploying
1. Zip up the web content into a file named mobile.zip
2. Zip up the following files:
  + app.properties
  + icon.png
  + mobile.zip
3. Name this file in the format:
  + AppName_Version.zip
  + e.g. MyGreatApp_0.0.1.zip
  + __The version number in the filename must match the version number in app.properties__
4. Install the app on the gateway
  + Go to your gateway in a browser
  + sign in
  + go to app installation tab
  + drag and drop MyGreatApp_0.0.1.zip into the box.
  + Once fully deployed, enable the app.
