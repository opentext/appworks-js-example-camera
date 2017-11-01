/**
 * Get a picture from the device camera
 */
function takePicture() {
  // Create an instance of AWCamera with success and error handlers
  var camera = new Appworks.AWCamera(
    function(filepath) {
      // Success, we have a filepath
      outImage(filepath);
    }, function(error) {
      // Error
      out(error);
  });

  // Call AWCamera.takePicture to open the device camera
  camera.takePicture();
}

/**
 * Get a picture from the device gallery
 */
function openGallery() {
  // Create an instance of AWCamera with success and error handlers
  var camera = new Appworks.AWCamera(
    function(filepath) {
      // Success, we have a filepath
      outImage(filepath);
    }, function(error) {
      // Error
      out(error);
  });

  // Call AWCamera.openGallery to open the device gallery
  camera.openGallery();
}

/**
 * Temp files are used when taking pictures and obtaining them from gallery
 * Call the cleanup function to remove these when you're done
 */
function cleanup() {
  // Create an instance of AWCamera with blank success and error handlers, we don't need them here
  var camera = new Appworks.AWCamera(function(){}, function(){});

  // Call AWCamera.cleanup twith success and error handlers to remove the temp files
  camera.cleanup(
    function() {
      // Success, the temp files were removed
      out("Temp directory cleared");
    }, function (error) {
      // Error
      out(error);
    });
}

function out(message) {
  console.log(message);
  if(typeof(message) == "object") {
    getObject("result").innerHTML = JSON.stringify(message);
  } else {
    getObject("result").innerHTML = message;
  }
}

function outImage(file) {
  console.log(file);

  var string = "<img src='"+file+"' />";
  string += "<br/>" + file

  getObject("result").innerHTML = string;

}

function getObject(name) {
  return document.getElementById(name);
}
