chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "lookupDNS") {
    var recordType = request.recordType;
    var domain = request.domain;

    fetch(`https://dns.google/resolve?name=${domain}&type=${recordType}`)
      .then(response => response.json())
      .then(result => {
        var answerSection = result.Answer;
        sendResponse(answerSection);
      })
      .catch(error => {
        console.error("Error fetching DNS information:", error);
        sendResponse(null);
      });
    return true;

  } else if (request.action === "openInNewWindow") {
    chrome.windows.create({
      url: 'popup.html',
      type: 'popup',
      width: 400,
      height: 235
    });
  }
});
