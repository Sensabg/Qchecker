chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "lookupDNS") {
    var recordType = request.recordType;
    var domain = request.domain;

    // Perform DNS lookup using an external DNS service
    fetch(`https://dns.google/resolve?name=${domain}&type=${recordType}`)
      .then(response => response.json())
      .then(result => {
        // Extract only the "Answer" section from the DNS response
        var answerSection = result.Answer;
        sendResponse(answerSection);
      })
      .catch(error => {
        console.error("Error fetching DNS information:", error);
        sendResponse(null);
      });

    return true;  // To indicate that sendResponse will be called asynchronously
  } else if (request.action === "openInNewWindow") {
    // Open popup.html in a new window
    chrome.windows.create({
      url: 'popup.html',
      type: 'popup',
      width: 400,
      height: 235
    });
  }
});