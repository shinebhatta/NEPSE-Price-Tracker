//When opened, calls functions
window.addEventListener("load", function () {
  notification();
});

function notification() {
  //Creates notification when called
  chrome.notifications.create(
      {
          title: 'NEPSE Price Update',
          message: `Price has changed by ${diff})`,
          iconUrl: 'icon.png',
          type: 'basic'
      }
  )
};