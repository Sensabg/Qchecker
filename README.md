
# `Browser Extension DNS checker`



#  My current job as <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExazNvY3ZuaWVkd2o5Nzh3M2owNzltYzZneTMwMTQ3aXFoOHh0N2UydiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lWkqWj5OzADh0Ozt3e/giphy.gif" alt="Tech Support" width="180" style="vertical-align: middle;"> at <a href="https://fastcomet.com"><img src="/documentation/fastcomet-logo-alt.webp" alt="Alt text" title="Optional title" style="width: 140px; height: 21px; vertical-align: middle;"></a> involves multiple DNS checks per day, which is why I decided to streamline the workflow for both myself and my colleagues.

| Interface   ㅤㅤㅤㅤ ㅤㅤ  ㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ   ㅤㅤ   ㅤㅤㅤㅤㅤㅤㅤㅤㅤ     ㅤㅤㅤㅤ    ㅤㅤㅤㅤㅤㅤㅤㅤ    | 
| ------------- |

<img src="/documentation/inteface.png" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 250px; height: auto;">

This is not the final design as it needs to undergo slight transformations on the CSS code, nevertheless, I decided to release it to serve our Tech team as its capabilities are more important.

<hr>

| Available DNS record types   ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ     ㅤㅤ  | 
| ------------- |

<p>
<img src="/documentation/dropdown.png" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 250px; height: auto;">
<img src="/documentation/drop-down2.png" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 305px; height: auto;">
</p>

<hr>

| Open in new window   ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤㅤ  | 
| ------------- |

<img src="/documentation/new windowww.png" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 560px; height: auto;">
</p>

<hr>

| References   ㅤ  ㅤㅤㅤ ㅤㅤ  ㅤㅤ ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ   ㅤㅤ   ㅤㅤㅤㅤㅤㅤㅤㅤㅤ     ㅤㅤㅤㅤ    ㅤㅤㅤ   ㅤㅤㅤ  | 
| ------------- |


<img src="/documentation/ref.png" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 305px; height: auto;">
<img src="/documentation/input.png" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 305px; height: auto;">

* The "DNS Watch" button opens a new tab, with a constructed URL based on the domain and the selected record type from the input field.
* Similarly, the "Whois" button directs to a tailored URL based on the domain from the input field.
</p>

<hr>

# `Summarization: `

## 1. Features

* Perform DNS lookups for a given domain and record type in a table format.
* Open a new page of DNSWatch and WHOIS pages for the Qchecked domain in the extension.
* Open the extension's popup in a new window.

## 2. Technical Details

* The extension uses the chrome.runtime API to communicate between the background script and the popup script.
* Uses the chrome.windows API to open the popup in a new window.
* The background script fetches DNS records from the Google DNS API and sends the response to the popup script.
* The popup script displays the DNS records in a table format and provides buttons to open DNSWatch and WHOIS pages.
* Requires the "activeTab" and "storage" permissions to function.

<hr>

# `Custom designs-made by me: `

* I may also add functionality to switch between the different skins.

<p>
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajRnZmVsaGRsbXl6NzhrOXEwdG5hd2RoNzh4ODl6dHh2NXlrcml0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/701hI95nTZY4SWkRft/giphy-downsized-large.gif" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 305px; height: auto;">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjNjamdseXUwNnk3MnhyZ3J4MDh0dTE4cHV6YmpiMXdueGF3MWpkMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L9WOuxDEM55exHgjf4/giphy.gif" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 305px; height: auto;">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnljNDFmdnZubzN1ZGpsdXk5Zml5OXRiNTE5MXdkaTUza3dlMjEzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EHnWgsRJXVKBHjQQUb/giphy-downsized-large.gif" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 305px; height: auto;">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGxhanJhcGg0M3lyd2szaXhvNG94dTBzeHJ0c3Yza2dxbDNkeXhkNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zApyMeDi1Ca6hmbIEC/source.gif" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 315px; height: 460px;">
</p>
