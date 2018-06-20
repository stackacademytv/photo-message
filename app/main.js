
// Init Camera instance for the player node
const camera = new Camera(document.getElementById("player"));

// Init Message instance
const messages = new Message();

// Create a new message entry
const renderMessage = (message) => {

  // Prepend message to messages container
  $(`<div style="display:none;" class="row message bg-light mb-2 rounded shadow">
        <div class="col-2 p-1">
          <img src="${message.photo}" class="photo w-100 rounded">
        </div>
        <div class="col-10 p-1">${message.caption}</div>
      </div>`)

    // Show with a fade in
    .prependTo('#messages').show(500)

    // Bind a click handler on newly added message
    .find('img').on('click', showPhoto);
};

// Show message photo in a modal
const showPhoto = (e) => {
  $('#photoframe img').attr('src', $(e.currentTarget).attr('src'));
  $('#photoframe').modal('show');
}


// Check app is supported and initialise
const _init = () => {

  // Notify user of connection issues
  window.addEventListener('messages_error', () => {
    toastr.error('Messages could not be reteived.<br>Will keep trying to reconnect.', 'Network Connection Error');
  });

  // Load initial messages when ready
  window.addEventListener('messages_ready', () => {

    // Remove the loader
    $('#loader').remove();

    // Check some messages exist
    if( messages.all.length == 0 ) toastr.info('Add the first message!', 'No Messages');

    // Empty out existing messages if reconnecting
    $('#messages').empty();

    // Loop and render all messages (reverse as prepended)
    messages.all.reverse().forEach( renderMessage );
  });

  // Start viewfinder and switch on camera
  $("#viewfinder").on("show.bs.modal", () => {
    camera.switch_on();
  });

  // Stop viewfinder and switch off camera
  $("#viewfinder").on("hidden.bs.modal", () => {
    camera.switch_off();
  });

  // Capture photo
  $("#shutter").on("click", () => {

    let photo = camera.take_photo();

    // Update camera button state
    $("#camera")
      .css("background-image", `url(${photo})`)
      .addClass("isset");
  });

  // Handle submission
  $("#send").on("click", () => {

    // Get caption message
    let caption = $("#caption").val();

    // Check message is ok
    if (!camera.last_photo || !caption) {

      // Show message and return if not
      toastr.warning('Photo & Caption Required.', 'Incomplete Message');
      return;
    }

    // Post new message
    let message = messages.add(camera.last_photo, caption);

    // Add new message to feed
    renderMessage( message );

    // Reset camera button state & empty message
    $("#caption").val("");
    $("#camera")
      .css("background-image", "")
      .removeClass("isset");

    // Unset camera's last photo
    camera.clear();
  });

  // Listen for new messages
  window.addEventListener('messages_new', (e) => {
    renderMessage( e.detail );
  });

};
