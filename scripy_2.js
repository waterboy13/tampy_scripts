// ==UserScript==
// @name         scripy 2
// @namespace    http://tampermonkey.net/
// @version      2024-01-04
// @description  try to take over the world!
// @author       You
// @match        https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAKRz5h9UNEZCM0RDQ0haQzc3TFdXRlpJUEtXRVhCSy4u
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==




// Function to be executed when a value is entered
function handleInput() {
    // Select the input field using its ID or other appropriate selector
    const inputField = document.querySelector('input[aria-labelledby="QuestionId_r4243a47d271a4cc387ec6fc1516993ff QuestionInfo_r4243a47d271a4cc387ec6fc1516993ff"]');

    // Check if the input field is found
    if (inputField !== null) {
        // Read the value from the input field
        const inputValue = inputField.value;

        // Log the value to the console
        console.log('Input field value:', inputValue);

        // Your additional logic here based on the entered value
        // For example, you can perform further actions or trigger another function.
        // Your logic can go here.
    } else {
        console.error('Input field not found. Check the selector.');
    }
}

// Wait for the document to be fully loaded
window.addEventListener('load', function() {
    // Select the input field using its ID or other appropriate selector
    const inputField = document.querySelector('input[aria-labelledby="QuestionId_r4243a47d271a4cc387ec6fc1516993ff QuestionInfo_r4243a47d271a4cc387ec6fc1516993ff"]');

    console.log('bum');

    // Check if the input field is found
    if (inputField !== null) {
        // Add an input event listener to trigger handleInput when the value changes
        inputField.addEventListener('change', handleInput);
    } else {
        console.error('Input field not found. Check the selector.');
    }
});

