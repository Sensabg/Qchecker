document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("lookupButton").addEventListener("click", function() {
    var recordType = document.getElementById("recordType").value;
    var inputUrl = document.getElementById("domainInput").value.trim(); // Trim whitespace
    document.getElementById("dnsWatchButton").disabled = false;
    document.getElementById("whoisButton").disabled = false;
    // Check if the input includes a protocol
    if (!/^https?:\/\//i.test(inputUrl)) {
      // If protocol is missing, prepend with http://
      inputUrl = 'http://' + inputUrl;
    }

    // Extract domain from the input URL
    var url = new URL(inputUrl);
    var domain = url.hostname;

    chrome.runtime.sendMessage({ action: "lookupDNS", recordType: recordType, domain: domain }, function(response) {
      if (response && Array.isArray(response) && response.length > 0) {
        // Clear previous results
        document.getElementById("result").innerHTML = "";

        // Create a container element for the results
        var resultContainer = document.createElement("div");

        // Create a table element
        var table = document.createElement("table");
        table.classList.add("dns-table");

        // Create a header row
        var headerRow = table.insertRow();
        var headers = ["Name", "Type", "TTL", "Answer"];
        headers.forEach(function(headerText) {
          var headerCell = document.createElement("th");
          headerCell.textContent = headerText;
          headerRow.appendChild(headerCell);
        });

        // Map numerical record type to descriptive strings
        var typeMap = {
          "1": "A",
          "2": "NS",
          "5": "CNAME",
          "15": "MX",
          "28": "AAAA",
          "16": "TXT"
          // Add more record types as needed
        };

        // Iterate over each DNS record in the response
        response.forEach(function(record) {
          // Create a row for the record
          var row = table.insertRow();
          var rowData = [record.name, typeMap[record.type], record.TTL, record.data];

          // Populate the row with data
          rowData.forEach(function(cellData) {
            var cell = row.insertCell();
            var cellContent = document.createElement("div");
            cellContent.textContent = cellData;
            cell.appendChild(cellContent);
          });
        });

        // Append the table to the result container
        resultContainer.appendChild(table);

        // Append the result container to the result element
        document.getElementById("result").appendChild(resultContainer);
      } else {
        // Display a message if no DNS records were found
        document.getElementById("result").innerText = "No DNS records found.";
      }
      
    });
  });

  document.getElementById("dnsWatchButton").addEventListener("click", function() {
    var domainInput = document.getElementById("domainInput").value.trim();
    var recordType = document.getElementById("recordType").value;
    if (domainInput && recordType) {
      var dnsWatchUrl = `https://www.dnswatch.info/dns/dnslookup?la=en&host=${encodeURIComponent(domainInput)}&type=${encodeURIComponent(recordType)}&submit=Resolve`;
      // Open a new tab with DNS watch search
      openBackgroundTab(dnsWatchUrl);
    }
  });

  // Event listener for the "WHOIS" button
  document.getElementById("whoisButton").addEventListener("click", function() {
    var domainInput = document.getElementById("domainInput").value.trim();
    if (domainInput) {
      var whoisUrl = `https://www.whois.com/whois/${encodeURIComponent(domainInput)}`;
      // Open a new tab with WHOIS search
      openBackgroundTab(whoisUrl);
    }
  });

  // Function to open a URL in a new tab without switching focus
  function openBackgroundTab(url) {
    chrome.tabs.create({ url: url, active: false });
  }

  // Event listener for the "Open in New Window" button
  document.getElementById("openInNewWindowButton").addEventListener("click", function() {
    chrome.runtime.sendMessage({ action: "openInNewWindow" });
  });
});
  // Event listener for the "Open in New Window" button
 