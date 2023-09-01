Questions Extension Documentation

1. Introduction
   The ChatGPT Chrome Extension project aims to provide a simple interface for users to interact with a mock ChatGPT API. It allows users to enter questions and receive predefined responses.

2. Installation
   To install and run the Chrome extension, follow these steps:

Clone or download the project repository from https://github.com/sauravbhise/chrome-extension.

Alternatively, you can download the project zip from the email attachment.

Open Google Chrome.

Navigate to chrome://extensions/.

Enable Developer mode by toggling the switch.

Click on Load unpacked and select the extension folder from the downloaded repository.

The extension will now be added to your Chrome browser.

Navigate to the /api folder of the project using your terminal.

Install the required dependencies using `npm install` command.

Run the server using the appropriate command `npm start`.

3. Usage
   Once the extension is installed, you can use it by:

Clicking on the extension icon in the Chrome toolbar to open the popup.

Typing your question into the text input field.

Clicking the Submit button.

The response from the mock ChatGPT API will be displayed in the popup.

4. Integration
   The Chrome extension is integrated with the mock ChatGPT API through API calls. When the user submits a question in the extension popup, the extension communicates with the mock API and displays the response.
5. Challenges and Solutions
   Cross-Origin Requests: Overcame CORS issues by enabling cors in nodejs api.
