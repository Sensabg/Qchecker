document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the "Lookup" button
    document.getElementById("lookupButton").addEventListener("click", function() {
        var recordType = document.getElementById("recordType").value;
        var inputUrl = document.getElementById("domainInput").value.trim();
        document.getElementById("dnsWatchButton").disabled = false;
        document.getElementById("whoisButton").disabled = false;

        function updateInputAndSelectWidth() {
            var lookupButton = document.getElementById("lookupButton");
            var inputField = document.getElementById("domainInput");
            var selectBox = document.getElementById("recordType");
    
            // Get the computed style of the select box to include padding and border
            var selectStyle = window.getComputedStyle(selectBox);
    
            // Calculate the total width of the button including padding and border
            var buttonWidth = lookupButton.offsetWidth;
    
            // Calculate the available width for the input field and select box
            var availableWidth = buttonWidth - inputField.offsetWidth;
    
            // Calculate the width considering the padding and border of the select box
            var selectWidth = availableWidth - 
                              parseInt(selectStyle.paddingLeft) - 
                              parseInt(selectStyle.paddingRight) - 
                              parseInt(selectStyle.borderLeftWidth) - 
                              parseInt(selectStyle.borderRightWidth);
    
            // Add a small adjustment factor to account for any discrepancies
            var adjustmentFactor = 17; // Adjust this value as needed
            selectWidth += adjustmentFactor;
    
            // Set the width of the select box to match the available width
            selectBox.style.width = selectWidth + "px";
        }
    
        // Call the function initially and whenever the window size changes
        updateInputAndSelectWidth();
        window.addEventListener("resize", updateInputAndSelectWidth);

        if (!/^https?:\/\//i.test(inputUrl)) {
            inputUrl = 'http://' + inputUrl;
        }

        var url = new URL(inputUrl);
        var domain = url.hostname;

        chrome.runtime.sendMessage({ action: "lookupDNS", recordType: recordType, domain: domain }, function(response) {
            var resultContainer = document.getElementById("result");
            if (response && Array.isArray(response) && response.length > 0) {
                resultContainer.innerHTML = ""; // Clear previous results

                var table = document.createElement("table");
                table.classList.add("dns-table");

                var headers = ["Name", "Type", "TTL", "Answer"];
                var headerRow = document.createElement("tr");
                headers.forEach(function(headerText) {
                    var headerCell = document.createElement("th");
                    headerCell.textContent = headerText;
                    headerRow.appendChild(headerCell);
                });
                table.appendChild(headerRow);

                var typeMap = {
                    "1": "A",
                    "2": "NS",
                    "5": "CNAME",
                    "15": "MX",
                    "28": "AAAA",
                    "16": "TXT"
                    // Add more record types as needed
                };

                response.forEach(function(record) {
                    console.log("Record Type:", record.type); // Debugging: log the record type
                    var row = document.createElement("tr");
                    row.classList.add("dns-table-row"); // Add class for table row
                    var rowData = [record.name, typeMap[record.type], record.TTL, record.data];

                    rowData.forEach(function(cellData) {
                        var cell = document.createElement("td");
                        cell.textContent = cellData;
                        row.appendChild(cell);
                    });
                    table.appendChild(row);
                });

                resultContainer.appendChild(table);
            } else {
                resultContainer.innerText = "No DNS records found.";
            }
        });
    });

    // Event listener for the "DNS Watch" button
    document.getElementById("dnsWatchButton").addEventListener("click", function() {
        var domainInput = document.getElementById("domainInput").value.trim();
        var recordType = document.getElementById("recordType").value;
        if (domainInput && recordType) {
            var dnsWatchUrl = `https://www.dnswatch.info/dns/dnslookup?la=en&host=${encodeURIComponent(domainInput)}&type=${encodeURIComponent(recordType)}&submit=Resolve`;
            openBackgroundTab(dnsWatchUrl);
        }
    });

    // Event listener for the "WHOIS" button
    document.getElementById("whoisButton").addEventListener("click", function() {
        var domainInput = document.getElementById("domainInput").value.trim();
        if (domainInput) {
            var whoisUrl = `https://www.whois.com/whois/${encodeURIComponent(domainInput)}`;
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
