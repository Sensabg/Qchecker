document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("lookupButton").addEventListener("click", function() {
        var recordType = document.getElementById("recordType").value;
        var inputUrl = document.getElementById("domainInput").value.trim();
        document.getElementById("dnsWatchButton").disabled = false;
        document.getElementById("whoisButton").disabled = false;

        function updateInputAndSelectWidth() {
            var lookupButton = document.getElementById("lookupButton");
            var inputField = document.getElementById("domainInput");
            var selectBox = document.getElementById("recordType");
            var selectStyle = window.getComputedStyle(selectBox);
            var buttonWidth = lookupButton.offsetWidth;
            var availableWidth = buttonWidth - inputField.offsetWidth;
            var selectWidth = availableWidth - 
                              parseInt(selectStyle.paddingLeft) - 
                              parseInt(selectStyle.paddingRight) - 
                              parseInt(selectStyle.borderLeftWidth) - 
                              parseInt(selectStyle.borderRightWidth);
    
            var adjustmentFactor = 17; 
            selectWidth += adjustmentFactor;
            selectBox.style.width = selectWidth + "px";
        }
    
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
                };

                response.forEach(function(record) {
                    console.log("Record Type:", record.type); 
                    var row = document.createElement("tr");
                    row.classList.add("dns-table-row"); 
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

    document.getElementById("dnsWatchButton").addEventListener("click", function() {
        var domainInput = document.getElementById("domainInput").value.trim();
        var recordType = document.getElementById("recordType").value;
        if (domainInput && recordType) {
            var dnsWatchUrl = `https://www.dnswatch.info/dns/dnslookup?la=en&host=${encodeURIComponent(domainInput)}&type=${encodeURIComponent(recordType)}&submit=Resolve`;
            openBackgroundTab(dnsWatchUrl);
        }
    });

    document.getElementById("whoisButton").addEventListener("click", function() {
        var domainInput = document.getElementById("domainInput").value.trim();
        if (domainInput) {
            var whoisUrl = `https://www.whois.com/whois/${encodeURIComponent(domainInput)}`;
            openBackgroundTab(whoisUrl);
        }
    });

    function openBackgroundTab(url) {
        chrome.tabs.create({ url: url, active: false });
    }

    document.getElementById("openInNewWindowButton").addEventListener("click", function() {
        chrome.runtime.sendMessage({ action: "openInNewWindow" });
    });
});
