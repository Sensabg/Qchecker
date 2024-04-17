document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("lookupButton").addEventListener("click", function() {
    var recordType = document.getElementById("recordType").value;
    var domain = document.getElementById("domainInput").value;
    chrome.runtime.sendMessage({ action: "lookupDNS", recordType: recordType, domain: domain }, function(response) {
      if (response) {
        document.getElementById("result").innerText = JSON.stringify(response, null, 2);
      } else {
        document.getElementById("result").innerText = "Failed to lookup DNS information.";
      }
    });
  });
});
