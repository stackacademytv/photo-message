
// Camera Class
class Camera {

  // Initaiate a new camera instance
  constructor( video_node ) {
  
    // Ref video DOM element
    this.video_node = video_node;
  }

  // Start the camera
  switch_on() {

    // Set a mediaStream on the player
    navigator.mediaDevices.getUserMedia({
      video: { width: 600, height: 600 },
      audio: false
    }).then( stream => {
      this.video_node.srcObject = this.stream = stream;
    });
  }

  // Get photo from the stream
  take_photo() {

    // Create a canvas node to draw photo onto
    let canvas = document.createElement('canvas');
    // Set canvas dimensions same as camera stream
    canvas.setAttribute('width', 600);
    canvas.setAttribute('height', 600);
    
    // Get canvas context
    let context = canvas.getContext('2d');

    // Draw image onto canvas
    context.drawImage(this.video_node, 0, 0, canvas.width, canvas.height);
    
    // Get the canvas image as a data uri and ref
    this.last_photo = context.canvas.toDataURL();
    
    // Destroy context and canvas node
    context = null;
    canvas = null;

    return this.last_photo;
  }

  // Clear last photo taken
  clear() {
    this.last_photo = null;
  }

  // Stop camera
  switch_off() {
    this.video_node.pause();
    this.stream.getTracks()[0].stop();
  }
}
