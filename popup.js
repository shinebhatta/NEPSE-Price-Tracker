//When opened, calls functions
window.addEventListener("load", function () {
  notification();
});

function notification() {
  //Creates notification when called
  chrome.notifications.create(
      {
          title: 'NEPSE Price Update',
          message: 'The Price of X has changed',
          iconUrl: 'icon.png',
          type: 'basic'
      }
  )
};