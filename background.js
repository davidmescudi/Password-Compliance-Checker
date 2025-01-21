const initiator = 'background.js';
console.debug(initiator, 'Background script loaded');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('Message received:', request);
  if (request.password) {
    console.warn('Password detected:', request.password);
    // TODO: Send the password to the LLM for validation
    /*fetch('localhost', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password: request.password })
    })
    .then(response => response.json())
    .then(data => {
      // Is this needed?
      console.log('Result:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });*/
  }
});
