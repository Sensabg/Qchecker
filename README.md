
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

* Performs DNS lookups for a given domain and provides record type in a table format.
* Opens a new page of DNSWatch and WHOIS for the "Qchecked" domain in the extension.
* Opens the extension's popup in a new window.

## 2. Technical Details

* The extension uses the chrome.runtime API to communicate between the background script and the popup script.
* Uses the chrome.windows API to open the popup in a new window.
* The background script fetches DNS records from the Google DNS API and sends the response to the popup script.
* The popup script displays the DNS records in a table format and constructs URLs for DNSWatch and WHOIS based on the searched input per click of the buttons.
* Requires the "activeTab" and "storage" permissions to function.

<hr>

# `Custom designs - made by me: `

* I may also add functionality to switch between the different skins.

<p>
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExajRnZmVsaGRsbXl6NzhrOXEwdG5hd2RoNzh4ODl6dHh2NXlrcml0NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/701hI95nTZY4SWkRft/giphy-downsized-large.gif" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 305px; height: auto;">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjNjamdseXUwNnk3MnhyZ3J4MDh0dTE4cHV6YmpiMXdueGF3MWpkMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L9WOuxDEM55exHgjf4/giphy.gif" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 305px; height: auto;">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnljNDFmdnZubzN1ZGpsdXk5Zml5OXRiNTE5MXdkaTUza3dlMjEzYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EHnWgsRJXVKBHjQQUb/giphy-downsized-large.gif" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 305px; height: auto;">
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGxhanJhcGg0M3lyd2szaXhvNG94dTBzeHJ0c3Yza2dxbDNkeXhkNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zApyMeDi1Ca6hmbIEC/source.gif" alt="Alt text" title="Optional title" style="display: inline-block; margin: auto; width: 305px; height: 465px;">
</p>

<hr> 

# `Other benefits: `

I also acquired some additional skills along the way, for the sake of documenting this project - I embarked on a journey to explore the creation of GIF animations.

> [!NOTE]
> Installation guide for macOS (Using Homebrew):

## Step A: Installation of FFmpeg 

1. Install Homebrew. Homebrew is a package manager for macOS that simplifies the installation of software packages. Open your terminal and run the following command to install Homebrew: 

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Install FFmpeg. With Homebrew installed, you can now install FFmpeg by running the following command:

```bash
brew install ffmpeg
```

* During the installation, Homebrew may prompt you to confirm the creation of some directories and files - you can press the RETURN/ENTER key to continue with the installation. 
This is normal and is part of the installation process.

* The installation process provides instructions on how to configure your shell to include Homebrew in your PATH, which is necessary for using Homebrew commands like brew, however for your convenience, step 3 is next, explaining the process further.

3. Configure Homebrew. We already established that your shell needs Homebrew in your PATH since it is necessary for using Homebrew commands like brew so run the following commands in your terminal to add Homebrew to your PATH:

> [!IMPORTANT]
> Replace "YOURUSER" from the command below with your actual user.

```bash
(echo; echo 'eval "$(/opt/homebrew/bin/brew shellenv)"') >> /Users/YOURUSER/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```
> [!IMPORTANT]
> After that you may need to restart your Terminal.

4. Install FFmpeg by running:

```bash
brew install ffmpeg
```

## Step B: Create GIFs Using FFmpeg

1. Once the installation is complete, navigate back to Terminal and use the cd command to connect the directory where the videos prepared for the gif creation reside.

* if the videos are on the desktop, here is how the command should look like:

```bash
cd desktop
```
> [!IMPORTANT]
> Verify that you're in the correct directory by running the ls command, which lists the files and folders in the current directory.

```bash
ls
```

2.  Run the ffmpeg command to convert your video to a GIF. 

* Different types of commands can be used for the purpose depending on your specific needs, however, this is the exact one that I am using:

> [!IMPORTANT]
> Replace "YOURVIDEO" with the name of the video file that should be converted.
> Replace "YOURGIF.gif" with the desired name for the output gif file.

> [!NOTE]
> The parameters (fps, scale, etc.) are also adjustable.

```lua
ffmpeg -i “YOURVIDEO” -vf "fps=30,scale=480:-1" -c:v gif -b:v 3M “YOURGIF.gif"
```

<hr>

# `That's it for now! I hope you find this documentation useful. `




